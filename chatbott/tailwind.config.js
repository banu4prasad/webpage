/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#191919",
          "200": "#0b0b0b",
          "300": "rgba(255, 255, 255, 0.3)",
          "400": "rgba(255, 255, 255, 0.7)",
          "500": "rgba(255, 255, 255, 0.9)",
          "600": "#1a1a1a",
          "800": "#141414",
          "1000": "rgba(0, 0, 0, 0.5)",
          "1100": "rgba(0, 0, 0, 0.05)",
        },
        dimgray: "#515151",
        white: "#fff",
        black: "#000",
        darkgray: "#9f9e9e",
        crimson: "#df3636",
        royalblue: "#536fd1",
        lightseagreen: "#41ab97",
        orange: "#ffb600",
        lightgray: "#d0d0d0",
        darkslategray: {
          "100": "#434343",
          "200": "#2d2d2d",
        },
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        mukta: "Mukta",
        "abhaya-libre": "'Abhaya Libre'",
        "advent-pro": "'Advent Pro'",
        inter: "Inter",
        inherit: "inherit",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xl-5": "22.5px",
        "11xl": "30px",
        mini: "15px",
        "smi-5": "12.5px",
        "6xl": "25px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      xs: "0.75rem",
      "45xl": "4rem",
      "32xl": "3.188rem",
      "19xl": "2.375rem",
      "5xl": "1.5rem",
      base: "1rem",
      lgi: "1.188rem",
      sm: "0.875rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      lg: "1.125rem",
      "7xl": "1.625rem",
      "21xl": "2.5rem",
      "3xs": "0.625rem",
      xl: "1.25rem",
      mini: "0.938rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
