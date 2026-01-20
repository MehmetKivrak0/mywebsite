export type LanguageCode = 'tr' | 'en'

export type LocalizedLabel = {
  tr: string
  en: string
}

export type SubmenuItem = {
  labels: LocalizedLabel
  href: string
}

export type HeaderItem = {
  labels: LocalizedLabel
  href: string
  submenu?: SubmenuItem[]
}