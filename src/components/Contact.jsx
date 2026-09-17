import { Mail, Phone, MapPin, GitBranch, FileText, Send } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="section-label mb-4">
            CONTACT
          </p>

          <h2
            className="mb-4 font-bold tracking-tight"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--light)',
            }}
          >
            Get in touch
          </h2>

          <p
            className="max-w-xl text-base leading-7"
            style={{ color: 'var(--soft)' }}
          >
            Open to Software Engineering opportunities and project
            collaborations.
          </p>
        </div>


        {/* Main Contact Grid */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div>

            <div className="space-y-4">

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: '#eef7f6',
                    color: 'var(--cyan)',
                  }}
                >
                  <Mail size={18} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p
                    className="text-sm md:text-[15px]"
                    style={{ color: 'var(--light)' }}
                  >
                    {siteConfig.email}
                  </p>
                </div>
              </a>


              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-4 rounded-xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: '#eef7f6',
                    color: 'var(--cyan)',
                  }}
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p
                    className="text-sm md:text-[15px]"
                    style={{ color: 'var(--light)' }}
                  >
                    {siteConfig.phone}
                  </p>
                </div>
              </a>


              {/* Location */}
              <div
                className="flex items-center gap-4 rounded-xl border bg-white p-4"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: '#eef7f6',
                    color: 'var(--cyan)',
                  }}
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                    Location
                  </p>

                  <p
                    className="text-sm md:text-[15px]"
                    style={{ color: 'var(--light)' }}
                  >
                    Srinagar, Kashmir
                  </p>
                </div>
              </div>

            </div>


            {/* Connect */}
            <div className="mt-8">

              <p className="section-label mb-4">
                CONNECT
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <span className="text-sm font-bold">in</span>
                  LinkedIn
                </a>

                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>

              </div>

            </div>


            {/* Resume */}
            <div className="mt-7">

              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
                style={{ color: 'var(--cyan)' }}
              >
                <FileText size={16} />
                View Resume
              </a>

            </div>

          </div>


          {/* ================= RIGHT ================= */}
          <div
            className="rounded-2xl border bg-white p-6 md:p-8"
            style={{ borderColor: 'var(--border)' }}
          >

            <p className="section-label mb-4">
              SEND A MESSAGE
            </p>

            <h3
              className="mb-7 font-semibold leading-tight"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                color: 'var(--light)',
              }}
            >
              Let's start a conversation.
            </h3>


            <form
              action="https://formsubmit.co/ajax/mirsajad00011@gmail.com"
              method="POST"
              className="space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--light)',
                    }}
                  />
                </div>


                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--light)',
                    }}
                  />
                </div>

              </div>


              {/* Message */}
              <div>

                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about the role, project, or opportunity..."
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--light)',
                  }}
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="btn-primary flex w-full items-center justify-center gap-2 py-3.5"
              >
                <Send size={16} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}