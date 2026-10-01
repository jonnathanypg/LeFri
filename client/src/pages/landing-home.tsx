import { useLocation } from 'wouter';
import { 
  Scale, BookOpen, Search, Sparkles, ArrowRight, CheckCircle2, 
  AlertTriangle, FileText, BookmarkCheck,
  Compass, HeartHandshake, Users, Lightbulb,
  Building2, MapPin, Check, Github, GitBranch, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/footer';
import { homeTranslations } from '@/lib/home-copy';

export default function LandingHome() {
  const [, setLocation] = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = homeTranslations[language as 'es' | 'en' | 'pt'] || homeTranslations.es;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* ─── Top Brand & Language Bar ─────────────────────────────── */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-sm shadow-indigo-600/20">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tight text-white">LeFri</span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Legal Friend
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                {t.brandTagline}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              <button 
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 rounded transition-all font-semibold ${language === 'es' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                ES
              </button>
              <button 
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded transition-all font-semibold ${language === 'en' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                type="button"
                onClick={() => setLanguage('pt')}
                className={`px-2.5 py-1 rounded transition-all font-semibold ${language === 'pt' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                PT
              </button>
            </div>

            <Button 
              variant="default"
              size="sm"
              onClick={() => setLocation('/login')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-indigo-600/25"
            >
              {t.signIn}
            </Button>
          </div>
        </div>
      </header>

      {/* ─── Hero Section (Above the Fold / Impactful Design) ─────── */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-teal-500/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] sm:text-xs font-semibold tracking-wide mb-5 uppercase shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Main H1 Headline with LeFri • Legal Friend */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mr-2">
              LeFri
            </span>
            <span className="text-teal-400 font-extrabold mr-2">·</span>
            <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Legal Friend
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-100 mt-2">
              {t.heroTitle1} {t.heroTitle2}
            </span>
          </h1>

          {/* Concise, punchy subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            {t.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-12">
            <Button
              size="lg"
              onClick={() => setLocation('/consulta')}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold px-7 py-5 rounded-xl shadow-lg shadow-teal-500/20 flex items-center justify-center space-x-2 text-base transition-all hover:scale-[1.02]"
            >
              <span>{t.btnKnowRights}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setLocation('/constitucion')}
              className="w-full sm:w-auto border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 py-5 rounded-xl text-base flex items-center justify-center space-x-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>{t.btnExploreConstitution}</span>
            </Button>
          </div>

          {/* Social Proof & Metrics (Clean, compact 1-row on tablet/desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-teal-400 font-mono">{t.stats.articlesVal}</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">{t.stats.articlesLbl}</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">{t.stats.plainVal}</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">{t.stats.plainLbl}</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">{t.stats.freeVal}</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">{t.stats.freeLbl}</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-sky-400 font-mono">{t.stats.stepVal}</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">{t.stats.stepLbl}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conoce tus Derechos ──────────────────────────────────── */}
      <section className="py-16 bg-slate-900/20 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.knowRightsBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">
            {t.knowRightsTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            {t.knowRightsP1}
          </p>
          <p className="text-base sm:text-lg text-slate-200 font-medium">
            {t.knowRightsP2Start} <span className="text-teal-300 font-bold">{t.knowRightsP2Accent}</span>
          </p>
        </div>
      </section>

      {/* ─── Nuestra Misión ───────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 rounded-3xl border border-indigo-500/20 p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4" />
              <span>{t.missionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
              {t.missionTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {t.missionP1}
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {t.missionP2}
            </p>
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-base font-semibold mb-6">
              {t.missionCallout}
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              {t.missionP3}
            </p>
          </div>
        </div>
      </section>

      {/* ─── ¿Cómo te ayuda LeFri? (Cards Homogéneas con CTAs Uniformes) ─ */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.howBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.howTitle}
            </h2>
            <p className="text-slate-300 text-base">
              {t.howSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 tracking-wider">{t.steps[0].stepNumber}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{t.steps[0].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.steps[0].desc}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLocation('/consulta')}
                className="w-full border-indigo-500/40 bg-indigo-950/30 hover:bg-indigo-900/40 text-indigo-200 hover:text-white text-xs font-medium py-4 shadow-sm"
              >
                <span>{t.steps[0].actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono font-bold text-teal-400 tracking-wider">{t.steps[1].stepNumber}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{t.steps[1].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.steps[1].desc}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLocation('/constitucion')}
                className="w-full border-teal-500/40 bg-teal-950/30 hover:bg-teal-900/40 text-teal-200 hover:text-white text-xs font-medium py-4 shadow-sm"
              >
                <span>{t.steps[1].actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 tracking-wider">{t.steps[2].stepNumber}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{t.steps[2].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.steps[2].desc}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLocation('/consulta')}
                className="w-full border-sky-500/40 bg-sky-950/30 hover:bg-sky-900/40 text-sky-200 hover:text-white text-xs font-medium py-4 shadow-sm"
              >
                <span>{t.steps[2].actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">{t.steps[3].stepNumber}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{t.steps[3].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.steps[3].desc}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLocation('/proceso')}
                className="w-full border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-200 hover:text-white text-xs font-medium py-4 shadow-sm"
              >
                <span>{language === 'en' ? 'Explore guidance' : language === 'pt' ? 'Explorar orientações' : 'Conocer rutas'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Herramientas ─────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.toolsBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
            {t.toolsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Herramienta 1 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[0].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.tools[0].desc}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/constitucion')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[0].btnText}
            </Button>
          </div>

          {/* Herramienta 2 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[1].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.tools[1].desc}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/consulta')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[1].btnText}
            </Button>
          </div>

          {/* Herramienta 3 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[2].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.tools[2].desc}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/proceso')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[2].btnText}
            </Button>
          </div>

          {/* Herramienta 4 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[3].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.tools[3].desc}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/consulta')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[3].btnText}
            </Button>
          </div>

          {/* Herramienta 5 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[4].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.tools[4].desc}
              </p>
              {t.tools[4].disclaimer && (
                <p className="text-xs text-slate-400 mb-6 italic">
                  {t.tools[4].disclaimer}
                </p>
              )}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/documentos')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[4].btnText}
            </Button>
          </div>

          {/* Herramienta 6 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.tools[5].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.tools[5].desc}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLocation('/processes')}
              className="border-slate-700 bg-slate-950/60 hover:bg-slate-800 text-slate-100 hover:text-white w-full"
            >
              {t.tools[5].btnText}
            </Button>
          </div>

          {/* Herramienta 7: Urgencia - Span full width on md */}
          <div className="md:col-span-2 lg:col-span-3 bg-rose-950/20 p-6 rounded-2xl border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{t.urgencyTitle}</h3>
                <p className="text-slate-200 text-sm leading-relaxed max-w-2xl">
                  {t.urgencyDesc}
                </p>
              </div>
            </div>
            <Button 
              size="sm" 
              onClick={() => setLocation('/emergencia')}
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold whitespace-nowrap px-6 py-5 shadow-lg shadow-rose-600/30 flex-shrink-0 w-full sm:w-auto"
            >
              {t.urgencyBtn}
            </Button>
          </div>
        </div>
      </section>

      {/* ─── De la Información a la Acción ────────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.actionBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">
            {t.actionTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {t.actionSubtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10 text-center">
            {t.actionQuestions.map((q, idx) => (
              <div key={idx} className={`p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 font-semibold text-sm ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                {q}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center justify-center p-4 bg-teal-950/30 border border-teal-500/30 rounded-2xl text-teal-300 text-base sm:text-lg font-bold">
            {t.actionFlow}
          </div>
        </div>
      </section>

      {/* ─── Derechos en la Vida Cotidiana ────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.dailyBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
            {t.dailyTitle}
          </h2>
          <p className="text-slate-300 text-base">
            {t.dailySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.dailyAreas.map((area, idx) => (
            <div key={idx} className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-base font-bold text-white mb-2">{area.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => setLocation('/constitucion')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-6 rounded-xl shadow-md shadow-indigo-600/20"
          >
            {t.dailyBtnAll}
          </Button>
        </div>
      </section>

      {/* ─── Cohesión Social ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.cohesionBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.cohesionTitle}
            </h2>
          </div>

          <p className="text-slate-300 text-base leading-relaxed mb-6">
            {t.cohesionP1}
          </p>

          <p className="text-slate-200 font-semibold text-base mb-4">
            {t.cohesionP2}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {t.cohesionPoints.map((pt, idx) => (
              <div key={idx} className={`p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-sm text-slate-200 flex items-start space-x-2.5 ${idx === 4 ? 'sm:col-span-2 md:col-span-2' : ''}`}>
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/25 text-indigo-200 text-sm sm:text-base leading-relaxed">
            {t.cohesionCallout}
          </div>
        </div>
      </section>

      {/* ─── Acceso a la Justicia ─────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.justiceBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.justiceTitle}
            </h2>
          </div>

          <div className="bg-slate-900/60 p-8 sm:p-10 rounded-3xl border border-slate-800 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-teal-300 mb-6 italic">
              {t.justiceQuote}
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              {t.justiceP1}
            </p>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {t.justiceCallout}
            </div>
            <p className="text-slate-200 font-semibold text-base mt-6">
              {t.justiceP2}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Tecnología con Responsabilidad ───────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.techBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.techTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {t.techSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.techPrinciples.map((prin, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">{prin.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Información y Jurisdicción ───────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.jurisdictionBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
            {t.jurisdictionTitle}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {t.jurisdictionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 relative">
            <Badge className="bg-indigo-600 text-white mb-4">{t.jurisdictionMainBadge}</Badge>
            <h3 className="text-2xl font-bold text-white mb-3">{t.jurisdictionMainTitle}</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              {t.jurisdictionMainDesc}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Badge variant="outline" className="text-slate-300 border-slate-700 mb-4">{t.jurisdictionNextBadge}</Badge>
            <h3 className="text-2xl font-bold text-white mb-3">{t.jurisdictionNextTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.jurisdictionNextDesc}
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm font-semibold text-slate-200">
            {t.jurisdictionMotto}
          </p>
        </div>
      </section>

      {/* ─── Accesible para más personas ──────────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.accessBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
            {t.accessTitle}
          </h2>
          <p className="text-slate-300 text-base mb-10 max-w-2xl mx-auto">
            {t.accessSubtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            {t.accessPoints.map((pt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">{pt}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.accessNote}
          </p>
        </div>
      </section>

      {/* ─── Para quién es LeFri ───────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.audienceBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.audienceTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
              {t.audienceP1}
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-6 text-center">
              {t.audienceComplementaryTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.audienceList.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-sm font-medium text-slate-200 flex items-center space-x-2.5">
                  <Users className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Nuestro Enfoque ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.approachBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.approachTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {t.approachSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 mx-auto flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.approachElements[0].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.approachElements[0].desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mx-auto flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.approachElements[1].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.approachElements[1].desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 mx-auto flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.approachElements[2].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.approachElements[2].desc}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-slate-300 max-w-2xl mx-auto">
              {t.approachFooter}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Impacto ──────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.impactBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.impactTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {t.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {t.impactList.map((imp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 flex items-start space-x-2">
                <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{imp}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto">
            {t.impactFooter}
          </p>
        </div>
      </section>

      {/* ─── Ecuador ──────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.ecuadorBadge}</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">
            {t.ecuadorTitle}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-4 max-w-3xl mx-auto">
            {t.ecuadorP1}
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.ecuadorP2}
          </p>

          <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/25 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">{t.ecuadorCardTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.ecuadorCardDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Alianzas & Colaboración ───────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{t.alliancesBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              {t.alliancesTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {t.alliancesSubtitle}
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm text-slate-300">
              {t.alliancesList.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {t.alliancesFooter}
            </p>

            <Button 
              variant="outline" 
              onClick={() => setLocation('/login?mode=collaborate')}
              className="border-indigo-500/40 bg-indigo-950/20 text-indigo-300 hover:text-white hover:bg-indigo-900/40"
            >
              {t.alliancesBtn}
            </Button>
          </div>

          <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-8 sm:p-10 rounded-3xl border border-indigo-500/25">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.collabBadge}</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              {t.collabTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.collabP1}
            </p>
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
              {t.collabP2}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {t.collabTags.map((tag, idx) => (
                <span key={idx} className="bg-slate-800/90 border border-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => setLocation('/login?mode=collaborate')}
                className="bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm flex-1 shadow-md shadow-teal-600/20"
              >
                {t.collabBtnWant}
              </Button>
              <Button 
                variant="outline"
                onClick={() => setLocation('/login?mode=support')}
                className="border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-sm flex-1"
              >
                {t.collabBtnSupport}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Preguntas Frecuentes ─────────────────────────────────── */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.faqBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-3">
              {t.faqTitle}
            </h2>
            <p className="text-slate-300 text-sm">
              {t.faqSubtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-800 bg-slate-900/70 rounded-xl px-5">
                <AccordionTrigger className="text-white hover:no-underline py-4 text-left font-semibold text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-sm leading-relaxed pb-4 space-y-2">
                  {faq.isImportant ? (
                    <>
                      <p className="font-semibold text-teal-300">
                        {language === 'en' ? 'No.' : language === 'pt' ? 'Não.' : 'No.'}
                      </p>
                      <p>{faq.answer.replace(/^(No\.\s*|Não\.\s*)/i, '')}</p>
                    </>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── Call to Action Final ──────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-500/15 via-indigo-600/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">{t.ctaFinalBadge}</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
            {t.ctaFinalTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            {t.ctaFinalP1} <br />
            <strong className="text-white">{t.ctaFinalBold}</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              size="lg"
              onClick={() => setLocation('/consulta')}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-teal-500/25 flex items-center justify-center space-x-2 text-base transition-all hover:scale-[1.02]"
            >
              <span>{t.btnKnowRights}</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setLocation('/constitucion')}
              className="w-full sm:w-auto border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-100 hover:text-white font-medium px-6 py-6 rounded-xl text-base flex items-center justify-center space-x-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>{t.btnExploreConstitution}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Open Source & Country Ambassadors Callout ─────────────── */}
      <section className="py-14 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-slate-900/40 border border-indigo-500/20 backdrop-blur shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="text-center md:text-left space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Open Source · Código Abierto Global</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Construyamos el <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">Legal Friend</span> de cada país
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  LeFri es un proyecto 100% de código abierto patrocinado por <strong>Fundación Underlife</strong> y <strong>Weblifetech</strong>. Buscamos abogados, universidades y desarrolladores para incorporar las leyes de su nación como <strong>Embajadores por País</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="https://github.com/jonnathanypg/LeFriApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 shadow transition hover:scale-[1.02]"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span>Ver en GitHub</span>
                </a>
                <a
                  href="mailto:jonnathan@fundacionunderlife.org?subject=%5BEMBAJADOR%20LEFRI%5D%20Propuesta%20de%20Adopci%C3%B3n%20por%20Pa%C3%ADs&body=Hola%20Jonnatan%2C%0A%0AMe%20interesa%20postularme%20como%20Embajador%20%2F%20Aliado%20de%20LeFri%20(Legal%20Friend)%20para%20mi%20pa%C3%ADs.%0A%0A-%20Pa%C3%ADs%20%2F%20Jurisdicci%C3%B3n%3A%20%0A-%20Profesi%C3%B3n%20u%20Organizaci%C3%B3n%3A%20%0A-%20Leyes%20o%20%C3%A1rea%20de%20inter%C3%A9s%20a%20incorporar%3A%20%0A-%20Tel%C3%A9fono%20%2F%20WhatsApp%20de%20contacto%3A%20%0A%0AGracias."
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 transition hover:scale-[1.02]"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>Ser Embajador</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer Disclaimers & Info ─────────────────────────────── */}
      <div className="border-t border-slate-800/80 bg-slate-950 px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-slate-200 font-semibold text-sm">
            {t.footerBrandSubtitle}
          </p>
          <p className="text-slate-400">
            {t.footerInitiative} <span className="text-slate-200 font-medium">{t.footerUnderlife}</span>
          </p>
          <p className="text-[11px] text-slate-400 max-w-3xl mx-auto leading-relaxed pt-2">
            <strong>{t.footerDisclaimerTitle}</strong> {t.footerDisclaimerText}
          </p>
        </div>
      </div>

      {/* Standard Site Footer */}
      <Footer />
    </div>
  );
}
