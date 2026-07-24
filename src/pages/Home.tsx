import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Dot, Sparkles } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import LinkPill from '@/components/LinkPill'
import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import WorkCard from '@/components/WorkCard'
import { useLanguage } from '@/contexts/useLanguage'
import { useRevealOnScroll } from '@/lib/useRevealOnScroll'
import { getLocalizedText, getPortfolioContent } from '@/data/portfolio'

export default function Home() {
  const [searchParams] = useSearchParams()
  const [heroShift, setHeroShift] = useState({ x: 0, y: 0 })
  const { language } = useLanguage()
  const { homeVisuals, notes, portfolioLinks, profile, ui, works } = getPortfolioContent(language)
  const selectedWorks = works.slice(0, 4)

  useRevealOnScroll()

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

  const handleHeroMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width
    const y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height

    setHeroShift({ x, y })
  }

  const resetHeroMove = () => setHeroShift({ x: 0, y: 0 })

  return (
    <div
      id="top"
      className="relative overflow-hidden"
    >
      <div className="page-grain pointer-events-none absolute inset-0 opacity-30" />

      <TopNav />

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section
          data-reveal
          className="reveal-section grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.14)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[rgba(46,80,119,0.8)] backdrop-blur">
              <Sparkles size={14} />
              {ui.home.badge}
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[rgba(46,80,119,0.7)]">
                {getLocalizedText(profile.location, language)}
              </p>
              <h1 className="font-display text-[4rem] leading-[0.92] tracking-[-0.04em] text-[rgba(17,17,17,0.94)] md:text-[6.5rem]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[rgba(17,17,17,0.72)] md:text-xl">
                {getLocalizedText(profile.statement, language)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/?section=works"
                className="inline-flex items-center gap-2 rounded-full bg-[#2E5077] px-6 py-3 text-sm text-[#F7F4EC] transition hover:-translate-y-0.5 hover:bg-[#24415f]"
              >
                {ui.home.ctaWorks}
                <ArrowDownRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.18)] bg-white/70 px-6 py-3 text-sm text-[rgba(17,17,17,0.82)] transition hover:-translate-y-0.5 hover:border-[rgba(77,161,169,0.45)] hover:bg-white"
              >
                {ui.home.ctaAbout}
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={portfolioLinks[1].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.18)] bg-white/70 px-6 py-3 text-sm text-[rgba(17,17,17,0.82)] transition hover:-translate-y-0.5 hover:border-[#FFA630] hover:bg-white"
              >
                {ui.home.ctaLinkedIn}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside
            aria-label="Interactive hero scene"
            className="grid gap-4"
            onMouseMove={handleHeroMove}
            onMouseLeave={resetHeroMove}
          >
            <div
              className="hero-card overflow-hidden rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55"
              style={{
                transform: `translate3d(${heroShift.x * -14}px, ${heroShift.y * -10}px, 0)`,
              }}
            >
              <img
                src={homeVisuals[2].image}
                alt={getLocalizedText(homeVisuals[2].alt, language)}
                className="monochrome-media h-[19rem] w-full object-cover"
              />
            </div>

            <div
              className="hero-card rounded-[2rem] p-6 backdrop-blur glass-surface"
              style={{
                transform: `translate3d(${heroShift.x * 10}px, ${heroShift.y * 8}px, 0)`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(46,80,119,0.66)]">
                {ui.home.currentFocus}
              </p>
              <p className="mt-4 font-display text-3xl leading-tight text-[rgba(17,17,17,0.92)]">
                {ui.home.currentFocusTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.66)]">
                {getLocalizedText(profile.intro, language)}
              </p>
            </div>

            <div
              className="hero-card rounded-[2rem] p-6 text-[rgba(17,17,17,0.92)] glass-surface"
              style={{
                transform: `translate3d(${heroShift.x * 8}px, ${heroShift.y * -6}px, 0)`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(46,80,119,0.66)]">
                {ui.home.principles}
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle.en}
                    className="flex items-center gap-2 border-b border-[rgba(46,80,119,0.08)] pb-3 text-sm text-[rgba(17,17,17,0.72)] last:border-b-0"
                  >
                    <Dot size={18} className="text-[#4DA1A9]" />
                    {getLocalizedText(principle, language)}
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </section>

        <section
          id="about"
          data-reveal
          className="reveal-section grid gap-8 rounded-[2.4rem] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] glass-surface"
        >
          <SectionHeading
            eyebrow={ui.home.aboutEyebrow}
            title={ui.home.aboutTitle}
            description={ui.home.aboutDescription}
          />

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.en}
                  className="text-sm leading-7 text-[rgba(17,17,17,0.68)]"
                >
                  {getLocalizedText(paragraph, language)}
                </p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.7rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.66)]">
                  {ui.home.positioning}
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.74)]">
                  {getLocalizedText(profile.title, language)}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.66)]">
                  {ui.home.availability}
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.74)]">
                  {getLocalizedText(profile.availability, language)}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.66)]">
                  {ui.home.perspective}
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.74)]">
                  {ui.home.perspectiveText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="works" data-reveal className="reveal-section space-y-10">
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
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.18)] bg-white/70 px-5 py-3 text-sm text-[rgba(17,17,17,0.82)] transition hover:border-[#4DA1A9] hover:bg-white"
            >
              {ui.home.moreCase}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section
          data-reveal
          className="reveal-section grid gap-8 rounded-[2.4rem] p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr] glass-surface"
        >
          <SectionHeading
            eyebrow={ui.home.visualArchiveEyebrow}
            title={ui.home.visualArchiveTitle}
            description={ui.home.visualArchiveDescription}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {homeVisuals.map((item, index) => (
              <article
                key={item.slug}
                className={`overflow-hidden rounded-[1.8rem] border border-[rgba(46,80,119,0.12)] bg-white/55 ${
                  index === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={getLocalizedText(item.alt, language)}
                  className={`monochrome-media w-full object-cover ${
                    index === 1 ? 'h-60 md:h-72' : 'h-60'
                  }`}
                  loading="lazy"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.66)]">
                    {getLocalizedText(item.title, language)}
                  </p>
                  <p className="text-sm leading-7 text-[rgba(17,17,17,0.68)]">
                    {getLocalizedText(item.summary, language)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="notes"
          data-reveal
          className="reveal-section grid gap-8 rounded-[2.4rem] p-6 text-[rgba(17,17,17,0.92)] md:p-8 lg:grid-cols-[0.7fr_1.3fr] glass-surface"
        >
          <SectionHeading
            eyebrow={ui.home.notesEyebrow}
            title={ui.home.notesTitle}
            description={ui.home.notesDescription}
            tone="dark"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note.en}
                className="rounded-[1.7rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5 text-sm leading-7 text-[rgba(17,17,17,0.68)]"
              >
                {getLocalizedText(note, language)}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          data-reveal
          className="reveal-section grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <SectionHeading
            eyebrow={ui.home.contactEyebrow}
            title={ui.home.contactTitle}
            description={ui.home.contactDescription}
          />

          <div className="grid gap-4">
            {portfolioLinks.map((item) => (
              <LinkPill key={item.href} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
