module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          900: "#1e1e1e",
          "50_cc": "#fdfcfccc",
          "50_01": "#fdfcfc",
          "900_cc": "#1e1e1ecc",
          "900_19": "#1e1e1e19",
        },
        black: {
          "900_0a": "#0000000a",
          "900_1e": "#0000001e",
          "900_cc": "#120301cc",
        },
        red: { 100: "#f4d4cc" },
        yellow: { 800: "#f29c1f" },
        deep_orange: { 600: "#ef4d23", 700: "#ee3f24" },
        indigo: { 900: "#302a79" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: { gradient: "linear-gradient(135deg ,#f29c1f,#ee3f24)" },
      fontFamily: { poppins: "Poppins" },
      boxShadow: {
        bs: "0px 4px  16px 0px #0000000a",
        bs1: "0px 6px  24px 0px #0000001e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
