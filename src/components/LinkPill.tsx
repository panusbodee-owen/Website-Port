import { ArrowUpRight } from 'lucide-react'

import type { PortfolioLink } from '@/data/portfolio'

type LinkPillProps = {
  item: PortfolioLink
}

export default function LinkPill({ item }: LinkPillProps) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-stone-200 bg-[rgba(255,252,247,0.85)] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white"
    >
      <div>
        <p className="text-sm text-stone-900">{item.label}</p>
        <p className="mt-1 text-sm leading-6 text-stone-500">
          {item.description}
        </p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-stone-500 transition group-hover:text-stone-950"
      />
    </a>
  )
}
