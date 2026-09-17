import { skills } from '../data/projects'

const categoryColors = {
  Languages: { pill: 'rgba(15,118,110,0.08)', border: 'rgba(15,118,110,0.16)', text: '#0f766e' },
  Frontend: { pill: 'rgba(21,128,61,0.08)', border: 'rgba(21,128,61,0.16)', text: '#15803d' },
  Backend: { pill: 'rgba(180,83,9,0.08)', border: 'rgba(180,83,9,0.16)', text: '#b45309' },
  Databases: { pill: 'rgba(14,116,144,0.08)', border: 'rgba(14,116,144,0.16)', text: '#0e7490' },
  Tools: { pill: 'rgba(75,85,99,0.08)', border: 'rgba(75,85,99,0.16)', text: '#4b5563' },
  'Computer Science': { pill: 'rgba(31,41,55,0.06)', border: 'rgba(31,41,55,0.14)', text: '#1f2937' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Skills</p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--light)',
            }}
          >
            Technical skills at a glance
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const colors = categoryColors[category] || categoryColors.Languages

            return (
              <div key={category} className="glass-card rounded-xl p-6" style={{ minHeight: 190 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: 6,
                      height: 20,
                      borderRadius: 3,
                      background: colors.text,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--light)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="skill-pill"
                      style={{
                        background: colors.pill,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
