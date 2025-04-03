/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#141414',
        box: '#222831',
        titleText: "#93f4f8",
        elecBlue: "#00BFFF",          // Lighter electric blue
        primary: '#007bff',           // Still use electric blue for accents
        textLight: '#333333',         // Darker text for contrast (instead of light gray)
        textDark: '#1F1F1F',          // Dark text for primary content
        accent: 'rgb(253, 224, 71)',  // Accent orange for hover effects and buttons
        color: '#FFFFFF',
        lightGray: '#9E9E9E',         // Lighter gray for less emphasized text
        hover: '#48f2fa',             // Light cyan hover effect for better visibilit
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [],
}