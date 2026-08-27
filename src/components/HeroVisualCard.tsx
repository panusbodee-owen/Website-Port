import { useState } from 'react'
import { Code2, Compass, Layers, Sparkles } from 'lucide-react'

import { useLanguage } from '@/contexts/useLanguage'
import { getPortfolioContent } from '@/data/portfolio'

export default function HeroVisualCard() {
  const { language } = useLanguage()
  const { profile } = getPortfolioContent(language)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Max rotation 12deg
    const rotX = (-y / (rect.height / 2)) * 12
    const rotY = (x / (rect.width / 2)) * 12

    setRotation({ x: rotX, y: rotY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const techChips = ['React', 'TypeScript', 'UI/UX', 'Tailwind', 'Vite']

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="group relative w-full select-none"
    >
      {/* Background Glow */}
      <div
        className={`absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#D7E8BA] via-[#FFA630] to-[#4DA1A9] opacity-30 blur-xl transition duration-500 group-hover:opacity-60 dark:from-[#1F6FEB] dark:via-[#388BFD] dark:to-[#58A6FF]`}
      />

      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x.toFixed(2)}deg) rotateY(${rotation.y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 100ms ease-out' : 'transform 500ms ease-out',
        }}
        className="glass-surface relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-6 shadow-2xl backdrop-blur-xl md:p-8"
      >
        {/* Ambient Top Glow Grid inside card */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-[#4DA1A9]/20 to-[#FFA630]/20 blur-2xl dark:from-[#388BFD]/30 dark:to-[#58A6FF]/20" />

        {/* Top Bar: Availability Signal */}
        <div className="flex items-center justify-between border-b border-[var(--line-subtle)] pb-5">
          <div className="flex items-center gap-2.5 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-strong)] px-3.5 py-1.5 text-xs text-[var(--text-primary)] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium tracking-wide">
              {language === 'th' ? 'พร้อมรับงานใหม่' : 'Available for Work'}
            </span>
          </div>

          <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
            <Sparkles size={14} className="text-[#FFA630]" />
            Creative Dev
          </span>
        </div>

        {/* Center Section: Avatar & Intro Badge */}
        <div className="my-8 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#FFA630] to-[#4DA1A9] opacity-75 blur transition duration-500 group-hover:opacity-100 dark:from-[#388BFD] dark:to-[#58A6FF]" />
            <img
              src={profile.avatar || './avatar-favicon.png'}
              alt={profile.name}
              className="relative h-24 w-24 rounded-full border-2 border-white/80 object-cover shadow-lg dark:border-white/20"
              onError={(e) => {
                // Fallback avatar icon if image path doesn't resolve
                e.currentTarget.style.display = 'none'
                const parent = e.currentTarget.parentElement
                if (parent) {
                  parent.innerHTML = `<div class="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#2E5077] text-white font-display text-2xl font-bold shadow-lg">OP</div>`
                }
              }}
            />
          </div>

          <p className="font-display text-2xl font-semibold text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-[var(--text-secondary)]">
            {language === 'th'
              ? 'มุ่งมั่นสร้างสรรค์ดิจิทัลเอ็กพีเรียนซ์ที่ใช้งานง่ายและโดดเด่น'
              : 'Crafting memorable, intuitive & responsive web experiences.'}
          </p>
        </div>

        {/* Bottom Section: Feature Tech Pills */}
        <div className="space-y-4 rounded-2xl border border-[var(--line-subtle)] bg-[var(--surface-strong)] p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider text-[var(--text-primary)]">
              <Code2 size={14} className="text-[#4DA1A9] dark:text-[#58A6FF]" />
              Core Tech Stack
            </span>
            <span className="flex items-center gap-1 text-[10px]">
              <Layers size={12} /> 2026
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {techChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--line-subtle)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-primary)] transition hover:border-[#FFA630] hover:scale-105"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Footer info pill */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
          <span className="flex items-center gap-1">
            <Compass size={13} className="text-[var(--text-tertiary)]" />
            Based in Thailand
          </span>
        </div>
      </div>
    </div>
  )
}
