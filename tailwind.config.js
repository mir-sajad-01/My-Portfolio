/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg: '#07070f',
        surface: '#0e0e1a',
        card: '#12121f',
        border: '#1e1e30',
        cyan: '#00d4ff',
        teal: '#00f5c4',
        amber: '#f5a623',
        muted: '#6b7280',
        soft: '#a0a0b8',
        light: '#e8e8f0',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
