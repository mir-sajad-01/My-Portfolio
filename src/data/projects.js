export const projects = [
  {
    id: 1,
    title: 'Task Manager',
    date: 'MERN App',
    description:
      'A task management app with secure sign-in, task tracking, filtering, and dashboard views for keeping daily work organized.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://task-manager-w5yw.onrender.com',
    githubUrl: 'https://github.com/mir-sajad-01/Task-Manager',
    highlights: [
      'Authentication flow with protected routes and JWT-based access control',
      'Task CRUD, search, status filters, and quick inline updates',
      'Dashboard summary for pending, completed, and overall task progress',
    ],
    featured: true,
    color: '#0f766e',
  },
  {
    id: 2,
    title: 'Intervue AI',
    date: 'AI Platform',
    description:
      'An interview practice platform that combines webcam-based expression analysis, speech input, and AI feedback to simulate technical interview sessions.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Google Gemini API'],
    liveUrl: null,
    githubUrl: 'https://github.com/mir-sajad-01/Intervue-AI',
    highlights: [
      'Interview sessions with speech transcription and structured answer evaluation',
      'Facial expression analysis integrated through a Hugging Face model endpoint',
      'Dashboard, history tracking, scoring, and personalized feedback reports',
    ],
    featured: true,
    color: '#15803d',
    badge: 'AI',
  },
  {
    id: 3,
    title: 'Facial Expression Model',
    date: 'ML Project',
    description:
      'A computer vision model for recognizing facial emotions in real time using transfer learning and a lightweight deployment setup.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Gradio', 'Hugging Face', 'MobileNetV2'],
    liveUrl: 'https://huggingface.co/spaces/mir-sajad-01/facial-expression-recognition',
    githubUrl: 'https://github.com/mir-sajad-01/Facial-Expression-Model',
    highlights: [
      'Built on FER2013 with transfer learning using MobileNetV2',
      'Classifies seven emotions from face images and webcam input',
      'Deployed as an interactive demo through Hugging Face Spaces and Gradio',
    ],
    featured: true,
    color: '#b45309',
    badge: 'ML',
  },
  {
    id: 4,
    title: 'FinForge',
    date: 'April 2026',
    description:
      'A finance-focused web app for tracking income, expenses, and transactions through a simple dashboard-oriented interface.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
    liveUrl: 'https://fin-forge.vercel.app/',
    githubUrl: 'https://github.com/mir-sajad-01/fin-forge',
    highlights: [
      'Transaction tracking with categorized records and summary views',
      'Protected routes with authentication and user-specific data access',
      'Dashboard charts for a quick view of financial activity and trends',
    ],
    featured: true,
    color: '#0f766e',
  },
  {
    id: 5,
    title: 'Local Services Aggregator',
    date: 'July 2025',
    description:
      'A responsive service listing and booking concept built during a hackathon with separate flows for users and service providers.',
    tech: ['React.js', 'React Router', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    highlights: [
      'Built in a short hackathon timeline with a working multi-page flow',
      'Role-based user journeys for customers and service providers',
      'Responsive UI with client-side routing and organized service views',
    ],
    featured: true,
    color: '#15803d',
    badge: 'Hackathon',
  },
  {
    id: 6,
    title: 'Wanderlust',
    date: 'April 2025',
    description:
      'A property rental platform inspired by Airbnb for browsing listings, managing properties, and exploring stay details.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/mir-sajad-01/WanderLust__',
    highlights: [
      'Server-rendered listing flows with Node.js, Express, and EJS',
      'Authentication and authorization for user and property actions',
      'CRUD operations for managing stays and listing content',
    ],
    featured: true,
    color: '#b45309',
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
    desc: 'Cleared the national-level Computer Science and Engineering exam conducted by the IITs.',
    color: '#0f766e',
  },
  {
    year: '2025',
    title: 'Hackathon Finalist',
    desc: 'Cleared four evaluation rounds and reached the final one-on-one technical round out of hundreds of teams.',
    color: '#15803d',
  },
  {
    year: '2025',
    title: 'Web Development Certification',
    desc: 'Completed the Delta web development course by Apna College, covering the MERN stack end to end.',
    color: '#b45309',
  },
]
