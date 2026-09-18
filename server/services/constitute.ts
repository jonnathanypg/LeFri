/**
 * constitute.ts
 * 
 * Integration with The Constitute Project Services API (https://www.constituteproject.org/service)
 * Implements constitution headers, topic searches (constopicsearch, sectionstopicsearch),
 * free-text searches (textsearch with 'q' and 'cons_id'), and full HTML extractions.
 */

export interface Constitution {
  id: string;
  country: string;
  country_id: string;
  title: string;
  title_long: string;
  region: string;
  language: string;
  year_enacted: string;
  in_force: boolean;
  word_length: string;
}

export interface TopicSearchResult {
  constitution_id: string;
  section_id: string;
  section_name: string;
  section_text: string;
  topic_name: string;
  relevance_score: number;
}

export class ConstituteService {
  private baseUrl: string;
  private cache: Map<string, any> = new Map();

  // Mapping ISO 2-letter codes to Constitute Project country IDs
  private countryMapping: Record<string, string> = {
    'EC': 'Ecuador',
    'CO': 'Colombia',
    'PE': 'Peru',
    'MX': 'Mexico',
    'CL': 'Chile',
    'AR': 'Argentina',
    'ES': 'Spain',
    'US': 'United_States_of_America',
    'BO': 'Bolivia',
    'VE': 'Venezuela',
    'BR': 'Brazil',
    'UY': 'Uruguay',
    'PY': 'Paraguay',
    'GT': 'Guatemala',
    'CR': 'Costa_Rica',
    'PA': 'Panama',
    'DO': 'Dominican_Republic',
    'SV': 'El_Salvador',
    'HN': 'Honduras',
    'NI': 'Nicaragua'
  };

  constructor() {
    this.baseUrl = process.env.CONSTITUTE_API_BASE_URL || 'https://www.constituteproject.org/service';
  }

  /**
   * Cache write with TTL. The timer is unref'd so it never keeps a
   * Node process (scripts, tests, workers) alive on its own.
   */
  private cacheSet(key: string, value: any, ttlMs: number): void {
    this.cache.set(key, value);
    const timer = setTimeout(() => this.cache.delete(key), ttlMs);
    if (typeof (timer as any)?.unref === 'function') (timer as any).unref();
  }

  private resolveCountry(countryOrCode: string): string {
    const codeUpper = (countryOrCode || 'EC').toUpperCase();
    return this.countryMapping[codeUpper] || countryOrCode;
  }

  /**
   * Request list of constitutions
   * Method: GET /constitutions?[country=<c>&region=<r>&lang=<lang>&from_year=<y>&to_year=<y>&historic=<bool>]
   */
  async getConstitutions(params: {
    country?: string;
    region?: string;
    language?: string;
    from_year?: string;
    to_year?: string;
    historic?: boolean;
  } = {}): Promise<Constitution[]> {
    try {
      const countryName = params.country ? this.resolveCountry(params.country) : undefined;
      const cacheKey = `constitutions_${JSON.stringify({ ...params, country: countryName })}`;
      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const queryParams = new URLSearchParams();
      if (countryName) queryParams.append('country', countryName);
      if (params.region) queryParams.append('region', params.region);
      if (params.language) queryParams.append('lang', params.language || 'es');
      if (params.from_year) queryParams.append('from_year', params.from_year);
      if (params.to_year) queryParams.append('to_year', params.to_year);
      if (params.historic !== undefined) queryParams.append('historic', String(params.historic));

      const url = `${this.baseUrl}/constitutions?${queryParams.toString()}`;
      const response = await fetch(url, { headers: { 'Accept': 'application/json' } });

      if (!response.ok) {
        throw new Error(`Constitute API error: ${response.status}`);
      }

      const data = await response.json();
      this.cacheSet(cacheKey, data, 3600000); // 1 hr cache

      return data;
    } catch (error) {
      console.warn('[ConstituteService] Error fetching constitutions:', error);
      return [];
    }
  }

