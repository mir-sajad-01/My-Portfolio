export const projects = [
  {
    id: 1,
    title: 'FinForge',
    date: 'April 2026',
    description:
      'A full-stack financial management platform that helps users track income, expenses, and transaction history through a responsive dashboard.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
    liveUrl: 'https://fin-forge.vercel.app/',
    githubUrl: 'https://github.com/mir-sajad-01/fin-forge',
    highlights: [
      'JWT authentication and protected API routes for user-specific financial data',
      'Interactive Recharts dashboard for spending trends and monthly comparisons',
      'Transaction filters, sorting, dark mode, and multi-currency support',
    ],
    featured: true,
    color: '#0f766e',
  },
  {
    id: 2,
    title: 'IntervueAI',
    date: 'May 2026',
    description:
      'An AI interview practice platform that evaluates facial expression, speech quality, and answer content in a single interview workflow.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini API', 'PyTorch'],
    liveUrl: 'https://intervueai.vercel.app',
    githubUrl: 'https://github.com/mir-sajad-01/Intervue-AI',
    highlights: [
      'MobileNetV2 fine-tuned on FER2013 for real-time facial emotion detection',
      'Gemini-based scoring for relevance, fluency, and clarity with fallback handling',
      'JWT refresh-token auth, rate-limited APIs, analytics, and PDF report export',
    ],
    featured: true,
    color: '#15803d',
    badge: 'AI',
  },
  {
    id: 3,
    title: 'Local Services Platform',
    date: 'July 2025',
    description:
      'A full-stack booking platform built with a four-member team during a 24-hour hackathon for customers and service providers.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    highlights: [
      'Role-based customer and provider dashboards with booking status workflows',
      'JWT access and refresh-token authentication with bcrypt and custom middleware',
      'Normalized MySQL schema with duplicate-booking prevention and server validation',
    ],
    featured: true,
    color: '#b45309',
    badge: 'Hackathon',
  },
]

export const skills = {
  Languages: ['C', 'Java', 'JavaScript'],
  Frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'EJS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'JWT'],
  Concepts: ['DSA', 'OOP', 'Problem Solving'],
}

export const achievements = [
  {
    year: '2026',
    title: 'GATE CSE 2026 Qualified',
    desc: 'Qualified the national-level Computer Science and Engineering examination conducted by the IITs.',
    color: '#0f766e',
  },
  {
    year: '2025',
    title: 'Hackathon Finalist',
    desc: 'Cleared four evaluation rounds and reached the final one-on-one technical round as part of a four-member team.',
    color: '#15803d',
  },
  {
    year: '2025',
    title: 'Delta Full-Stack Web Development',
    desc: 'Completed Apna College Delta, covering full-stack web development with the MERN stack.',
    color: '#b45309',
  },
]