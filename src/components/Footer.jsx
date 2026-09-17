
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 1.5rem',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--light)' }}>
            {siteConfig.name}
          </span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>
            Projects and skills
          </span>
        </div>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>
          © 2026 Sajad Bashir Mir
        </p>

      </div>
    </footer>
  )
}
