import { ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Selected Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-[rgba(250,246,240,0.8)] px-4 py-3 shadow-[0_12px_40px_rgba(28,25,23,0.08)] backdrop-blur md:mt-6 md:px-6">
        <a
          href="#top"
          className="font-body text-xs uppercase tracking-[0.35em] text-stone-700"
        >
          Panusbodee
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-500 hover:bg-white md:inline-flex"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#works"
            className="inline-flex rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:bg-white md:hidden"
          >
            Works
          </a>
        </div>
      </div>
    </header>
  )
}
