module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "hero-red": "#ed5b42",
        "hero-orange": "#f4aa85",
        "hero-blue": "#c3dae0",
        "hero-gray": "#414247",
        "twitter-blue": "#1DA1F2",
        "github-gray": "#333",
        "linkedin-blue": "#0077b5",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
