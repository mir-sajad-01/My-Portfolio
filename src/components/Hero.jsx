import { GitBranch, Link2, Mail, FileText, ArrowDownRight } from 'lucide-react'
import profileImage from '../assets/profile.jpeg'
import { siteConfig } from '../data/site'

const socialLinks = [
  {
    icon: <GitBranch size={16} />,
    href: siteConfig.githubUrl,
    label: 'GitHub',
  },
  {
    icon: <Link2 size={16} />,
    href: siteConfig.linkedinUrl,
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={16} />,
    href: `mailto:${siteConfig.email}`,
    label: 'Email',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center py-16 md:py-20 lg:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* LEFT SIDE */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p className="section-label mb-4">
              SOFTWARE ENGINEER
            </p>

            {/* Name */}
            <h1
              className="mb-3 font-bold leading-[0.98] tracking-[-0.045em]"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(3rem, 6vw, 5.2rem)',
                color: 'var(--light)',
              }}
            >
              Sajad Bashir Mir
            </h1>

            {/* Role */}
            <h2
              className="mb-5 font-semibold"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: 'var(--cyan)',
              }}
            >
              Full-Stack Developer
            </h2>

            {/* Bio */}
            <p
              className="mb-7 max-w-2xl text-base leading-8 md:text-[17px]"
              style={{ color: 'var(--soft)' }}
            >
              Computer Science graduate and Full-Stack Developer specializing
              in React.js, Node.js, Express.js, and MongoDB, with a strong
              foundation in Java, DSA, OOP, and core CS fundamentals.
            </p>

            {/* Skill Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {siteConfig.focusAreas.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mb-7 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Projects
                <ArrowDownRight size={16} />
              </a>

              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FileText size={16} />
                Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link inline-flex items-center gap-2"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>

          </div>


          {/* RIGHT SIDE — PHOTO */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[440px] rounded-[22px] border p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              style={{
                background: 'rgba(255,255,255,0.72)',
                borderColor: 'var(--border)',
              }}
            >

              {/* Photo */}
              <div className="relative overflow-hidden rounded-[16px] bg-[#eef2f4]">

                <img
                  src={profileImage}
                  alt="Sajad Bashir Mir"
                  className="block h-[380px] w-full object-cover object-[center_18%] sm:h-[440px] lg:h-[490px]"
                />

              </div>

             

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}