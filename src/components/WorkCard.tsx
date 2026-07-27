import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useLanguage } from '@/contexts/useLanguage'
import { getLocalizedText, getPortfolioContent, type WorkItem } from '@/data/portfolio'

type WorkCardProps = {
  work: WorkItem
  index: number
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const { language } = useLanguage()
  const { ui } = getPortfolioContent(language)

  return (
    <article className="group grid gap-5 rounded-[2.2rem] p-4 transition duration-500 hover:-translate-y-1.5 md:grid-cols-[1.2fr_0.8fr] md:p-6 glass-surface hover:shadow-2xl hover:border-[#4DA1A9]/40 dark:hover:border-[#388BFD]/40">
      <div className="overflow-hidden rounded-[1.8rem] border border-[var(--line-subtle)] bg-[var(--surface)]">
        <img
          src={work.image}
          alt={getLocalizedText(work.title, language)}
          className="monochrome-media h-full min-h-[18rem] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)] font-medium">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{work.year}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-[var(--text-tertiary)] font-medium">
              {getLocalizedText(work.category, language)}
            </p>
            <h3 className="font-display text-3xl leading-none text-[var(--text-primary)]">
              {getLocalizedText(work.title, language)}
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              {getLocalizedText(work.summary, language)}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag.en}
                className="rounded-full border border-[var(--line-subtle)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-primary)] opacity-85 transition hover:opacity-100"
              >
                {getLocalizedText(tag, language)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--line-subtle)] pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-tertiary)]">
              {ui.workDetail.role}
            </p>
            <p className="mt-2 text-sm text-[var(--text-primary)]">
              {getLocalizedText(work.role, language)}
            </p>
          </div>

          <Link
            to={`/works/${work.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#4DA1A9] bg-[rgba(77,161,169,0.08)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:border-[#2E5077] hover:bg-[rgba(77,161,169,0.18)] dark:border-[#388bfd] dark:hover:border-[#58a6ff]"
          >
            {ui.common.viewCase}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
