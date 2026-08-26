import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import HeroVisualCard from '@/components/HeroVisualCard'
import InteractivePlayground from '@/components/InteractivePlayground'
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
  const { notes, portfolioLinks, profile, ui, works } = getPortfolioContent(language)
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
          className="reveal-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--text-tertiary)] backdrop-blur">
              <Sparkles size={14} className="text-[#FFA630]" />
              {ui.home.badge}
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-tertiary)] font-medium">
                {getLocalizedText(profile.location, language)}
              </p>
              <h1 className="font-display text-[3.8rem] leading-[0.92] tracking-[-0.04em] text-[var(--text-primary)] md:text-[6rem]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                {getLocalizedText(profile.statement, language)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/?section=works"
                className="inline-flex items-center gap-2 rounded-full bg-[#2E5077] px-6 py-3 text-sm text-[#F7F4EC] transition hover:-translate-y-0.5 hover:bg-[#24415f] dark:bg-[#388bfd] dark:text-[#0c1017] dark:hover:bg-[#58a6ff]"
              >
                {ui.home.ctaWorks}
                <ArrowDownRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-6 py-3 text-sm text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[#4DA1A9]"
              >
                {ui.home.ctaAbout}
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={portfolioLinks[1].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-6 py-3 text-sm text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[#FFA630]"
              >
                {ui.home.ctaLinkedIn}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside
            aria-label="Interactive hero scene"
            onMouseMove={handleHeroMove}
            onMouseLeave={resetHeroMove}
            className="grid gap-6"
          >
            <HeroVisualCard />

            <div
              className="hero-card rounded-[2rem] p-6 backdrop-blur glass-surface"
              style={{
                transform: `translate3d(${heroShift.x * 6}px, ${heroShift.y * 6}px, 0)`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)] font-medium">
                {ui.home.currentFocus}
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-[var(--text-primary)]">
                {ui.home.currentFocusTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {getLocalizedText(profile.intro, language)}
              </p>
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
                  className="text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {getLocalizedText(paragraph, language)}
                </p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.7rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-tertiary)]">
                  {ui.home.positioning}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-primary)] font-medium">
                  {getLocalizedText(profile.title, language)}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-tertiary)]">
                  {ui.home.availability}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-primary)] font-medium">
                  {getLocalizedText(profile.availability, language)}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-tertiary)]">
                  {ui.home.perspective}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-primary)] font-medium">
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
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-5 py-3 text-sm text-[var(--text-primary)] transition hover:border-[#4DA1A9]"
            >
              {ui.home.moreCase}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section
          id="side-projects"
          data-reveal
          className="reveal-section side-project-feature grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <SectionHeading
            eyebrow={language === 'th' ? 'Side Project' : 'Side Project'}
            title={language === 'th' ? 'โปรเจกต์ที่สร้างจากความอยากลอง' : 'A project built from curiosity.'}
            description={
              language === 'th'
                ? 'พื้นที่ทดลองที่ผมออกแบบ ตั้งระบบ และลงมือทำเองตั้งแต่ต้นจนจบ'
                : 'A small experiment where I handled the concept, interface, system, and implementation end to end.'
            }
          />

          <article className="side-project-feature__card group overflow-hidden rounded-[2.8rem] p-5 md:p-7">
            <a
              href="https://panusbodee-owen.github.io/vpk/"
              target="_blank"
              rel="noreferrer"
              aria-label={language === 'th' ? 'เปิดเว็บไซต์พูดทำไม?' : 'Open Pood Thammai website'}
              className="side-project-feature__preview group/preview relative block min-h-[18rem] overflow-hidden rounded-[2.2rem] p-6 md:min-h-[22rem] md:p-8"
            >
              <div className="side-project-feature__orb side-project-feature__orb--one" />
              <div className="side-project-feature__orb side-project-feature__orb--two" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="side-project-feature__label">SIDE PROJECT / 2026</span>
                <span className="side-project-feature__mark">✦</span>
              </div>
              <div className="relative z-10 mt-16 md:mt-20">
                <p className="side-project-feature__name">พูดทำไม?</p>
                <p className="side-project-feature__tagline">
                  {language === 'th' ? 'สุ่มมาเลย เดี๋ยวก็พูดได้เองแหละ' : 'Pick a topic. Speak before you overthink.'}
                </p>
              </div>
              <div className="side-project-feature__fake-card relative z-10 mt-7">
                <span>{language === 'th' ? 'สุ่มหัวข้อฝึกพูด' : 'Speaking topic generator'}</span>
                <span>↗</span>
              </div>
              <span className="side-project-feature__open">{language === 'th' ? 'เปิดโปรเจกต์' : 'Open project'} ↗</span>
            </a>

            <div className="flex flex-col gap-5 px-2 pb-1 pt-6 md:flex-row md:items-end md:justify-between md:px-3">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  {language === 'th' ? 'เว็บฝึกพูดฉับพลัน' : 'Impromptu speaking web app'}
                </p>
                <h3 className="mt-2 font-display text-3xl leading-none text-[var(--text-primary)]">
                  {language === 'th' ? 'พูดทำไม?' : 'Pood Thammai?'}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {language === 'th'
                    ? 'เว็บสุ่มหัวข้อสำหรับฝึกพูด พร้อมระดับความยาก ตัวจับเวลา และ Feedback เบื้องต้น'
                    : 'A playful speaking practice app with topic prompts, difficulty levels, timers, and lightweight feedback.'}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <a
                  href="https://panusbodee-owen.github.io/vpk/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff6d2f] px-5 py-3 text-sm font-medium text-[#fffaf2] shadow-[0_4px_0_#c94c20] transition hover:-translate-y-1"
                >
                  {language === 'th' ? 'เปิดเว็บไซต์' : 'Open website'}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://github.com/panusbodee-owen/vpk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] px-5 py-3 text-sm text-[var(--text-primary)] transition hover:-translate-y-1 hover:border-[#4DA1A9]"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        </section>

        <section
          data-reveal
          className="reveal-section interactive-lab grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <SectionHeading
            eyebrow={language === 'th' ? 'Interactive Niche' : 'Interactive Niche'}
            title={language === 'th' ? 'งานเล็ก ๆ ที่อยากให้ลองเล่น' : 'A small detail worth playing with.'}
            description={
              language === 'th'
                ? 'พื้นที่ทดลอง animation ที่ตอบสนองกับการขยับและการเลือกของคุณ'
                : 'A tiny animation playground that responds to your movement and choice.'
            }
          />
          <InteractivePlayground language={language} />
        </section>

        <section
          id="notes"
          data-reveal
          className="reveal-section grid gap-8 rounded-[2.4rem] p-6 text-[var(--text-primary)] md:p-8 lg:grid-cols-[0.7fr_1.3fr] glass-surface"
        >
          <SectionHeading
            eyebrow={ui.home.notesEyebrow}
            title={ui.home.notesTitle}
            description={ui.home.notesDescription}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note.en}
                className="rounded-[1.7rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-5 text-sm leading-7 text-[var(--text-secondary)]"
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
