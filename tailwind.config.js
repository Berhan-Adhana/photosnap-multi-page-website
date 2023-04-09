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
        facebook: ["linear-gradient(225deg, #63AFDB 0%, #6028F1 100%)"],
        youtube: ["linear-gradient(#D3205A, #FF5A5A)"],
        twitter: ["linear-gradient(#65FFEB, #27718A)"],
        pinterest: ["linear-gradient(#F6C683, #DE3838)"],
        instagram: ["linear-gradient(#FFC593, #BC7198, #5A77FF)"],
        overlay: [
          "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%)",
        ],
      },
    },
  },
  plugins: [],
};
