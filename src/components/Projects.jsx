import { GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const techColors = {
  React: '#61dafb',
  'React.js': '#61dafb',
  'Node.js': '#68a063',
  MongoDB: '#47a248',
  'Express.js': '#888888',
  JavaScript: '#f7df1e',
  'Tailwind CSS': '#38bdf8',
  JWT: '#b45309',
  Recharts: '#8884d8',
  EJS: '#a97fcb',
  CSS: '#264de4',
  HTML: '#e34c26',
  MySQL: '#4479a1',
  'React Router': '#ca4245',
  Python: '#3572A5',
  PyTorch: '#ee4c2c',
  OpenCV: '#5c3ee8',
  Gradio: '#f97316',
  'Hugging Face': '#facc15',
  MobileNetV2: '#64748b',
  'Google Gemini API': '#2563eb',
  'Gemini API': '#2563eb',
}

function ProjectCard({ project }) {
  return (
    <article className="glass-card rounded-2xl p-6 h-full" style={{ position: 'relative' }}>
      {project.badge && (
        <div
          style={{
            position: 'absolute',
            top: 18,
            right: 16,
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.65rem',
            background: '#f8f4ea',
            border: '1px solid #ead8b1',
            color: 'var(--amber)',
            padding: '0.25rem 0.65rem',
            borderRadius: 100,
          }}
        >
          {project.badge}
        </div>
      )}

      <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '0.45rem' }}>
        {project.date}
      </p>
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--light)', marginBottom: '0.9rem' }}>
        {project.title}
      </h3>

      <p style={{ color: 'var(--soft)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.2rem' }}>
        {project.description}
      </p>

      <ul className="mb-5 space-y-2">
        {project.highlights.map(highlight => (
          <li key={highlight} style={{ fontSize: '0.84rem', color: 'var(--soft)', lineHeight: 1.6 }}>
            - {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map(tech => (
          <span
            key={tech}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.65rem',
              padding: '0.25rem 0.6rem',
              borderRadius: 100,
              background: `${techColors[tech] || '#888'}14`,
              border: `1px solid ${techColors[tech] || '#888'}22`,
              color: techColors[tech] || 'var(--soft)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-4">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-4">
            <GitBranch size={14} /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Projects</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--light)' }}>
            Selected work
          </h2>
        </div>

        <p className="text-center mb-10" style={{ color: 'var(--soft)', fontSize: '0.95rem' }}>
          Full-stack products built around clear user problems, secure data flows, and practical features.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
