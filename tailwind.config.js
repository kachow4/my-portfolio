/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '480px', 
      'tablet+': '640px', 
      'laptop': '768px', 
      'laptop+': '1024px',
      'desktop': '1280px', 
      'desktop+': '1536px', 
    },
    colors: {
      'white': '#FFF',
      'light-pink': '#F299A0',
      'medium-pink': '#F27999',
      'dark-pink': '#DC577C',
      'light-green': '#D0D9CC',
      'dark-green': '#8FBF9B',
      'light-brown': '#CABA9C',
      'dark-brown': '#4D2D18',
      'black': '#000'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
