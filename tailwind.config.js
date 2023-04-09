/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontDmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        black: "#000",
        lightGrey: "#DFDFDF",
        white: "#FFF",
        background: "#F2F2F2",
        bgcontainer: "#F5F5F5",
      },
      boxShadow: {
        cardShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      backgroundImage: {
        mainAccent: ["linear-gradient(#FFC593, #BC7198, #5A77FF)"],
        overlay: [
          "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%)",
        ],
      },
    },
  },
  plugins: [],
};
