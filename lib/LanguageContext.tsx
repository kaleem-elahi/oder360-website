'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Lang, translations, Translations } from './translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  isRTL: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // On mount: read saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('oder360-lang') as Lang | null
      if (saved === 'en' || saved === 'ar') {
        applyLang(saved)
        setLangState(saved)
      }
    } catch {
      // localStorage unavailable (SSR or private mode)
    }
  }, [])

  const applyLang = (l: Lang) => {
    const html = document.documentElement
    html.setAttribute('lang', l)
    html.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
  }

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    applyLang(l)
    try {
      localStorage.setItem('oder360-lang', l)
    } catch {
      // ignore
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        isRTL: lang === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
