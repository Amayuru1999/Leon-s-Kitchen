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
        green: {
          800: "#18952c",
          A400: "#00f076",
          "800_01": "#19962d",
          "800_dd": "#1a9c05dd",
        },
        gray: { 50: "#f8f8f8", 100: "#f5f5f5", 300: "#e0e1dc", 500: "#a6a6a6" },
        light_green: { 900: "#484315", "900_01": "#484316" },
        black: {
          900: "#000000",
          "900_01": "#03081f",
          "900_cc": "#000000cc",
          "900_99": "#00000099",
          "900_19": "#00000019",
        },
        blue_gray: {
          100: "#d9d9d9",
          "100_7f": "#d9d9d97f",
          "100_90": "#d9d9d990",
          "100_75": "#d9d9d975",
        },
        white: { A700_19: "#ffffff19", A700: "#ffffff" },
        lime: { 300: "#dad38d", A700_d8: "#c6e410d8", "300_a5": "#ecdf69a5" },
        orange: { 600: "#fc8a06" },
      },
      fontFamily: { poppins: "Poppins", manrope: "Manrope" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#c6e410d8,#e0e1dc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
