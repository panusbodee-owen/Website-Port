import { useState, type PointerEvent } from 'react'
import { MousePointer2, Orbit, Radio, Sparkles } from 'lucide-react'

type PlaygroundMode = 'orbit' | 'pulse' | 'signal'

type InteractivePlaygroundProps = {
  language: 'en' | 'th'
}

const modes: Array<{
  id: PlaygroundMode
  icon: typeof Orbit
  en: string
  th: string
}> = [
  { id: 'orbit', icon: Orbit, en: 'Orbit', th: 'โคจร' },
  { id: 'pulse', icon: Sparkles, en: 'Pulse', th: 'เต้น' },
  { id: 'signal', icon: Radio, en: 'Signal', th: 'สัญญาณ' },
]

export default function InteractivePlayground({ language }: InteractivePlaygroundProps) {
  const [mode, setMode] = useState<PlaygroundMode>('orbit')
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  const copy = language === 'th'
    ? { label: 'ลองเล่นดู', hint: 'ขยับเมาส์หรือแตะพื้นที่ แล้วเลือก mood ที่ชอบ' }
    : { label: 'Play with the signal', hint: 'Move around or tap the field. Pick the mood you like.' }

  return (
    <div
      className={`interactive-playground interactive-playground--${mode}`}
      onPointerMove={handlePointerMove}
      style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` } as React.CSSProperties}
    >
      <div className="interactive-playground__field" aria-hidden="true">
        <div className="interactive-playground__grid" />
        <div className="interactive-playground__glow" />
        <div className="interactive-playground__orbit interactive-playground__orbit--one" />
        <div className="interactive-playground__orbit interactive-playground__orbit--two" />
        <div className="interactive-playground__core"><span>✦</span></div>
        <div className="interactive-playground__cursor"><MousePointer2 size={15} /></div>
      </div>

      <div className="interactive-playground__content">
        <div>
          <p className="interactive-playground__eyebrow">INTERACTIVE / 01</p>
          <h3>{copy.label}</h3>
          <p>{copy.hint}</p>
        </div>
        <div className="interactive-playground__controls" role="group" aria-label="Animation modes">
          {modes.map(({ id, icon: Icon, en, th }) => (
            <button
              key={id}
              type="button"
              className={mode === id ? 'is-active' : ''}
              onClick={() => setMode(id)}
              aria-pressed={mode === id}
            >
              <Icon size={14} />
              {language === 'th' ? th : en}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
