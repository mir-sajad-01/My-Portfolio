import { MapPin, Zap } from 'lucide-react'
import { siteConfig } from '../data/site'

const strengths = [
  {
    title: 'Practical projects',
    desc: 'I learn best by building applications that have clear flows, useful features, and real structure.',
  },
  {
    title: 'Problem solving',
    desc: 'I enjoy breaking work into smaller parts and improving solutions step by step.',
  },
  {
    title: 'Clean execution',
    desc: 'I care about readable code, simple UI decisions, and work that feels dependable to use.',
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
              Clear work, simple structure, steady growth.
            </h3>

            <p style={{ color: 'var(--soft)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              I prefer portfolios that feel direct and useful. My focus is on building practical applications,
              improving how I structure projects, and getting more comfortable with real development workflows.
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
              Focused on useful products and steady engineering.
            </h2>

            <p style={{ color: 'var(--soft)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              I am a final-year Computer Science student. Most of my project work is centered around practical
              web projects, where I keep improving my approach to application structure, database handling,
              APIs, and overall problem solving through hands-on builds.
            </p>
            <p style={{ color: 'var(--soft)', lineHeight: 1.85, marginBottom: '1.75rem', fontSize: '0.97rem' }}>
              I try to keep my work grounded: understand the problem clearly, build something usable, and
              keep refining the details instead of overcomplicating the solution.
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
