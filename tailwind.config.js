module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // Noir profond
        secondary: "#f9fafb", // Fond gris clair
        accent: "#6b7280", // Gris intermédiaire
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Typographie moderne
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
