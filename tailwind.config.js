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
        teal: {
          50: '#E5FFFB',
         100: '#99FFEF',
         200: '#00FFD6',
         300: '#00F5CD',
         400: '#00E0BC',
       },
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        mono: ['Lilex', ...fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.900'),
            a: {
              color: theme('colors.slate.900'),
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.slate.900'),
              },
              code: { color: theme('colors.purple.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.800'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.slate.900'),
            },
            h3: {
              fontWeight: '700',
              color: theme('colors.slate.900'),
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            'h4,h5,h6': {
              color: theme('colors.slate.900'),
            },
            pre: {
              backgroundColor: theme('colors.slate.900'),
            },
            code: {
              color: theme('colors.slate.800'),
              fontWeight: '400',
              backgroundColor: theme('colors.slate.100'),
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
              backgroundColor: theme('colors.slate.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '4px',
              paddingBottom: '4px',
              borderRadius: '0.5rem',
            },
            hr: { borderColor: theme('colors.slate.200') },
            'ul li::marker': {
              color: theme('colors.slate.600'),
            },
            strong: { color: theme('colors.slate.600') },
            blockquote: {
              color: theme('colors.slate.700'),
              borderLeftColor: theme('colors.purple.300'),
            },
          },
        },
      }),
    },
  },
};
