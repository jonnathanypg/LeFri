/**
 * verify-constitute.ts
 *
 * Regression tests for the Constitution search (Constitute Project API).
 * - Offline (default): mocked fetch, deterministic. No network.
 * - Live: `tsx scripts/verify-constitute.ts --live` hits the real API.
 *
 * Run: node_modules/.bin/tsx scripts/verify-constitute.ts [--live]
 */
import assert from 'node:assert';
import { ConstituteService } from '../server/services/constitute.ts';

const MOCK_HTML = [
  '<p>Artículo 52</p><p>Las personas tienen derecho a disponer de bienes y servicios de óptima calidad y a elegirlos con libertad.</p>',
  '<p>Artículo 53</p><p>Las empresas que presten servicios públicos deberán incorporar sistemas de medición de satisfacción de las personas usuarias y consumidoras.</p>',
  '<p>Artículo 54</p><p>Las personas que produzcan o comercialicen bienes de consumo serán responsables por la deficiente prestación del servicio.</p>',
  '<p>Artículo 55</p><p>Las personas usuarias y consumidoras podrán constituir asociaciones que promuevan sus derechos.</p>',
  '<p>Artículo 35</p><p>Las personas adultas mayores recibirán atención prioritaria y protección contra la violencia.</p><p>SECCIÓN 9. Personas usuarias y consumidoras</p>',
  '<p>Artículo 66</p><p>Se reconoce y garantizará a las personas el derecho a la protección de datos personales y a la inviolabilidad de la vida.</p>',
].join('');

const MOCK_CONSTITUTIONS = [{
  id: 'Test_2021',
  country: 'Testland',
  country_id: 'TT',
  title: 'Test 2008',
  title_long: 'Test Constitution 2008',
  region: 'Americas',
  language: 'es',
  year_enacted: '2008',
  in_force: true,
  word_length: '1000',
}];

function installMockFetch() {
  (globalThis as any).fetch = async (url: string) => {
    const u = String(url);
    if (u.includes('/constitutions')) {
      return { ok: true, json: async () => MOCK_CONSTITUTIONS };
    }
    if (u.includes('/html')) {
      return { ok: true, json: async () => ({ html: MOCK_HTML }) };
    }
    if (u.includes('/textsearch')) {
      return { ok: true, json: async () => ({ Test_2021: { results: [] } }) };
    }
    return { ok: true, json: async () => ({}) };
  };
}

function titlesOf(contents: string[]): string[] {
  return contents.map(c => {
    const m = c.match(/Art(?:[ií]culo)?\.?\s*\d+/i);
    return m ? m[0] : c.slice(0, 30);
  });
}

