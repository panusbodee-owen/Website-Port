import { createContext } from 'react'

import type { Language } from '@/data/portfolio'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