  /**
   * Free-Text Search
   * Method: GET /textsearch?q=<term>&[country=<c>&cons_id=<id>&lang=<lang>&historic=<bool>]
   */
  async textSearch(params: {
    query: string;
    country?: string;
    language?: string;
    cons_id?: string;
    historic?: boolean;
  }): Promise<any> {
    try {
      const countryName = params.country ? this.resolveCountry(params.country) : undefined;
      const cacheKey = `textsearch_${JSON.stringify({ ...params, country: countryName })}`;
      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const queryParams = new URLSearchParams();
      // Official parameter is 'q'
      queryParams.append('q', params.query);
      if (countryName) queryParams.append('country', countryName);
      if (params.language) queryParams.append('lang', params.language || 'es');
      if (params.cons_id) queryParams.append('cons_id', params.cons_id);
      if (params.historic !== undefined) queryParams.append('historic', String(params.historic));

      const url = `${this.baseUrl}/textsearch?${queryParams.toString()}`;
      const response = await fetch(url, { headers: { 'Accept': 'application/json' } });

      if (!response.ok) {
        throw new Error(`Constitute API error: ${response.status}`);
      }

      const data = await response.json();
      this.cacheSet(cacheKey, data, 1800000); // 30 min cache

      return data;
    } catch (error) {
      console.warn('[ConstituteService] Error in textSearch:', error);
      return null;
    }
  }

  /**
   * Topic Search across a single constitution's sections
   * Method: GET /sectionstopicsearch?key=<topic_key>&cons_id=<id>&lang=<lang>
   */
  async sectionsTopicSearch(topicKey: string, consId: string, language = 'es'): Promise<string[]> {
    try {
      const url = `${this.baseUrl}/sectionstopicsearch?key=${encodeURIComponent(topicKey)}&cons_id=${encodeURIComponent(consId)}&lang=${language}`;
      const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
      if (!response.ok) return [];

      const data = await response.json();
      const constitutionData = data[consId];
      if (!constitutionData || !constitutionData.results) return [];

      return constitutionData.results.map((htmlString: string) => this.stripHtml(htmlString)).filter(Boolean);
    } catch (error) {
      console.warn('[ConstituteService] Error in sectionsTopicSearch:', error);
      return [];
    }
  }

  /**
   * Request full constitution HTML
   * Method: GET /html?cons_id=<id>&lang=<lang>
   */
  async getConstitutionHtml(constitutionId: string, language = 'es'): Promise<string> {
    try {
      const cacheKey = `html_${constitutionId}_${language}`;
      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const url = `${this.baseUrl}/html?cons_id=${constitutionId}&lang=${language}`;
      const response = await fetch(url);
      if (!response.ok) return '';

      const data = await response.json();
      const html = data?.html || '';
      this.cacheSet(cacheKey, html, 86400000); // 24 hr cache

      return html;
    } catch (error) {
      console.warn('[ConstituteService] Error fetching constitution HTML:', error);
      return '';
    }
  }

  /**
   * Structural headings (SECCIÓN/CAPÍTULO/TÍTULO/DISPOSICIÓN, h1-h6) never
   * belong to an article's body: in Constitute HTML they sit between the
   * previous article and the next one, so without stripping they pollute
   * the previous article (ej. "SECCIÓN 9. Personas usuarias y consumidoras"
   * terminaba dentro del Art. 51 y lo hacía rankear como "consumidor").
   */
  private structuralHeaderRes: RegExp[] = [
    /<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi,
    /<p[^>]*>\s*(SECCI[ÓO]N|CAP[ÍI]TULO|T[ÍI]TULO|DISPOSICI[ÓO]N|Secci[óo]n|Cap[íi]tulo|T[íi]tulo|Disposici[óo]n)\b[^<]*<\/p>/gi,
  ];

  private stripStructuralHeaders(htmlSlice: string): string {
    let out = htmlSlice;
    for (const re of this.structuralHeaderRes) {
      re.lastIndex = 0;
      out = out.replace(re, ' ');
    }
    return out;
  }

