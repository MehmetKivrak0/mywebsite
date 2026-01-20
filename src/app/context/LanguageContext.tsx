'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { LanguageCode } from '@/types/menu'

type LanguageContextValue = {
  lang: LanguageCode
  setLang: (lang: LanguageCode) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  children,
  defaultLang = 'tr',
}: {
  children: React.ReactNode
  defaultLang?: LanguageCode
}) {
  const [lang, setLang] = useState<LanguageCode>(defaultLang)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('lang')
      if (saved === 'tr' || saved === 'en') setLang(saved)
    } catch {}
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang)
      document.documentElement.lang = lang
    } catch {}
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'tr' ? 'en' : 'tr')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

