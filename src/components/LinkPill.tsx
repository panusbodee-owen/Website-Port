import { ArrowUpRight } from 'lucide-react'

import { useLanguage } from '@/contexts/useLanguage'
import { getLocalizedText, type PortfolioLink } from '@/data/portfolio'

type LinkPillProps = {
  item: PortfolioLink
}

export default function LinkPill({ item }: LinkPillProps) {
  const { language } = useLanguage()

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-[1.6rem] px-5 py-5 transition duration-300 hover:-translate-y-0.5 glass-surface"
    >
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">{getLocalizedText(item.label, language)}</p>
        <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
          {getLocalizedText(item.description, language)}
        </p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-[var(--text-tertiary)] transition group-hover:text-[#FFA630]"
      />
    </a>
  )
}
