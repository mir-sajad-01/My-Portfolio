import { GitBranch, Link2, Mail } from 'lucide-react'
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
          Built with React and Vite
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: <GitBranch size={16} />, href: siteConfig.githubUrl, label: 'GitHub' },
            { icon: <Link2 size={16} />, href: siteConfig.linkedinUrl, label: 'LinkedIn' },
            { icon: <Mail size={16} />, href: `mailto:${siteConfig.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
