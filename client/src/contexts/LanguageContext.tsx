import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations, useTranslations } from '../lib/i18n';
import i18n from '../i18n';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'es';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    try {
      i18n.changeLanguage(newLang);
    } catch (e) {
      console.warn('i18next sync warning:', e);
    }
    const event = new CustomEvent('languageChanged', { detail: { language: newLang } });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    try {
      i18n.changeLanguage(language);
    } catch (e) {
      console.warn('i18next sync warning:', e);
    }
  }, [language]);

  const t = useTranslations(language);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 