'use client'

import React from 'react'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Trans({
  tr,
  en,
}: {
  tr: React.ReactNode
  en: React.ReactNode
}) {
  const { lang } = useLanguage()
  return <>{lang === 'tr' ? tr : en}</>
}