  /**
   * Extract all individual articles from the constitution HTML
   */
  async getAllArticles(params: { country: string; language?: string }): Promise<{
    constitution: Constitution | null;
    totalArticles: number;
    articles: { id: string; title: string; content: string }[];
  }> {
    try {
      const { country, language = 'es' } = params;
      const countryName = this.resolveCountry(country);
      const cacheKey = `all_articles_${countryName}_${language}`;

      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const constitutions = await this.getConstitutions({
        country: countryName,
        language,
        historic: false
      });

      if (!constitutions || constitutions.length === 0) {
        return { constitution: null, totalArticles: 0, articles: [] };
      }

      const activeCons = constitutions.find(c => c.in_force) || constitutions[0];
      const fullHtml = await this.getConstitutionHtml(activeCons.id, language);

      if (!fullHtml) {
        return { constitution: activeCons, totalArticles: 0, articles: [] };
      }

      const articleRegex = /<p[^>]*>\s*(Art[ií]culo\s*\d+[^\<]*)\s*<\/p>/gi;
      const matches = Array.from(fullHtml.matchAll(articleRegex)) as RegExpExecArray[];
      const articles: { id: string; title: string; content: string }[] = [];

      for (let i = 0; i < matches.length; i++) {
        const title = matches[i][1].trim();
        const startIdx = matches[i].index || 0;
        const endIdx = (i + 1 < matches.length) ? (matches[i + 1].index || fullHtml.length) : fullHtml.length;
        const content = this.stripHtml(this.stripStructuralHeaders(fullHtml.substring(startIdx, endIdx)));
        articles.push({
          id: `art_${i + 1}`,
          title,
          content
        });
      }

      const result = {
        constitution: activeCons,
        totalArticles: articles.length,
        articles
      };

      this.cacheSet(cacheKey, result, 86400000); // 24 hr cache
      return result;
    } catch (error) {
      console.warn('[ConstituteService] Error extracting all articles:', error);
      return { constitution: null, totalArticles: 0, articles: [] };
    }
  }

