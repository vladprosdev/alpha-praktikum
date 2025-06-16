 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     screens: {
       'sm': '0px',
       'md': '823px',
       'lg': '1000px',
       'xl': '1300px',
     },
     fontFamily: {
       rubik: ['Rubik, sans-serif'],
     },
     fontSize: {
       'fs-heading': '2.5rem',
       'fs-paragraph': '1rem',
       'fs-name': '0.6875rem',
       'fs-status': '0.5rem',
       'fs-chat': '0.5rem',
       'fs-price': '0.75rem',
       'fs-placeholder': '0.5625rem',
     },
     fontWeight: {
       'fw-400': '400',
       'fw-500': '500',
       'fw-700': '700',
     },
     colors: {
       clr: {
         'status': 'hsl(276, 100%, 81%)',
         'chat-bg': 'hsl(271, 16%, 96%)',
         'chat-left': 'hsl(276, 55%, 52%)',
         'chat-left-bg': 'hsl(276, 41%, 93%)',
         'chat-right': 'hsl(271, 15%, 43%)',
         'placeholder': 'hsl(206, 6%, 79%)',
         'heading': 'hsl(271, 36%, 24%)',
         'paragraph': 'hsl(270, 7%, 64%)',
         'white': 'hsl(0, 0%, 100%)',
         'black': 'hsl(0, 0%, 0%)',
         'submit-button-bg': 'hsl(271, 36%, 24%)',
         'radio-button-outline': 'hsl(289, 100%, 72%)',
         'gradient-1': 'hsl(289, 100%, 72%)',
         'gradient-2': 'hsl(263, 100%, 61%)',
       },
     },
     extend: {},
   },
   plugins: [],
 }