import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { getWorkBySlug, works } from '@/data/portfolio'

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const currentWork = slug ? getWorkBySlug(slug) : undefined

  if (!currentWork) {
    return <Navigate to="/" replace />
  }

  const currentIndex = works.findIndex((item) => item.slug === currentWork.slug)
  const nextWork = works[(currentIndex + 1) % works.length]
  const previousWork = works[(currentIndex - 1 + works.length) % works.length]

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(214,180,128,0.16),transparent_28%),#f7f1e8] px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/60 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:bg-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-500">
            <span>{currentWork.category}</span>
            <span>•</span>
            <span>{currentWork.year}</span>
          </div>
        </div>

        <header className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-[rgba(255,252,247,0.78)] p-6 shadow-[0_25px_70px_rgba(28,25,23,0.08)] md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              Case Study
            </p>
            <h1 className="font-display text-4xl leading-tight text-stone-950 md:text-6xl">
              {currentWork.title}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-stone-600 md:text-base">
              {currentWork.summary}
            </p>

            <div className="grid gap-4 border-t border-stone-200 pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Role
                </p>
                <p className="mt-2 text-sm text-stone-800">{currentWork.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Client
                </p>
                <p className="mt-2 text-sm text-stone-800">{currentWork.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Year
                </p>
                <p className="mt-2 text-sm text-stone-800">{currentWork.year}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-stone-200 bg-stone-100">
            <img
              src={currentWork.image}
              alt={currentWork.title}
              className="h-full min-h-[20rem] w-full object-cover"
            />
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.6rem] border border-stone-200/80 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Challenge
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              {currentWork.challenge}
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-stone-200/80 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Approach
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              {currentWork.approach}
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-stone-200/80 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Outcome
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              {currentWork.outcome}
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-stone-200/80 bg-white/75 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-3xl text-stone-900 md:text-4xl">
              Project Tags
            </h2>
            {currentWork.credits.startsWith('http') ? (
              <a
                href={currentWork.credits}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:bg-stone-950 hover:text-stone-50"
              >
                Open credits
                <ArrowUpRight size={16} />
              </a>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {currentWork.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
          {currentWork.credits.startsWith('http') ? null : (
            <p className="mt-6 text-sm leading-7 text-stone-500">
              Credits: {currentWork.credits}
            </p>
          )}
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-stone-200/80 bg-stone-950 p-6 text-stone-50 md:grid-cols-2 md:p-8">
          <Link
            to={`/works/${previousWork.slug}`}
            className="group rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Previous project
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="font-display text-2xl leading-tight text-stone-50">
                {previousWork.title}
              </p>
              <ArrowLeft
                size={20}
                className="transition group-hover:-translate-x-1"
              />
            </div>
          </Link>
          <Link
            to={`/works/${nextWork.slug}`}
            className="group rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              Next project
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="font-display text-2xl leading-tight text-stone-50">
                {nextWork.title}
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