  /**
   * Retrieve structured articles matching a user's legal crisis query.
   * Estrategia: búsqueda local con scoring sobre el corpus completo ya
   * parseado (getAllArticles) + fallback remoto a /textsearch.
   * Corrige el bug "protección al consumidor": antes hacía return al
   * primer token ("proteccion", 45 hits) sin intersección con "consumidor".
   */
  async getRelevantArticles(params: {
    query: string;
    country: string;
    language?: string;
    limit?: number;
  }): Promise<string[]> {
    try {
      const { query, country, language = 'es', limit = 6 } = params;
      const countryName = this.resolveCountry(country);

      // 1. Fetch available in-force constitutions for this country
      const constitutions = await this.getConstitutions({
        country: countryName,
        language,
        historic: false
      });

      if (!constitutions || constitutions.length === 0) {
        return [];
      }

      // Pick the primary active constitution
      const activeCons = constitutions.find(c => c.in_force) || constitutions[0];
      const consId = activeCons.id;

      const rawTokens = this.tokenizeQuery(query);
      const normQuery = this.normalizeText(query).replace(/\s+/g, ' ').trim();
      const queryNumbers = Array.from(normQuery.matchAll(/\b\d{1,3}\b/g)).map(m => m[0]);

      // 2. PRIMARY: local search with scoring over the full parsed corpus
      if (rawTokens.length > 0) {
        const fullInfo = await this.getAllArticles({ country: countryName, language });
        if (fullInfo.articles.length > 0) {
          const scored = this.scoreArticlesLocal(
            fullInfo.articles.map(a => ({ title: a.title, content: a.content })),
            rawTokens,
            normQuery,
            queryNumbers,
            limit
          );
          if (scored.length > 0) {
            return scored;
          }
        }
      }

      // 3. Fallback remoto: frase exacta vía /textsearch
      const sectionResults = await this.textSearch({
        query,
        cons_id: consId,
        language
      });

      if (sectionResults && sectionResults[consId] && sectionResults[consId].results) {
        const rawResults: string[] = sectionResults[consId].results;
        const cleaned = rawResults
          .slice(0, limit)
          .map(html => this.stripHtml(html))
          .filter(text => text.length > 20);

        if (cleaned.length > 0) {
          return cleaned;
        }
      }

      // 4. Fallback remoto por token (solo si lo local no indexó nada).
      // Sin early-return ciego: se recolecta el mejor token por nº de hits.
      if (rawTokens.length > 0) {
        let best: string[] = [];
        for (const token of rawTokens) {
          const tokenRes = await this.textSearch({ query: token, cons_id: consId, language });
          const hits = tokenRes?.[consId]?.results?.length || 0;
          if (hits > 0) {
            const cleaned = (tokenRes[consId].results as string[])
              .slice(0, limit)
              .map((html: string) => this.stripHtml(html))
              .filter((text: string) => text.length > 20);
            if (cleaned.length > 0 && (best.length === 0 || hits > best.length)) {
              best = cleaned;
            }
          }
          const expansions = this.getTermExpansions()[token] || [];
          for (const exp of expansions) {
            const expRes = await this.textSearch({ query: exp, cons_id: consId, language });
            if (expRes?.[consId]?.results?.length > 0) {
              const cleaned = (expRes[consId].results as string[])
                .slice(0, limit)
                .map((html: string) => this.stripHtml(html))
                .filter((text: string) => text.length > 20);
              if (cleaned.length > 0 && best.length === 0) {
                best = cleaned;
              }
            }
          }
        }
        if (best.length > 0) {
          return best;
        }
      }

      // 5. Last Fallback: Topic search
      const topics = ['debido proceso', 'derechos fundamentales', 'trabajo', 'familia', 'igualdad'];
      for (const t of topics) {
        if (query.toLowerCase().includes(t)) {
          const topicArticles = await this.sectionsTopicSearch(t, consId, language);
          if (topicArticles.length > 0) {
            return topicArticles.slice(0, limit);
          }
        }
      }

      return [];
    } catch (error) {
      console.warn('[ConstituteService] Error getting relevant articles:', error);
      return [];
    }
  }

  /**
   * Bloques jurídicos conocidos: si la consulta apunta al tema del bloque,
   * sus artículos reciben un bonus para que el bloque llegue completo aunque
   * algún artículo use una redacción distinta (ej. Art. 54: "bienes de
   * consumo" en vez de "consumidor"). Verificado contra Ecuador_2021.
   * Para añadir un bloque nuevo, agregar una entrada aquí (no regex sueltas).
   */
  private clusterBoosts: { tokens: string[]; titleRe: RegExp; bonus: number; comment: string }[] = [
    { tokens: ['consumidor', 'consumidoras', 'consumidores', 'consumo', 'usuarias', 'usuarios'], titleRe: /^articulo\s*5[2-5]\b/, bonus: 30, comment: 'Sección 9: Personas usuarias y consumidoras' },
    { tokens: ['debido', 'proceso'], titleRe: /^articulo\s*7[67]\b/, bonus: 30, comment: 'Garantías básicas del debido proceso' },
  ];

  private matchesCluster(rawTokens: string[], normQuery: string, tokens: string[]): boolean {
    if (rawTokens.some(t => tokens.includes(t))) return true;
    // Fallback sobre la frase completa con frontera de palabra: evita que
    // 'procesos electorales' dispare el bloque de debido proceso.
    return tokens.some(t => t.length >= 4 && new RegExp(`\\b${t}\\b`).test(normQuery));
  }

