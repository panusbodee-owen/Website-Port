import { useEffect } from 'react'
import { ArrowDownRight, ArrowUpRight, Dot, Sparkles } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import LinkPill from '@/components/LinkPill'
import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import WorkCard from '@/components/WorkCard'
import { homeVisuals, notes, portfolioLinks, profile, works } from '@/data/portfolio'

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
      className="relative overflow-hidden"
    >
      <div className="page-grain pointer-events-none absolute inset-0 opacity-30" />

      <TopNav />

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[rgba(238,240,255,0.7)] backdrop-blur">
              <Sparkles size={14} />
              Portfolio 2026
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[rgba(238,240,255,0.55)]">
                {profile.location}
              </p>
              <h1 className="font-display text-[4rem] leading-[0.92] tracking-[-0.04em] text-[rgba(238,240,255,0.92)] md:text-[6.5rem]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[rgba(238,240,255,0.72)] md:text-xl">
                {profile.statement}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/?section=works"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm text-[#07070c] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Explore selected work
                <ArrowDownRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-[rgba(238,240,255,0.82)] transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                About me
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={portfolioLinks[1].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-[rgba(238,240,255,0.82)] transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                Open LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[2rem] p-6 backdrop-blur glass-surface">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(238,240,255,0.5)]">
                Current focus
              </p>
              <p className="mt-4 font-display text-3xl leading-tight text-[rgba(238,240,255,0.92)]">
                Calm interfaces. Structured execution. Clear thinking.
              </p>
              <p className="mt-4 text-sm leading-7 text-[rgba(238,240,255,0.66)]">
                {profile.intro}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <img
                src={homeVisuals[2].image}
                alt={homeVisuals[2].alt}
                className="monochrome-media h-[19rem] w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] p-6 text-[rgba(238,240,255,0.92)] glass-surface">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(238,240,255,0.5)]">
                Principles
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm text-[rgba(238,240,255,0.74)] last:border-b-0"
                  >
                    <Dot size={18} className="text-white/80" />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-[2.4rem] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] glass-surface"
        >
          <SectionHeading
            eyebrow="About"
            title="Bridging structure and taste."
            description="A portfolio for work that lives between strategy, design systems, and project ownership."
          />

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-[rgba(238,240,255,0.66)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(238,240,255,0.5)]">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(238,240,255,0.74)]">
                  {profile.title}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(238,240,255,0.5)]">
                  Availability
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(238,240,255,0.74)]">
                  {profile.availability}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(238,240,255,0.5)]">
                  Perspective
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(238,240,255,0.74)]">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-[rgba(238,240,255,0.82)] transition hover:border-white/25 hover:bg-white/10"
            >
              View one more case
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.4rem] p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr] glass-surface">
          <SectionHeading
            eyebrow="Visual Archive"
            title="Visual archive for work in motion."
            description="A quieter image layer for this portfolio, matched to the way I move between field work, systems, and a more personal visual mark."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {homeVisuals.map((item, index) => (
              <article
                key={item.slug}
                className={`overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 ${
                  index === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`monochrome-media w-full object-cover ${
                    index === 1 ? 'h-60 md:h-72' : 'h-60'
                  }`}
                  loading="lazy"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(238,240,255,0.5)]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-7 text-[rgba(238,240,255,0.68)]">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="notes"
          className="grid gap-8 rounded-[2.4rem] p-6 text-[rgba(238,240,255,0.92)] md:p-8 lg:grid-cols-[0.7fr_1.3fr] glass-surface"
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
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[rgba(238,240,255,0.66)]"
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
