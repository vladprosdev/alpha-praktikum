 /** @type {import('tailwindcss').Config} */
 export default {
   content: [
     "./src/**/*.{html,js,css}",
     "./src/index.html",
   ],
   theme: {
     extend: {
       screens: {
         'sm': '0',
         'md': '700px',
         'lg': '1050px',
         'xl': '1300px',
       },
       fontFamily: {
         'inter-regular': ['Inter Regular', 'sans-serif'],
         'inter-bold': ['Inter Semi Bold', 'sans-serif'],
         'martian-mono-regular': ['Martian Mono Regular', 'sans-serif'],
         'martian-mono-semibold': ['Martian Mono Semi Bold', 'sans-serif'],
         'martian-mono-bold': ['Martian Mono Bold', 'sans-serif'],
       },
       fontWeight: {
         'normal': '700',
       },
       colors: {
         neutral: {
           '900': '#062630',
           '700': '#385159',
           '200': '#E6E1DF',
           '100': '#FAF5F3',
           DEFAULT: '#FFFFFF',
         },
         'light-salmon': {
           '500': '#FEA36F',
           '100': '#FFE2D1',
           '50': '#FFF5EF',
         },
       },
       fontSize: {
         'preset-1': ['clamp(2.375rem, 8vw, 3.875rem)', {
           lineHeight: '1.2',
           letterSpacing: '-0.125rem',
         }],
         'preset-2': ['clamp(2.125rem, 6vw, 3.125rem)', {
           lineHeight: '1.3',
           letterSpacing: '-0.125rem',
         }],
         'preset-3': ['clamp(1.5rem, 8vw, 2.125rem)', {
           lineHeight: '1.3',
           letterSpacing: '-0.0625rem',
         }],
         'preset-4': ['1.5rem', {
           lineHeight: '1.1',
           letterSpacing: '-0.0625rem',
         }],
         'preset-5': ['1.25rem', {
           lineHeight: '1.4',
           letterSpacing: '-0.0313rem',
         }],
         'preset-6': ['clamp(1rem, 2vw, 1.125rem)', {
           lineHeight: '1.3',
           letterSpacing: '-0.0625rem',
         }],
         'preset-7': ['0.875rem', {
           lineHeight: '1.2',
           letterSpacing: '-0.0625rem',
         }],
       },
       backgroundImage: {
         'pattern-light': "url('../assets/images/pattern-light-bg.svg')",
         'pattern-dark': "url('../assets/images/pattern-dark-bg.svg')",
         'pattern-glow': "url('../assets/images/pattern-glow.svg')",
         'pattern-arrow': "url('../assets/images/pattern-arrow.svg')",
       },
       listStyleImage: {
         check: 'url("../assets/images/icon-check.svg")',
       },
       gridTemplateAreas: {
         'section-layout': [
           'content image',
         ],
         'review-layout': [
           'avatars stars',
           'avatars text',
         ],
       },
       keyframes: {
         'down-up': {
           '0%, 100%': {
             transform: 'translateY(0)'
           },
           '50%': {
             transform: 'translateY(0.3125rem)'
           },
         },
         'up-down': {
           '0%, 100%': {
             transform: 'translateY(0)'
           },
           '50%': {
             transform: 'translateY(-0.3125rem)'
           },
         },
       },
       animation: {
         'down-up': 'down-up 1.3s ease infinite',
         'up-down': 'up-down 1.3s ease infinite',
       },
     },
   },
   plugins: [
     require('@savvywombat/tailwindcss-grid-areas'),
   ],
 }