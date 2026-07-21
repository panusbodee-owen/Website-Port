import { useEffect, useState } from 'react'

type CursorState = {
  x: number
  y: number
  active: boolean
}

export default function InteractiveCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, active: false })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof window.matchMedia !== 'function') return

    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    const updateCursor = (event: MouseEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: true,
      })
    }

    const handleLeave = () => {
      setCursor((current) => ({ ...current, active: false }))
    }

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`interactive-cursor ${cursor.active ? 'is-active' : ''}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
    >
      <span className="interactive-cursor__ring" />
      <span className="interactive-cursor__dot" />
    </div>
  )
}
