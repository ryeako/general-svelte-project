const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  future: {
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  content: [],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }
      }
    },
  },
  plugins: [],
  purge: {
    content: [
     './src/**/*.svelte',
     './public/index.html'
    ],
    enabled: production // disable purge in dev
  },
  variants: {
    extend: {
     borderRadius: ['hover', 'focus'],
    }
  },
}
