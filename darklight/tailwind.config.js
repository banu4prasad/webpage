/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#191919",
          "200": "#0b0b0b",
        },
        darkslategray: "#434343",
        "gray-shades-dark-gray": "#fff",
        dimgray: "#515151",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        mukta: "Mukta",
      },
      borderRadius: {
        "26xl": "45px",
        mini: "15px",
        "smi-5": "12.5px",
      },
    },
    fontSize: {
      "29xl": "48px",
      lg: "18px",
      "77xl": "96px",
      "10xl": "29px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
