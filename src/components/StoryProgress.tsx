import { useEffect, useState } from 'react'

const getScrollProgress = () => {
  if (typeof window === 'undefined') return 0

  const scrollTop = window.scrollY
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

  if (scrollableHeight <= 0) return 0

  return Math.min(1, Math.max(0, scrollTop / scrollableHeight))
}

export default function StoryProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => setProgress(getScrollProgress())

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      aria-label="Story progress"
      className="story-progress pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
    >
      <div className="story-progress__meta">
        <span>Story</span>
        <span>{`${Math.round(progress * 100)}%`}</span>
      </div>
      <div className="story-progress__track">
        <div
          className="story-progress__fill"
          style={{ transform: `scaleY(${Math.max(progress, 0.04)})` }}
        />
      </div>
    </div>
  )
}
