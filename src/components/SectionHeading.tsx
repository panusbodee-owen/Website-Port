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
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display text-4xl leading-none text-[var(--text-primary)] md:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
