import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useLanguage } from '@/contexts/useLanguage'
import { getPortfolioContent } from '@/data/portfolio'

export default function TopNav() {
  const { language, setLanguage } = useLanguage()
  const { ui } = getPortfolioContent(language)

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-3 backdrop-blur md:mt-6 md:px-6 glass-surface">
        <Link
          to="/"
          className="font-body text-xs uppercase tracking-[0.35em] text-[rgba(17,17,17,0.84)]"
        >
          {ui.nav.brand}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {ui.nav.items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm text-[rgba(17,17,17,0.64)] transition hover:text-[rgba(46,80,119,0.96)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-[rgba(46,80,119,0.12)] bg-white/70 p-1 md:inline-flex">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === 'en'
                  ? 'bg-[#2E5077] text-[#F7F4EC]'
                  : 'text-[rgba(17,17,17,0.72)]'
              }`}
            >
              {ui.nav.languages.english}
            </button>
            <button
              type="button"
              onClick={() => setLanguage('th')}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === 'th'
                  ? 'bg-[#2E5077] text-[#F7F4EC]'
                  : 'text-[rgba(17,17,17,0.72)]'
              }`}
            >
              {ui.nav.languages.thai}
            </button>
          </div>
          <Link
            to="/?section=contact"
            className="hidden items-center gap-2 rounded-full border border-[#2E5077] bg-[#2E5077] px-4 py-2 text-sm text-[#F7F4EC] transition hover:-translate-y-0.5 hover:bg-[#24415f] md:inline-flex"
          >
            {ui.nav.startConversation}
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/?section=works"
            className="inline-flex rounded-full border border-[rgba(46,80,119,0.18)] bg-white/60 px-4 py-2 text-sm text-[rgba(17,17,17,0.78)] transition hover:border-[rgba(77,161,169,0.4)] hover:bg-white/80 md:hidden"
          >
            {ui.nav.mobileWorks}
          </Link>
        </div>
      </div>
    </header>
  )
}
