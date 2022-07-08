/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#1B77F2",
        backg: "#F0F2F5",
        green: "#36A420",
      },
      spacing: {
        300: "300px",
        380: "380px",
        580: "580px",
      },
    },
  },
  plugins: [],
};
