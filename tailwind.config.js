/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark", "cupcake"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#6b21a8",
        secondary: "#64748b",
        // dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
