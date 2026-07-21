import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { WorkItem } from '@/data/portfolio'

type WorkCardProps = {
  work: WorkItem
  index: number
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <article className="group grid gap-5 rounded-[2.2rem] p-4 transition duration-500 hover:-translate-y-1 md:grid-cols-[1.2fr_0.8fr] md:p-6 glass-surface">
      <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5">
        <img
          src={work.image}
          alt={work.title}
          className="monochrome-media h-full min-h-[18rem] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[rgba(238,240,255,0.55)]">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{work.year}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-[rgba(238,240,255,0.6)]">{work.category}</p>
            <h3 className="font-display text-3xl leading-none text-[rgba(238,240,255,0.92)]">
              {work.title}
            </h3>
            <p className="text-sm leading-7 text-[rgba(238,240,255,0.62)]">
              {work.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[rgba(238,240,255,0.62)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(238,240,255,0.45)]">
              Role
            </p>
            <p className="mt-2 text-sm text-[rgba(238,240,255,0.78)]">
              {work.role}
            </p>
          </div>

          <Link
            to={`/works/${work.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[rgba(238,240,255,0.8)] transition hover:border-white/25 hover:bg-white/10"
          >
            View case
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
