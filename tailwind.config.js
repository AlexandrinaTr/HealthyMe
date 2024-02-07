/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#A1BB69",
        "primary-green-light": "#B7C29D",

        "accent-pink": "#E984A2",
        "accent-pink-light": "#F5C6D4",
        "text-dark": "#11300C",
        "text-light": "#11300C[.56]",
        "card-bg": "#FBF7F1",
      },
    },
  },
  plugins: [],
};
