type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
}: SectionHeadingProps) {
  const eyebrowClass =
    tone === 'dark' ? 'text-[rgba(46,80,119,0.78)]' : 'text-[rgba(46,80,119,0.78)]'
  const titleClass = tone === 'dark' ? 'text-[rgba(17,17,17,0.92)]' : 'text-[rgba(17,17,17,0.92)]'
  const descriptionClass =
    tone === 'dark' ? 'text-[rgba(17,17,17,0.72)]' : 'text-[rgba(17,17,17,0.72)]'

  return (
    <div className="max-w-2xl space-y-4">
      <p className={`text-xs uppercase tracking-[0.35em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className={`font-display text-4xl leading-none md:text-5xl ${titleClass}`}>
          {title}
        </h2>
        <p className={`max-w-xl text-sm leading-7 md:text-base ${descriptionClass}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
