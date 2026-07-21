import { ArrowUpRight, Dot } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import {
  aboutVisuals,
  portfolioLinks,
  profile,
  skills,
  timeline,
  tools,
} from '@/data/portfolio'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="page-grain pointer-events-none absolute inset-0 opacity-30" />
      <TopNav />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] glass-surface">
          <SectionHeading
            eyebrow="About"
            title="The story behind the work."
            description="I work where project structure, calm visual design, and systems thinking meet—so complexity becomes something people can actually move with."
          />

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(46,80,119,0.66)]">
                Summary
              </p>
              <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.72)]">
                I'm {profile.shortName} ({profile.name}). I lead work across project management,
                UI design, and process thinking—bridging stakeholders, logic, and visual decisions
                to deliver outcomes that feel intentional, not rushed.
              </p>
              <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.72)]">
                My journey started with an opportunity introduced through my university faculty,
                and that path shaped how I approach work today: flexible in role, strict in clarity.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(46,80,119,0.66)]">
                Principles
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-2 border-b border-[rgba(46,80,119,0.08)] pb-3 text-sm text-[rgba(17,17,17,0.72)] last:border-b-0"
                  >
                    <Dot size={18} className="text-[#4DA1A9]" />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[rgba(17,17,17,0.92)] md:text-5xl">
            A calm way to tell a serious story.
          </h2>
          <div className="grid gap-6 text-sm leading-7 text-[rgba(17,17,17,0.68)] md:grid-cols-2">
            {profile.aboutLong.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <div className="grid gap-3 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <h2 className="font-display text-4xl leading-tight text-[rgba(17,17,17,0.92)] md:text-5xl">
              Process, systems, and the tools behind them.
            </h2>
            <p className="text-sm leading-7 text-[rgba(17,17,17,0.68)]">
              These images are placed as a visual counterpart to the way I work: turning
              logic into flow, and staying close enough to the technical layer to keep
              decisions concrete.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {aboutVisuals.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-[1.8rem] border border-[rgba(46,80,119,0.12)] bg-white/55"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="monochrome-media h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.66)]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-7 text-[rgba(17,17,17,0.68)]">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[rgba(17,17,17,0.92)] md:text-5xl">
            Timeline
          </h2>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="grid gap-3 rounded-[1.8rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6 md:grid-cols-[0.2fr_0.8fr]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[rgba(46,80,119,0.66)]">
                  {item.year}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-[rgba(17,17,17,0.92)]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[rgba(46,80,119,0.66)]">
                    {item.org}
                  </p>
                  <p className="text-sm leading-7 text-[rgba(17,17,17,0.68)]">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[rgba(17,17,17,0.92)] md:text-5xl">
            Skills & Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.8rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6"
              >
                <p className="text-sm text-[rgba(17,17,17,0.92)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-[rgba(17,17,17,0.68)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(46,80,119,0.12)] bg-[rgba(215,232,186,0.34)] px-4 py-2 text-sm text-[rgba(17,17,17,0.72)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {portfolioLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.6rem] border border-[rgba(46,80,119,0.12)] bg-white/55 px-5 py-5 text-sm text-[rgba(17,17,17,0.72)] transition hover:-translate-y-0.5 hover:border-[#4DA1A9] hover:bg-white/75"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} className="text-[rgba(46,80,119,0.72)]" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.18)] bg-white/70 px-5 py-3 text-sm text-[rgba(17,17,17,0.82)] transition hover:border-[#FFA630] hover:bg-white"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
