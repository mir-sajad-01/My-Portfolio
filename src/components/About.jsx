import { MapPin, Zap } from 'lucide-react'
import { siteConfig } from '../data/site'

const strengths = [
  {
    title: 'Full-stack development',
    desc: 'I build web applications across React interfaces, backend APIs, databases, and deployment.',
  },
  {
    title: 'Practical engineering',
    desc: 'I apply authentication, validation, REST API design, and clear user flows in project work.',
  },
  {
    title: 'CS foundations',
    desc: 'I strengthen problem-solving through Java, OOP, data structures, and algorithms practice.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] items-start">
          <div className="glass-card p-7">
            <p className="section-label mb-4">Profile</p>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--light)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              An early-career engineer who enjoys building useful software.
            </h3>

            <p style={{ color: 'var(--soft)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              I am a final-year Computer Science student with hands-on full-stack project experience.
              I enjoy turning product ideas into complete web applications with clear user flows and dependable APIs.
            </p>

            <div className="space-y-3">
              {[
                { icon: <MapPin size={16} />, text: siteConfig.location },
                { icon: <Zap size={16} />, text: siteConfig.availability },
              ].map(({ icon, text }) => (
                <div key={text} className="meta-chip" style={{ width: '100%', justifyContent: 'flex-start', borderRadius: 12, padding: '0.75rem 0.9rem' }}>
                  <span style={{ color: 'var(--cyan)' }}>{icon}</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-3">About</p>
            <h2
              className="mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--light)', lineHeight: 1.15 }}
            >
              Working toward a career in software engineering.
            </h2>

            <p style={{ color: 'var(--soft)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              I am building my foundation as a software engineer through full-stack web projects and core Computer
              Science practice. My work spans frontend UI, backend APIs, authentication, databases,
              and deployment workflows.
            </p>
            <p style={{ color: 'var(--soft)', lineHeight: 1.85, marginBottom: '1.75rem', fontSize: '0.97rem' }}>
              I care about readable code, useful interfaces, secure data handling, and products that solve a
              real problem without adding unnecessary complexity.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {strengths.map(item => (
                <div key={item.title} className="stat-card">
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--light)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--soft)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
