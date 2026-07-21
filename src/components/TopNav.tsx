import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Selected Works', to: '/?section=works' },
  { label: 'About', to: '/about' },
  { label: 'Notes', to: '/?section=notes' },
  { label: 'Contact', to: '/?section=contact' },
]

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-3 backdrop-blur md:mt-6 md:px-6 glass-surface">
        <Link
          to="/"
          className="font-body text-xs uppercase tracking-[0.35em] text-[rgba(238,240,255,0.84)]"
        >
          Panusbodee
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm text-[rgba(238,240,255,0.66)] transition hover:text-[rgba(238,240,255,0.95)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/?section=contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[rgba(238,240,255,0.82)] transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 md:inline-flex"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/?section=works"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[rgba(238,240,255,0.75)] transition hover:border-white/25 hover:bg-white/10 md:hidden"
          >
            Works
          </Link>
        </div>
      </div>
    </header>
  )
}
