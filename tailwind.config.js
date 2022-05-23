module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        autopartstheme: {
          primary: "#f6621b",
          secondary: "#d64b08",
          accent: "#111111",
          neutral: "#999",
          info: "#ffd800",
          success: "#f3f3f3",
          bordercolor: "#e5e7eb",
          card: "#333333",
          cards: "#d4fdfe",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
