/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        aneley: {
          cream: '#FDFCF7',
          ivory: '#F7F4EB',
          sand: '#ECE7D8',
          purple: {
            DEFAULT: '#6B2D82',
            deep: '#4D1D60',
            light: '#8539A0',
            soft: '#F5ECF8',
            surface: '#FBF7FD',
          },
          yellow: {
            DEFAULT: '#F5A623',
            sun: '#FFCA3A',
            warm: '#FFE599',
            soft: '#FEF8EB',
          },
          green: {
            DEFAULT: '#4E9F3D',
            fresh: '#5CA764',
            light: '#89D573',
            soft: '#EDF7EB',
          },
          pink: {
            DEFAULT: '#E84382',
            soft: '#FDF0F5',
            light: '#F56C9F',
          },
          sky: {
            DEFAULT: '#70B6E8',
            soft: '#EEF6FD',
            light: '#9BD2F5',
          },
          earth: '#8B5A2B',
          text: {
            DEFAULT: '#2E2734',
            muted: '#655D70',
            light: '#91899C',
          }
        }
      },
      fontFamily: {
        heading: ['"Fredoka"', '"Quicksand"', 'system-ui', 'sans-serif'],
        subheading: ['"Quicksand"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(107, 45, 130, 0.05)',
        'card': '0 10px 35px -5px rgba(0, 0, 0, 0.05), 0 5px 15px -3px rgba(107, 45, 130, 0.03)',
        'hover': '0 20px 40px -10px rgba(107, 45, 130, 0.12), 0 8px 20px -4px rgba(245, 166, 35, 0.1)',
        'pill': '0 4px 16px rgba(107, 45, 130, 0.25)',
        'whatsapp': '0 8px 25px rgba(78, 159, 61, 0.35)',
      }
    },
  },
  plugins: [],
};