  private getTermExpansions(): Record<string, string[]> {
    return {
      juventud: ['jóvenes', 'joven', 'educación', 'participación'],
      jovenes: ['jóvenes', 'joven', 'educación', 'derechos'],
      joven: ['jóvenes', 'juventud', 'educación'],
      adolescente: ['niñez', 'jóvenes', 'protección'],
      ninez: ['niños', 'niñas', 'familia', 'educación'],
      trabajo: ['empleo', 'laboral', 'remuneración', 'trabajadores'],
      salud: ['atención médica', 'seguridad social', 'vida'],
      vivienda: ['hábitat', 'hogar', 'propiedad'],
      debido: ['garantías judiciales', 'defensa', 'juez'],
      proceso: ['debido proceso', 'garantías', 'justicia'],
      igualdad: ['no discriminación', 'derechos', 'equidad'],
      libertad: ['expresión', 'movilidad', 'asociación'],
      alimentos: ['familia', 'pensión', 'hijos', 'niñez'],
      // Protección al consumidor (Ecuador, Sección 9, Arts. 52-55).
      // Nota: sinónimos genéricos ('defensa', 'calidad' suelta) NO van aquí
      // porque aparecen en decenas de artículos y hunden el ranking.
      proteccion: ['garantía', 'tutela', 'control de calidad'],
      consumidor: ['consumidoras', 'consumidores', 'usuarias', 'usuarios', 'bienes de consumo', 'bienes y servicios', 'control de calidad', 'óptima calidad'],
      consumidoras: ['consumidores', 'usuarias', 'bienes y servicios', 'control de calidad'],
      usuarias: ['usuarios', 'consumidoras', 'consumidores', 'servicios públicos'],
      consumo: ['bienes de consumo', 'consumidoras', 'consumidores'],
      calidad: ['óptima calidad', 'control de calidad', 'bienes y servicios'],
    };
  }

