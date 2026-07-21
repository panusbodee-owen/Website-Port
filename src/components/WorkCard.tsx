import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { WorkItem } from '@/data/portfolio'

type WorkCardProps = {
  work: WorkItem
  index: number
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <article className="group grid gap-5 rounded-[2rem] border border-stone-200/80 bg-[rgba(255,252,247,0.88)] p-4 shadow-[0_30px_80px_rgba(28,25,23,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(28,25,23,0.14)] md:grid-cols-[1.2fr_0.8fr] md:p-5">
      <div className="overflow-hidden rounded-[1.6rem] border border-stone-200/70 bg-stone-100">
        <img
          src={work.image}
          alt={work.title}
          className="h-full min-h-[18rem] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[1.6rem] border border-stone-200/70 bg-white/70 p-5">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-stone-500">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{work.year}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-stone-500">{work.category}</p>
            <h3 className="font-display text-3xl leading-none text-stone-950">
              {work.title}
            </h3>
            <p className="text-sm leading-7 text-stone-600">{work.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-stone-200 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Role
            </p>
            <p className="mt-2 text-sm text-stone-700">{work.role}</p>
          </div>

          <Link
            to={`/works/${work.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800 transition hover:border-stone-500 hover:bg-stone-950 hover:text-stone-50"
          >
            View case
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
