import type { LanguageCode, LocalizedLabel } from '@/types/menu'

export function t(lang: LanguageCode, text: LocalizedLabel) {
  return text[lang]
}

