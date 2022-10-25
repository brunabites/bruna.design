const { SERVFAIL } = require('dns');
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './data/**/*.mdx',
  ],
  plugins: [require('@tailwindcss/typography')],
    variants: {
    typography: ['dark'],
  },
  theme: {
    extend: {
      colors: {
        yellow: {
           50: '#FEFFE6',
          100: '#FDFFCC',
          200: '#FBFF99',
          300: '#F8FF66',
          400: '#F4FF00',
          500: '#EAF500',
          600: '#C3CC00',
          700: '#7A8000',
          800: '#3D4000',
          900: '#181A00',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.yellow.800'),
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.yellow.900'),
              },
              code: { color: theme('colors.purple.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.800'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.800'),
            },
            h3: {
              fontWeight: '700',
              color: theme('colors.gray.800'),
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            'h4,h5,h6': {
              color: theme('colors.gray.800'),
            },
            pre: {
              backgroundColor: theme('colors.blueGray.900'),
            },
            code: {
              color: theme('colors.gray.800'),
              fontWeight: '400',
              backgroundColor: theme('colors.stone.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            details: {
              backgroundColor: theme('colors.gray.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '4px',
              paddingBottom: '4px',
              borderRadius: '0.5rem',
            },
            hr: { borderColor: theme('colors.gray.300') },
            'ul li::marker': {
              color: theme('colors.gray.600'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.teal.300'),
            },
          },
        },
      }),
    },
  },
};
