import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { useLanguage } from '@/contexts/useLanguage'
import { getLocalizedText, getPortfolioContent, getWorkBySlug } from '@/data/portfolio'
import { useRevealOnScroll } from '@/lib/useRevealOnScroll'

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { language } = useLanguage()
  const { ui, works } = getPortfolioContent(language)
  const currentWork = slug ? getWorkBySlug(slug) : undefined

  useRevealOnScroll()

  if (!currentWork) {
    return <Navigate to="/" replace />
  }

  const currentIndex = works.findIndex((item) => item.slug === currentWork.slug)
  const nextWork = works[(currentIndex + 1) % works.length]
  const previousWork = works[(currentIndex - 1 + works.length) % works.length]

  return (
    <main className="relative min-h-screen px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-10">
      <div className="page-grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.18)] bg-white/70 px-4 py-2 text-sm text-[rgba(17,17,17,0.78)] transition hover:border-[#4DA1A9] hover:bg-white"
          >
            <ArrowLeft size={16} />
            {ui.workDetail.backHome}
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,80,119,0.14)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.72)]">
            <span>{getLocalizedText(currentWork.category, language)}</span>
            <span>•</span>
            <span>{currentWork.year}</span>
          </div>
        </div>

        <header
          data-reveal
          className="reveal-section grid gap-8 rounded-[2.6rem] p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] glass-surface"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[rgba(46,80,119,0.72)]">
              {ui.workDetail.caseStudy}
            </p>
            <h1 className="font-display text-4xl leading-tight text-[rgba(17,17,17,0.92)] md:text-6xl">
              {getLocalizedText(currentWork.title, language)}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[rgba(17,17,17,0.7)] md:text-base">
              {getLocalizedText(currentWork.summary, language)}
            </p>
            <p className="inline-flex rounded-full border border-[rgba(46,80,119,0.14)] bg-[rgba(215,232,186,0.32)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[rgba(46,80,119,0.74)]">
              {ui.workDetail.scrollCue}
            </p>

            <div className="grid gap-4 border-t border-[rgba(46,80,119,0.12)] pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
                  {ui.workDetail.role}
                </p>
                <p className="mt-2 text-sm text-[rgba(17,17,17,0.82)]">
                  {getLocalizedText(currentWork.role, language)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
                  {ui.workDetail.client}
                </p>
                <p className="mt-2 text-sm text-[rgba(17,17,17,0.82)]">
                  {getLocalizedText(currentWork.client, language)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
                  {ui.workDetail.year}
                </p>
                <p className="mt-2 text-sm text-[rgba(17,17,17,0.82)]">
                  {currentWork.year}
                </p>
              </div>
            </div>
          </div>

          <div className="case-spotlight overflow-hidden rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55">
            <img
              src={currentWork.image}
              alt={getLocalizedText(currentWork.title, language)}
              className="monochrome-media h-full min-h-[20rem] w-full object-cover"
            />
          </div>
        </header>

        <section data-reveal className="reveal-section grid gap-5 md:grid-cols-3">
          <article className="case-panel rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
              {ui.workDetail.challenge}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.72)]">
              {getLocalizedText(currentWork.challenge, language)}
            </p>
          </article>
          <article className="case-panel rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
              {ui.workDetail.approach}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.72)]">
              {getLocalizedText(currentWork.approach, language)}
            </p>
          </article>
          <article className="case-panel rounded-[2rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
              {ui.workDetail.outcome}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.72)]">
              {getLocalizedText(currentWork.outcome, language)}
            </p>
          </article>
        </section>

        <section data-reveal className="reveal-section rounded-[2.6rem] p-6 md:p-8 glass-surface">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-3xl text-[rgba(17,17,17,0.92)] md:text-4xl">
              {ui.workDetail.projectTags}
            </h2>
            {currentWork.credits.startsWith('http') ? (
              <a
                href={currentWork.credits}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#4DA1A9] bg-[rgba(77,161,169,0.08)] px-4 py-2 text-sm text-[#2E5077] transition hover:border-[#2E5077] hover:bg-[rgba(77,161,169,0.16)]"
              >
                {ui.workDetail.openCredits}
                <ArrowUpRight size={16} />
              </a>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {currentWork.tags.map((tag) => (
              <span
                key={tag.en}
                className="rounded-full border border-[rgba(46,80,119,0.12)] bg-[rgba(215,232,186,0.34)] px-4 py-2 text-sm text-[rgba(17,17,17,0.72)]"
              >
                {getLocalizedText(tag, language)}
              </span>
            ))}
          </div>
          {currentWork.credits.startsWith('http') ? null : (
            <p className="mt-6 text-sm leading-7 text-[rgba(17,17,17,0.64)]">
              {ui.workDetail.credits}: {currentWork.credits}
            </p>
          )}
        </section>

        <section
          data-reveal
          className="reveal-section grid gap-4 rounded-[2.6rem] p-6 text-[rgba(17,17,17,0.9)] md:grid-cols-2 md:p-8 glass-surface"
        >
          <Link
            to={`/works/${previousWork.slug}`}
            className="group rounded-[1.4rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5 transition hover:border-[#4DA1A9] hover:bg-white/75"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
              {ui.workDetail.previousProject}
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="font-display text-2xl leading-tight text-[rgba(17,17,17,0.92)]">
                {getLocalizedText(previousWork.title, language)}
              </p>
              <ArrowLeft
                size={20}
                className="transition group-hover:-translate-x-1"
              />
            </div>
          </Link>
          <Link
            to={`/works/${nextWork.slug}`}
            className="group rounded-[1.4rem] border border-[rgba(46,80,119,0.12)] bg-white/55 p-5 transition hover:border-[#FFA630] hover:bg-white/75"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[rgba(46,80,119,0.64)]">
              {ui.workDetail.nextProject}
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="font-display text-2xl leading-tight text-[rgba(17,17,17,0.92)]">
                {getLocalizedText(nextWork.title, language)}
              </p>
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        </section>
      </div>
    </main>
  )
}
