/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: {
        "preserve-3d": "transform-style: preserve-3d",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        scale: "scale 4s ease-in-out infinite",

        "spin-slow": "spinSlow 10s linear infinite",

        "gradient-move": "gradientMove 5s ease infinite",
        "slide-right": "slideRight 3s ease-in-out infinite",
      },

      fontFamily: {
        Roboto: ["Roboto"],
        Montserrat: ["Montserrat"],
        Poppins: ["Poppins"],
        PoppinsBold: ["Poppins-bold"],
        Inter: ["Inter"],
        Londrina: ["Londrina"],
        Libe: ["Libe"],
        OutlineFont: ["OutlineFont"],
        Bungee: ["Bungee"],
      },
    },
  },
  plugins: [],
};
