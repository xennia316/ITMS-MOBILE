/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#1C2129",
      secondary: "#80F17E",
      danger: "#e3342f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#80F17E",
    }),
    width: {
      "9/20": "45%",
      "12/25": "48%",
    },
  },
  plugins: [],
};
