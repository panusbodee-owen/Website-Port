import { ArrowUpRight, Dot } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import { useLanguage } from '@/contexts/useLanguage'
import {
  aboutVisuals,
  getLocalizedText,
  getPortfolioContent,
  portfolioLinks,
  profile,
  skills,
  timeline,
  tools,
} from '@/data/portfolio'

export default function AboutPage() {
  const { language } = useLanguage()
  const { ui } = getPortfolioContent(language)

  return (
    <div className="relative min-h-screen">
      <div className="page-grain pointer-events-none absolute inset-0 opacity-30" />
      <TopNav />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] glass-surface">
          <SectionHeading
            eyebrow={ui.aboutPage.eyebrow}
            title={ui.aboutPage.title}
            description={ui.aboutPage.description}
          />

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
                {ui.aboutPage.summary}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {ui.aboutPage.summaryLead}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {ui.aboutPage.summaryOrigin}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
                {ui.aboutPage.principles}
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle.en}
                    className="flex items-center gap-2 border-b border-[var(--line-subtle)] pb-3 text-sm text-[var(--text-secondary)] last:border-b-0"
                  >
                    <Dot size={18} className="text-[#4DA1A9] dark:text-[#58A6FF]" />
                    {getLocalizedText(principle, language)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[var(--text-primary)] md:text-5xl">
            {ui.aboutPage.storyTitle}
          </h2>
          <div className="grid gap-6 text-sm leading-7 text-[var(--text-secondary)] md:grid-cols-2">
            {profile.aboutLong.map((paragraph) => (
              <p key={paragraph.en}>{getLocalizedText(paragraph, language)}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <div className="grid gap-3 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <h2 className="font-display text-4xl leading-tight text-[var(--text-primary)] md:text-5xl">
              {ui.aboutPage.processTitle}
            </h2>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              {ui.aboutPage.processDescription}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {aboutVisuals.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-[1.8rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)]"
              >
                <img
                  src={item.image}
                  alt={getLocalizedText(item.alt, language)}
                  className="monochrome-media h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-tertiary)]">
                    {getLocalizedText(item.title, language)}
                  </p>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(item.summary, language)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[var(--text-primary)] md:text-5xl">
            {ui.aboutPage.timelineTitle}
          </h2>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div
                key={`${item.year}-${item.title.en}`}
                className="grid gap-3 rounded-[1.8rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-6 md:grid-cols-[0.2fr_0.8fr]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
                  {item.year}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {getLocalizedText(item.title, language)}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-tertiary)]">
                    {getLocalizedText(item.org, language)}
                  </p>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {getLocalizedText(item.summary, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.6rem] p-6 md:p-10 glass-surface">
          <h2 className="font-display text-4xl leading-tight text-[var(--text-primary)] md:text-5xl">
            {ui.aboutPage.skillsTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((item) => (
              <div
                key={item.label.en}
                className="rounded-[1.8rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-6"
              >
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {getLocalizedText(item.label, language)}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  {getLocalizedText(item.description, language)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((item) => (
              <span
                key={item.en}
                className="rounded-full border border-[var(--line-subtle)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-primary)] font-medium"
              >
                {getLocalizedText(item, language)}
              </span>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {portfolioLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.6rem] border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-5 py-5 text-sm text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[#4DA1A9]"
              >
                <span>{getLocalizedText(item.label, language)}</span>
                <ArrowUpRight size={18} className="text-[var(--text-tertiary)]" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-5 py-3 text-sm text-[var(--text-primary)] transition hover:border-[#FFA630]"
            >
              {ui.aboutPage.backHome}
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
