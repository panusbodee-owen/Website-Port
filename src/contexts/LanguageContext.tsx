import {
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import type { Language } from '@/data/portfolio'
import { LanguageContext } from '@/contexts/language-context'

const STORAGE_KEY = 'portfolio-language'

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
    return storedLanguage === 'th' ? 'th' : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
