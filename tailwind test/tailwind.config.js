 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js,css}"],
   theme: {
     extend: {
       fontFamily: {
         'oi': ['Oi', 'sans-serif'],
         'funnel-sans': ['Funnel Sans', 'sans-serif'],
       },
       animation: {
         'typing': 'typing 6s steps(50, end) forwards',
         'blink-caret': 'blink-caret 1s step-end infinite',
       },
       keyframes: {
         typing: {
           'from': {
             width: '0%'
           },
           'to': {
             width: '100%'
           },
         },
         'blink-caret': {
           'from, to': {
             'border-color': 'transparent'
           },
           '50%': {
             'border-color': 'rgb(255 251 235)'
           },
         },
       },
     },
   },
   plugins: [],
 }