  private normalizeText(s: string): string {
    if (!s) return '';
    // Preservar ñ antes de strip diacríticos (NFD convierte ñ en n + virgulilla)
    return s
      .toLowerCase()
      .replace(/ñ/g, '\u0001')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\u0001/g, 'ñ');
  }

  private tokenizeQuery(query: string): string[] {
    const stop = new Set([
      'para', 'como', 'sobre', 'este', 'esta', 'todo', 'toda', 'todos', 'todas',
      'unos', 'unas', 'pero', 'ante', 'bajo', 'desde', 'entre', 'hasta',
      'los', 'las', 'que', 'con', 'por', 'una', 'uno', 'sus', 'son', 'sea',
      'ser', 'hay', 'muy', 'sin', 'mas', 'asi', 'tan', 'fue', 'esta', 'esto',
    ]);
    return this.normalizeText(query)
      .replace(/[^a-z0-9ñ\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 3 && !stop.has(t));
  }

  private scoreArticlesLocal(
    articles: { title: string; content: string }[],
    rawTokens: string[],
    normQuery: string,
    queryNumbers: string[],
    limit: number
  ): string[] {
    const expansions = this.getTermExpansions();
    const total = Math.max(articles.length, 1);

    // Pre-normalizar corpus una vez + DF para ponderación IDF:
    // términos raros ('consumidor') pesan más que comunes ('proteccion').
    const normed = articles.map(a => ({
      title: a.title,
      content: a.content,
      normTitle: this.normalizeText(a.title),
      normContent: this.normalizeText(a.content),
    }));
    const df = new Map<string, number>();
    const countTerm = (term: string) => {
      if (term.length < 3 || df.has(term)) return;
      let n = 0;
      for (const a of normed) {
        if (a.normTitle.includes(term) || a.normContent.includes(term)) n++;
      }
      df.set(term, n);
    };
    for (const t of rawTokens) {
      countTerm(t);
      for (const syn of expansions[t] || []) countTerm(this.normalizeText(syn));
    }
    const idf = (term: string): number => {
      const n = df.get(term) ?? total;
      return 1 + Math.log(total / Math.max(n, 1));
    };

    const scored: { content: string; score: number; hits: number }[] = [];

    for (const a of normed) {
      const { normContent, normTitle } = a;
      let score = 0;
      let hits = 0;

      // Bonus frase exacta
      if (normQuery.length >= 4 && normContent.includes(normQuery)) {
        score += 8;
      }

      // Bonus número de artículo explícito ("artículo 52")
      for (const n of queryNumbers) {
        if (new RegExp(`articulo\\s*${n}\\b`).test(normTitle) || new RegExp(`articulo\\s*${n}\\b`).test(normContent.slice(0, 120))) {
          score += 20;
          hits += 2;
        }
      }

      let directHits = 0;
      let synHits = 0;

      for (const token of rawTokens) {
        const w = idf(token);
        let directHit = false;
        if (normTitle.includes(token)) {
          score += 10 * w;
          directHit = true;
        } else if (normContent.includes(token)) {
          score += 5 * w;
          directHit = true;
        } else if (token.length >= 6) {
          // Raíz léxica con frontera de palabra: 'consum' cubre
          // consumo/consumidor/consumidoras; 'protec' cubre
          // protección/protecciones. Pesa menos que el término exacto
          // pero cuenta como coincidencia directa (mismo lexema).
          const stemRe = new RegExp(`\\b${token.slice(0, 6)}`);
          if (stemRe.test(normTitle)) {
            score += 6 * w;
            directHit = true;
          } else if (stemRe.test(normContent)) {
            score += 3 * w;
            directHit = true;
          }
        }
        if (!directHit) {
          // Raíz singular/plural (consumidores -> consumidor)
          const root = token.length > 4 ? token.replace(/(es|s)$/, '') : token;
          if (root.length >= 4 && (normContent.includes(root) || normTitle.includes(root))) {
            score += 3 * idf(root);
            directHit = true;
          }
        }

        // Sinónimos del token: pesan menos y NO cuentan como hit directo.
        // (Antes dos sinónimos genéricos simulaban intersección temática
        // y colaban artículos irrelevantes por encima del bloque correcto.)
        let synHit = false;
        {
          const syns = expansions[token] || [];
          for (const syn of syns) {
            const normSyn = this.normalizeText(syn);
            if (normSyn.length < 3) continue;
            const ws = idf(normSyn);
            if (normTitle.includes(normSyn)) {
              score += (directHit ? 1 : 4) * ws;
              synHit = true;
              break;
            }
            if (normContent.includes(normSyn)) {
              score += (directHit ? 1 : 3) * ws;
              synHit = true;
              break;
            }
          }
        }

        if (directHit) {
          directHits += 1;
          hits += 1;
        } else if (synHit) {
          synHits += 1;
          hits += 1;
        }
      }

      // Bonus cluster jurídico conocido (ver clusterBoosts): garantiza que
      // una consulta temática traiga el bloque completo aunque un artículo
      // use una redacción distinta (ej. Art. 54: "bienes de consumo";
      // Art. 77: garantías en proceso penal sin decir "debido").
      let clusterHit = false;
      for (const cb of this.clusterBoosts) {
        if (this.matchesCluster(rawTokens, normQuery, cb.tokens) && cb.titleRe.test(normTitle)) {
          score += cb.bonus;
          clusterHit = true;
          break;
        }
      }

      // Intersección: premia artículos que cubren varios tokens con el
      // término exacto (o su raíz). Pertenecer al bloque temático cuenta
      // como una coincidencia más; los sinónimos solos dan un bonus menor.
      const effDirect = directHits + (clusterHit ? 1 : 0);
      if (effDirect >= 2) {
        score += effDirect * 8;
      } else if (directHits >= 1 && synHits >= 1) {
        score += 4;
      }

      if (score > 0) {
        scored.push({ content: a.content, score, hits });
      }
    }

    scored.sort((x, y) => y.score - x.score || y.hits - x.hits);
    return scored.slice(0, limit).map(s => s.content);
  }

  private stripHtml(html: string): string {
    if (!html) return '';
    return html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const constituteService = new ConstituteService();
