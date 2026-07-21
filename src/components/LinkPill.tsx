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
      className="group flex items-center justify-between gap-4 rounded-[1.6rem] px-5 py-5 transition duration-300 hover:-translate-y-0.5 glass-surface"
    >
      <div>
        <p className="text-sm text-[rgba(17,17,17,0.92)]">{item.label}</p>
        <p className="mt-1 text-sm leading-6 text-[rgba(17,17,17,0.64)]">
          {item.description}
        </p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-[rgba(46,80,119,0.64)] transition group-hover:text-[#FFA630]"
      />
    </a>
  )
}
