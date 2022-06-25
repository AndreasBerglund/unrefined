/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/*{html,js}", "./src/*/*{html,js}", "./src/*/*/*{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "60px 1fr 60px",
        mainsm: "30px 1fr 30px",
      },
      gridTemplateRows: {
        main: "60px 1fr 60px",
        mainsm: "30px 1fr 30px",
      },
      transitionDuration: {
        5000: "5000ms",
      },
    },
  },
  variant: {},
  plugins: [],
};
