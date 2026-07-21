export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      data-testid="ambient-backdrop"
      className="ambient-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-backdrop__grid" />
      <div className="ambient-backdrop__orb ambient-backdrop__orb--lime" />
      <div className="ambient-backdrop__orb ambient-backdrop__orb--amber" />
      <div className="ambient-backdrop__orb ambient-backdrop__orb--teal" />
      <div className="ambient-backdrop__beam" />
    </div>
  )
}
