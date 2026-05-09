import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/site'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = ['about', 'skills', 'projects', 'achievements', 'contact']

      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(244,247,248,0.94)' : 'rgba(244,247,248,0.82)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 8px 24px rgba(15, 23, 42, 0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--light)' }}>
            {siteConfig.name}
          </span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.66rem', color: 'var(--muted)' }}>
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href.replace('#', '') ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
          Contact
        </a>

        <button
          className="md:hidden transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'var(--soft)' }}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: 'rgba(244,247,248,0.98)', borderBottom: '1px solid var(--border)' }}
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2 px-4 self-start" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
