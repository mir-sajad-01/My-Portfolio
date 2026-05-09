import { achievements } from '../data/projects'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Highlights</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--light)' }}>
            A few milestones
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map(item => (
            <article key={item.title} className="glass-card p-6" style={{ borderTop: `3px solid ${item.color}` }}>
              <p className="section-label mb-3" style={{ color: item.color }}>
                {item.year}
              </p>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--light)', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft)', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
