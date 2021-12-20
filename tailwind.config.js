module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEE402",
        secondary: "#111111",
        primaryHover: "#ffed4f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-img.jpg')",
        "trainer-1": "url('/src/assets/trainer-1-min.jpg')",
        "trainer-2": "url('/src/assets/trainer-2-min.jpg')",
        "trainer-3": "url('/src/assets/trainer-3-min.jpg')",
        "trainer-4": "url('/src/assets/trainer-4-min.jpg')",
        "faq-bg": "url('/src/assets/dumbells-faq-bg-min.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
