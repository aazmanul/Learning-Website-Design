tailwind.config = {
  // mode: 'jit' is no longer needed in Tailwind CSS v3 and above
  // The JIT engine is the default and only option
  content: ['./Project.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}