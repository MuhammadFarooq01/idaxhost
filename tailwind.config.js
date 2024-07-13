/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        "extra-bold": "900",
      },
      margin: {
        "-70": "-70px",
      },
      fontFamily: {
        miulish: ["Miulish", "sans-serif"], // Add this line
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        accent: "#FFB800",
        neutral: "#001C6B",
        cgray: "#F6F6F6",
        cred: "#FFE8EF",
        "pink-600": "#FF2963",
        "coral-pink": "#FF645F",
        cnavy: "#001042",
        Navbg: "#D6D6D6",
        "btn-blue-light": "rgb(0, 130, 248)",
        "btn-blue-dark": "rgb(28, 64, 242)",
      },
    },
  },
  plugins: [],
};
