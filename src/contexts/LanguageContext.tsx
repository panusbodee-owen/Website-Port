import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import {
  getLocalizedText,
  getPortfolioContent,
  getWorkBySlug,
  type Language,
} from '@/data/portfolio'
import { LanguageContext } from '@/contexts/language-context'

const STORAGE_KEY = 'portfolio-language'

const isLanguage = (value: string | null): value is Language => value === 'en' || value === 'th'

const getLanguageFromUrl = (): Language | null => {
  if (typeof window === 'undefined') return null

  const params = new URLSearchParams(window.location.search)
  const urlLanguage = params.get('lang')
  return isLanguage(urlLanguage) ? urlLanguage : null
}

const syncLanguageInUrl = (language: Language) => {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
    document.head.appendChild(element)
  }

  return element
}

const getHashPath = () => {
  const hashValue = window.location.hash.replace(/^#/, '')
  if (!hashValue) return '/'

  const [path] = hashValue.split('?')
  return path || '/'
}

const buildMetadata = (language: Language) => {
  const { profile, ui } = getPortfolioContent(language)
  const path = getHashPath()

  if (path === '/about') {
    return {
      title: `Panusbodee | ${ui.aboutPage.title}`,
      description: ui.aboutPage.description,
    }
  }

  if (path.startsWith('/works/')) {
    const slug = path.replace('/works/', '')
    const work = getWorkBySlug(slug)

    if (work) {
      return {
        title: `Panusbodee | ${getLocalizedText(work.title, language)}`,
        description: getLocalizedText(work.summary, language),
      }
    }
  }

  return {
    title:
      language === 'th'
        ? 'Panusbodee | พอร์ตโฟลิโอด้านการออกแบบ ระบบ และการจัดการโปรเจกต์'
        : 'Panusbodee | Portfolio for systems, design, and project leadership',
    description: getLocalizedText(profile.statement, language),
  }
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'

    const urlLanguage = getLanguageFromUrl()
    if (urlLanguage) return urlLanguage

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
    return storedLanguage === 'th' ? 'th' : 'en'
  })

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    syncLanguageInUrl(nextLanguage)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
    syncLanguageInUrl(language)
  }, [language])

  useEffect(() => {
    const applyMetadata = () => {
      const metadata = buildMetadata(language)
      document.title = metadata.title

      const descriptionTag = ensureMetaTag('meta[name="description"]', { name: 'description' })
      descriptionTag.setAttribute('content', metadata.description)

      const ogTitle = ensureMetaTag('meta[property="og:title"]', { property: 'og:title' })
      ogTitle.setAttribute('content', metadata.title)

      const ogDescription = ensureMetaTag('meta[property="og:description"]', {
        property: 'og:description',
      })
      ogDescription.setAttribute('content', metadata.description)

      const ogLocale = ensureMetaTag('meta[property="og:locale"]', { property: 'og:locale' })
      ogLocale.setAttribute('content', language === 'th' ? 'th_TH' : 'en_US')

      const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', {
        name: 'twitter:title',
      })
      twitterTitle.setAttribute('content', metadata.title)

      const twitterDescription = ensureMetaTag('meta[name="twitter:description"]', {
        name: 'twitter:description',
      })
      twitterDescription.setAttribute('content', metadata.description)
    }

    applyMetadata()
    window.addEventListener('hashchange', applyMetadata)

    return () => window.removeEventListener('hashchange', applyMetadata)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
