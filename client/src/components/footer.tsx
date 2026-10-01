import React from 'react';
import { Shield, GitBranch, Github, Heart } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  const labels = {
    es: {
      brand: "LeFri (Legal Friend) • Fundación Underlife",
      mission: "Plataforma cívica y Open Source para el acceso universal a la justicia y derechos humanos.",
      privacy: "Privacidad (LOPDP / RGPD)",
      terms: "Términos de Servicio",
      cookies: "Política de Cookies",
      rights: "LeFri (Legal Friend) © 2026. Licencia MIT de Código Abierto.",
      security: "Privacidad blindada y cifrado TLS / AES-256",
      openSourceBadge: "Proyecto Open Source",
      contribute: "Colaborar en GitHub",
      ambassadors: "Red de Embajadores",
    },
    en: {
      brand: "LeFri (Legal Friend) • Fundación Underlife",
      mission: "Civic and Open Source platform for universal access to justice and human rights.",
      privacy: "Privacy Policy (LOPDP / GDPR)",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      rights: "LeFri (Legal Friend) © 2026. MIT Open Source License.",
      security: "Hardened privacy & TLS / AES-256 encryption",
      openSourceBadge: "Open Source Project",
      contribute: "Contribute on GitHub",
      ambassadors: "Ambassadors Program",
    },
    pt: {
      brand: "LeFri (Legal Friend) • Fundación Underlife",
      mission: "Plataforma cívica e Open Source para acesso universal à justiça e direitos humanos.",
      privacy: "Privacidade (LOPDP / RGPD)",
      terms: "Termos de Serviço",
      cookies: "Política de Cookies",
      rights: "LeFri (Legal Friend) © 2026. Licença MIT de Código Aberto.",
      security: "Privacidade blindada e criptografia TLS / AES-256",
      openSourceBadge: "Projeto Open Source",
      contribute: "Contribuir no GitHub",
      ambassadors: "Rede de Embaixadores",
    }
  };

  const t = labels[language as 'es' | 'en' | 'pt'] || labels.es;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Open Source Community Spotlight Bar */}
        <div className="mb-6 pb-6 border-b border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="font-semibold text-white">{t.openSourceBadge}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Patrocinado por Fundación Underlife & Weblifetech</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/jonnathanypg/LeFriApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition"
            >
              <Github className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.contribute}</span>
            </a>
            <a 
              href="https://github.com/jonnathanypg/LeFriApp/blob/main/CONTRIBUTING.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>{t.ambassadors}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Mission */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold text-white tracking-wide">
              {t.brand}
            </p>
            <p className="text-[11px] text-slate-400">
              {t.mission}
            </p>
          </div>

          {/* Legal Navigation Links */}
          <nav className="flex flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 text-[10.5px] sm:text-xs text-slate-400 whitespace-nowrap overflow-x-auto py-1">
            <Link 
              href="/privacidad" 
              className="text-slate-400 hover:text-indigo-400 transition-colors underline underline-offset-2 hover:underline-offset-4"
            >
              {t.privacy}
            </Link>
            <span className="text-slate-600 select-none">&bull;</span>
            <Link 
              href="/terminos" 
              className="text-slate-400 hover:text-indigo-400 transition-colors underline underline-offset-2 hover:underline-offset-4"
            >
              {t.terms}
            </Link>
            <span className="text-slate-600 select-none">&bull;</span>
            <Link 
              href="/cookies" 
              className="text-slate-400 hover:text-indigo-400 transition-colors underline underline-offset-2 hover:underline-offset-4"
            >
              {t.cookies}
            </Link>
          </nav>

          {/* Copyright & Security */}
          <div className="text-center md:text-right text-[10px] sm:text-[11px] text-slate-400 space-y-0.5 flex-shrink-0">
            <p>{t.rights}</p>
            <p className="text-[10px] text-slate-500 flex items-center justify-center md:justify-end gap-1">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>{t.security}</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