async function offline() {
  installMockFetch();

  // 1. Tokenizer: stopwords + diacritics
  {
    const svc = new ConstituteService();
    const tokens = (svc as any).tokenizeQuery('Protección al consumidor!');
    assert.deepStrictEqual(tokens, ['proteccion', 'consumidor'], 'tokenizer');
    console.log('PASS offline/tokenizer ->', tokens.join(','));
  }

  // 2. Full extraction from HTML
  {
    const svc = new ConstituteService();
    const full = await svc.getAllArticles({ country: 'EC', language: 'es' });
    assert.strictEqual(full.constitution?.id, 'Test_2021', 'constitution id');
    assert.strictEqual(full.totalArticles, 6, 'total articles');
    assert.deepStrictEqual(
      full.articles.map(a => a.title),
      ['Artículo 52', 'Artículo 53', 'Artículo 54', 'Artículo 55', 'Artículo 35', 'Artículo 66'],
      'article titles'
    );
    console.log('PASS offline/extraction -> 6 articulos');
  }

  // 3. "proteccion al consumidor": el bloque 52-55 completo en el top-4,
  // y el ruido de "protección" genérica (Art. 66) fuera del top-4.
  {
    const svc = new ConstituteService();
    const res = await svc.getRelevantArticles({ query: 'proteccion al consumidor', country: 'EC', language: 'es', limit: 6 });
    const top4 = new Set(titlesOf(res.slice(0, 4)).map(t => t.replace(/\s+/g, ' ')));
    for (const n of ['52', '53', '54', '55']) {
      assert.ok([...top4].some(t => new RegExp(`\\b${n}\\b`).test(t)), `top-4 contiene Articulo ${n} (top4=${[...top4]})`);
    }
    assert.ok(!titlesOf(res.slice(0, 4)).some(t => /\b66\b/.test(t)), 'Art. 66 fuera del top-4');
    console.log('PASS offline/consumidor -> top4:', [...top4].join(' | '));
  }

  // 4. Single-token query still returns direct hits (no over-filtering)
  {
    const svc = new ConstituteService();
    const res = await svc.getRelevantArticles({ query: 'consumidoras', country: 'EC', language: 'es', limit: 6 });
    assert.ok(res.length >= 2, 'single-token query no vacia');
    assert.ok(/consumidoras/i.test(res[0]), 'top-1 contiene el termino');
    console.log('PASS offline/single-token ->', titlesOf(res.slice(0, 2)).join(' | '));
  }
  // 5. Structural headers must not leak into the previous article
  // (real case: "SECCIÓN 9..." lived inside Art. 51 and outranked Art. 54)
  {
    const svc = new ConstituteService();
    const full = await svc.getAllArticles({ country: 'EC', language: 'es' });
    const art35 = full.articles.find(a => a.title === 'Artículo 35');
    assert.ok(art35 && !/SECCI[ÓO]N/i.test(art35.content), 'sin encabezado SECCIÓN en Art. 35');
    assert.ok(art35 && !/consumidoras/i.test(art35.content), 'sin "consumidoras" filtrado en Art. 35');
    console.log('PASS offline/no-header-leak -> Art. 35 limpio');
  }
}

async function live() {
  const svc = new ConstituteService();

  // 1. Ecuador vigente + corpus completo
  const full = await svc.getAllArticles({ country: 'EC', language: 'es' });
  assert.strictEqual(full.constitution?.id, 'Ecuador_2021', `cons_id (fue ${full.constitution?.id})`);
  assert.ok(full.totalArticles >= 440, `total>=440 (fue ${full.totalArticles})`);
  const art52 = full.articles.find(a => a.title === 'Artículo 52');
  assert.ok(art52 && /bienes y servicios/i.test(art52.content), 'Art. 52 presente con contenido real');
  console.log(`PASS live/corpus -> ${full.constitution.id}, ${full.totalArticles} articulos`);

  // 2. Bloque consumidor completo en top-4
  {
    const res = await svc.getRelevantArticles({ query: 'proteccion al consumidor', country: 'EC', language: 'es', limit: 6 });
    const top4 = titlesOf(res.slice(0, 4)).join(' / ');
    for (const n of ['52', '53', '54', '55']) {
      assert.ok(new RegExp(`Artículo\\s*${n}\\b`).test(top4), `top-4 contiene Art. ${n} (top4=${top4})`);
    }
    console.log('PASS live/consumidor -> top4:', top4);
  }

  // 3. Debido proceso: 76 + 77 en top-6
  {
    const res = await svc.getRelevantArticles({ query: 'debido proceso', country: 'EC', language: 'es', limit: 6 });
    const top = titlesOf(res).join(' / ');
    assert.ok(/Artículo\s*76\b/.test(top), `top contiene Art. 76 (${top})`);
    assert.ok(/Artículo\s*77\b/.test(top), `top contiene Art. 77 (${top})`);
    console.log('PASS live/debido-proceso ->', top);
  }
}

(async () => {
  if (process.argv.includes('--live')) {
    console.log('--- LIVE (Constitute Project API) ---');
    await live();
  } else {
    console.log('--- OFFLINE (mocked fetch) ---');
    await offline();
  }
  console.log('ALL GREEN');
})().catch(e => {
  console.error('FAIL:', (e as Error).message);
  process.exit(1);
});
