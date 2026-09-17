export const projects = [
  {
    id: 1,
    title: 'FinForge',
    date: 'April 2026',
    description:
      'A full-stack financial management platform that helps users track income, expenses, and transaction history through a responsive dashboard.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
githubUrl: 'https://github.com/mir-sajad-01/fin-forge.git',
liveUrl: 'https://fin-forge.vercel.app/',
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
githubUrl: 'https://github.com/mir-sajad-01/Intervue-AI.git',
liveUrl: 'https://intervue-ai-ruby.vercel.app/',
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
      'A full-stack service-booking platform connecting customers with local service providers through role-based dashboards, booking workflows, and secure APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/Faizan-313/Local-Services-Aggregator-Platform.git',
    highlights: [
      'Role-based customer and provider dashboards with booking status workflows',
      'JWT access and refresh-token authentication with bcrypt and custom middleware',
      'Normalized MySQL schema with duplicate-booking prevention and server validation',
    ],
    featured: true,
    color: '#b45309',
    badge: 'Hackathon',
  },
  {
  id: 4,
  title: 'Facial Expression Recognition',
  date: '2025',
  description:
    'A deep-learning computer vision system that recognizes seven human facial expressions using a fine-tuned MobileNetV2 model trained on the FER2013 dataset.',
  tech: ['Python', 'PyTorch', 'MobileNetV2', 'OpenCV', 'Gradio', 'Hugging Face'],
  liveUrl: null,
  githubUrl: 'https://github.com/mir-sajad-01/Facial-Expression-Model.git',
  highlights: [
    'Fine-tuned MobileNetV2 using transfer learning',
    'Trained and evaluated on the FER2013 facial-expression dataset',
    'Real-time facial-expression prediction with a deployed Gradio interface',
  ],
  featured: true,
  color: '#7c3aed',
  badge: 'ML',
},
  {
  id: 5,
  title: 'Task Manager',
  date: '2025',
  description:
    'A full-stack task management application for creating, organizing, updating, and tracking tasks with secure authentication and a responsive dashboard.',
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
  githubUrl: 'https://github.com/mir-sajad-01/Task-Manager.git',
liveUrl: 'https://task-manager-w5yw.onrender.com',
  highlights: [
    'JWT-based authentication with protected routes',
    'Complete task CRUD operations with search and status filtering',
    'Dashboard with task statistics and progress tracking',
  ],
  featured: true,
  color: '#2563eb',
},
{
  id: 6,
  title: 'Wanderlust',
  date: '2025',
  description:
    'A full-stack accommodation platform that allows users to discover, create, and manage property listings with reviews, ratings, and booking functionality.',
  tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Tailwind CSS', 'Bootstrap', 'Cloudinary'],
  liveUrl: null,
  githubUrl: 'https://github.com/mir-sajad-01/WanderLust__.git',
  highlights: [
    'User authentication with role-based functionality',
    'Property listing creation, management, and image uploads',
    'Reviews, ratings, and booking functionality',
  ],
  featured: true,
  color: '#b91c1c',
},
]

export const skills = {
  Languages: ['C', 'Java', 'JavaScript'],
  Frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL'],
  'Computer Science': ['DSA', 'OOP', 'DBMS', ],
  Tools: ['Git', 'GitHub', 'VS Code'],
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