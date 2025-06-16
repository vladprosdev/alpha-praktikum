 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js,css}"],
   theme: {
     extend: {
       fontFamily: {
         'oi': ['Oi', 'sans-serif'],
         'funnel-sans': ['Funnel Sans', 'sans-serif'],
       }
     },
   },
   plugins: [],
 }