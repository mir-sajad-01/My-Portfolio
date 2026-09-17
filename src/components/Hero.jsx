import { GitBranch, Link2, Mail, Download } from 'lucide-react'
import profileImage from '../assets/profile.jpeg'
import { siteConfig } from '../data/site'

const socialLinks = [
  { icon: <GitBranch size={16} />, href: siteConfig.githubUrl, label: 'GitHub' },
  { icon: <Link2 size={16} />, href: siteConfig.linkedinUrl, label: 'LinkedIn' },
  { icon: <Mail size={16} />, href: `mailto:${siteConfig.email}`, label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.25fr,0.75fr] items-start">
          <div>
            <p className="section-label mb-3">{siteConfig.heroEyebrow}</p>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--light)',
                maxWidth: 640,
                marginBottom: '0.85rem',
              }}
            >
              {siteConfig.name}
            </h1>

            <p
              style={{
                color: 'var(--soft)',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: '1.75rem',
              }}
            >
              {siteConfig.heroSummary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {siteConfig.focusAreas.map(item => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href={siteConfig.resumePath} download className="btn-outline">
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-5 md:p-6">
            <img
              src={profileImage}
              alt={siteConfig.name}
              style={{
                width: '100%',
                height: 'clamp(270px, 30vw, 340px)',
                objectFit: 'cover',
                objectPosition: 'center 18%',
                borderRadius: 14,
                marginBottom: '0.9rem',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p className="section-label mb-2">Profile</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--light)', lineHeight: 1.5 }}>
                  Full-stack web projects with a practical focus on secure APIs, clean UI, and reliable user flows.
                </p>
              </div>
              <span
                className="skill-pill"
                style={{
                  background: '#eef6f5',
                  borderColor: '#bfd9d5',
                  color: 'var(--cyan)',
                }}
              >
                GATE CSE 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
