import { useEffect } from 'react'
import { ArrowDownRight, ArrowUpRight, Dot, Sparkles } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import LinkPill from '@/components/LinkPill'
import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import WorkCard from '@/components/WorkCard'
import { notes, portfolioLinks, profile, works } from '@/data/portfolio'

const selectedWorks = works.slice(0, 4)

export default function Home() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (!section) return

    const element = document.getElementById(section)
    if (!element) return

    const timer = window.setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(timer)
  }, [searchParams])

  return (
    <div
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(214,180,128,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(120,113,108,0.08),transparent_28%),#f7f1e8]"
    >
      <div className="page-grain pointer-events-none absolute inset-0 opacity-50" />

      <TopNav />

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.26em] text-stone-600 backdrop-blur">
              <Sparkles size={14} />
              Portfolio 2026
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                {profile.location}
              </p>
              <h1 className="font-display text-[4rem] leading-[0.92] tracking-[-0.04em] text-stone-950 md:text-[6.5rem]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                {profile.statement}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/?section=works"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm text-stone-50 transition hover:-translate-y-0.5 hover:bg-stone-800"
              >
                Explore selected work
                <ArrowDownRight size={16} />
              </Link>
              <a
                href={portfolioLinks[1].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300/90 px-6 py-3 text-sm text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-500 hover:bg-white"
              >
                Open LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[2rem] border border-white/70 bg-[rgba(255,251,245,0.8)] p-6 shadow-[0_25px_70px_rgba(28,25,23,0.08)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Current focus
              </p>
              <p className="mt-4 font-display text-3xl leading-tight text-stone-900">
                Calm interfaces. Structured execution. Clear thinking.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {profile.intro}
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200/80 bg-stone-950 p-6 text-stone-50 shadow-[0_25px_70px_rgba(28,25,23,0.12)]">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Principles
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm text-stone-200 last:border-b-0"
                  >
                    <Dot size={18} className="text-amber-300" />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-[rgba(255,252,247,0.72)] p-6 shadow-[0_25px_70px_rgba(28,25,23,0.06)] md:p-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <SectionHeading
            eyebrow="About"
            title="Bridging structure and taste."
            description="A portfolio for work that lives between strategy, design systems, and project ownership."
          />

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-stone-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {profile.title}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Availability
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {profile.availability}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Perspective
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Design should feel quiet, deliberate, and useful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="space-y-10">
          <SectionHeading
            eyebrow="Selected Works"
            title="Work with rhythm, systems, and intent."
            description="A selection of roles across project leadership, interface thinking, business analysis, and implementation."
          />

          <div className="grid gap-6">
            {selectedWorks.map((work, index) => (
              <WorkCard key={work.slug} work={work} index={index} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to={`/works/${works[4].slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm text-stone-800 transition hover:border-stone-500 hover:bg-white"
            >
              View one more case
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section
          id="notes"
          className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-stone-950 p-6 text-stone-50 shadow-[0_25px_70px_rgba(28,25,23,0.14)] md:p-8 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <SectionHeading
            eyebrow="Notes"
            title="Things I keep close to the way I work."
            description="Outside core projects, I stay interested in disciplines that reward precision, discipline, and sensitivity to detail."
            tone="dark"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-stone-300"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Open for conversations with substance."
            description="If the work involves thoughtful execution, design sensitivity, or a need to bring structure to complexity, I would love to hear about it."
          />

          <div className="grid gap-4">
            {portfolioLinks.map((item) => (
              <LinkPill key={item.label} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
