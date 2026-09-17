import { useState } from 'react'
import {
  Mail,
  GitBranch,
  Link2,
  MapPin,
  Phone,
  Download,
  FileText,
  Send,
} from 'lucide-react'
import { siteConfig } from '../data/site'

const directLinks = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: 'Call',
    href: siteConfig.phoneHref,
  },
  {
    icon: <Link2 size={18} />,
    label: 'LinkedIn',
    href: siteConfig.linkedinUrl,
  },
  {
    icon: <GitBranch size={18} />,
    label: 'GitHub',
    href: siteConfig.githubUrl,
  },
  {
    icon: <FileText size={18} />,
    label: 'View Resume',
    href: siteConfig.resumePath,
    external: true,
  },
  {
    icon: <Download size={18} />,
    label: 'Download Resume',
    href: siteConfig.resumePath,
    download: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and message.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const body = new FormData()
      body.append('name', trimmed.name)
      body.append('email', trimmed.email)
      body.append('message', trimmed.message)
      body.append('_subject', `Portfolio message for ${siteConfig.name}`)
      body.append('_template', 'table')
      body.append('_captcha', 'false')

      const res = await fetch(siteConfig.contactFormEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })

      const result = await res.json().catch(() => null)

      if (!res.ok || result?.success === 'false' || result?.success === false) {
        throw new Error(result?.message || 'Submission failed')
      }

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Message could not be sent right now. You can still contact me directly by email or phone.')
    }
  }

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] items-start">
          <div className="space-y-6">
            <p className="section-label">Contact</p>

            <div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--light)', lineHeight: 1.15, marginBottom: '0.9rem' }}>
                Get in touch
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft)', lineHeight: 1.75 }}>
                 Open to Software Engineering opportunities and project collaborations.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: <Mail size={16} />, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: <Phone size={16} />, label: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
                { icon: <MapPin size={16} />, label: siteConfig.location, href: null },
              ].map(({ icon, label, href }) => (
                <div key={label} className="meta-chip" style={{ width: '100%', justifyContent: 'flex-start', borderRadius: 12, padding: '0.8rem 0.9rem' }}>
                  <div style={{ color: 'var(--cyan)', display: 'flex' }}>{icon}</div>
                  {href ? (
                    <a href={href} style={{ fontSize: '0.88rem', color: 'var(--soft)', textDecoration: 'none' }}>
                      {label}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.88rem', color: 'var(--soft)', fontFamily: 'Outfit, sans-serif' }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
                SOCIAL
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <GitBranch size={18} />, href: siteConfig.githubUrl, label: 'GitHub' },
                  { icon: <Link2 size={18} />, href: siteConfig.linkedinUrl, label: 'LinkedIn' },
                  { icon: <Mail size={18} />, href: `mailto:${siteConfig.email}`, label: 'Email' },
                ].map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <p className="section-label mb-3">Send Message</p>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--light)',
                lineHeight: 1.2,
                marginBottom: '0.9rem',
              }}
            >
              Best for opportunities and project conversations.
            </h3>

           

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    NAME
                  </label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(current => ({ ...current, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    EMAIL
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(current => ({ ...current, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                  MESSAGE
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Tell me about the role, project, or opportunity..."
                  value={form.message}
                  onChange={e => setForm(current => ({ ...current, message: e.target.value }))}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'sent' ? (
                  'Message sent'
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              {status === 'sent' && (
                <p style={{ fontSize: '0.82rem', color: 'var(--cyan)', textAlign: 'center' }}>
                  Your message has been submitted successfully.
                </p>
              )}

              {status === 'error' && (
                <p style={{ fontSize: '0.82rem', color: '#c2410c', textAlign: 'center' }}>
                  {errorMessage}
                </p>
              )}
            </form>

            <div className="grid gap-3 sm:grid-cols-2 mt-6">
              {directLinks.map(
                ({ icon, label, href, download, external }) => (
                  <a
                    key={label}
                    href={href}
                    download={download || undefined}
                    target={
                      external || (!download && !href.startsWith('mailto:') && !href.startsWith('tel:'))
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      external || (!download && !href.startsWith('mailto:') && !href.startsWith('tel:'))
                        ? 'noreferrer'
                        : undefined
                    }
                    className={
                      label === 'Email'
                        ? 'btn-primary justify-center'
                        : 'btn-outline justify-center'
                    }
                  >
                    {icon}
                    {label}
                  </a>
                )
              )}
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', fontFamily: 'DM Mono, monospace', marginTop: '1rem' }}>
              If this is the first form submission, confirm the FormSubmit activation email once.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
