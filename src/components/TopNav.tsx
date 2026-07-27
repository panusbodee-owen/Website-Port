import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useLanguage } from '@/contexts/useLanguage'
import { useTheme } from '@/contexts/useTheme'
import { getPortfolioContent } from '@/data/portfolio'

export default function TopNav() {
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const { ui } = getPortfolioContent(language)

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-3 backdrop-blur md:mt-6 md:px-6 glass-surface">
        <Link
          to="/"
          className="font-body text-xs uppercase tracking-[0.35em] text-[var(--text-primary)] opacity-90 transition hover:opacity-100"
        >
          {ui.nav.brand}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {ui.nav.items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] text-[var(--text-primary)] transition hover:scale-105"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-[#ffa630] transition duration-300" />
            ) : (
              <Moon size={16} className="text-[#2E5077] transition duration-300" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="hidden items-center rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-1 md:inline-flex">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === 'en'
                  ? 'bg-[#2E5077] text-[#F7F4EC] dark:bg-[#388bfd] dark:text-[#0c1017]'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              {ui.nav.languages.english}
            </button>
            <button
              type="button"
              onClick={() => setLanguage('th')}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === 'th'
                  ? 'bg-[#2E5077] text-[#F7F4EC] dark:bg-[#388bfd] dark:text-[#0c1017]'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              {ui.nav.languages.thai}
            </button>
          </div>

          <Link
            to="/?section=contact"
            className="hidden items-center gap-2 rounded-full border border-[#2E5077] bg-[#2E5077] px-4 py-2 text-sm text-[#F7F4EC] transition hover:-translate-y-0.5 hover:bg-[#24415f] dark:border-[#388bfd] dark:bg-[#388bfd] dark:text-[#0c1017] dark:hover:bg-[#58a6ff] md:inline-flex"
          >
            {ui.nav.startConversation}
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/?section=works"
            className="inline-flex rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:border-[#4da1a9] md:hidden"
          >
            {ui.nav.mobileWorks}
          </Link>
        </div>
      </div>
    </header>
  )
}
