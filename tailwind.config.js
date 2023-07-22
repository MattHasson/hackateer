/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        midnightNavy: '#0F0B38',
        majesticOrchid: '#1E90FF',
        aquamarineDream: '#23C6DC',
        electricCitrus: '#FFA500',
        forestGreen: '#00A600',
        enchantedEmerald: '#00FF00',
        berryBlush: '#BE397C',
        raspberryFizz: '#FF69B4',
        moonlitIvory: '#F0F0F0',
        charcoalMist: '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
