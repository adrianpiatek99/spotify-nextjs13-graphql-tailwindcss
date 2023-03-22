/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      current: "currentColor",
      primary: "#1ed760",
      secondary: "#445A90",
      background1: "#111111",
      background2: "#000000",
      gray: {
        100: "#999999",
        200: "#888888",
        DEFAULT: "#333333"
      },
      border1: "#333333",
      foreground: "#ffffff",
      error: "#C42A36"
    },
    fontSize: {
      xs: ["12px", "15px"],
      s: ["14px", "17px"],
      m: ["16px", "20px"],
      l: ["18px", "22px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
      "3xl": ["29px", "35px"],
      "4xl": ["35px", "43px"],
      "5xl": ["42px", "49px"],
      "6xl": ["49px", "56px"],
      "7xl": ["64px", "71px"]
    },
    fontFamily: {
      primary: ["-apple-system", "BlinkMacSystemFont", "Inter", "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      animation: {
        "animation-spinner": "spinner 0.6s linear infinite"
      },
      keyframes: {
        spinner: {
          to: { transform: "rotate(360deg)" }
        }
      },
      opacity: {
        15: ".15"
      },
      boxShadow: {
        focus: "0px 0px 0px 2px #ffffff",
        "focus-inset": "inset 0px 0px 0px 2px #ffffff"
      },
      brightness: {
        60: ".60",
        65: ".65",
        70: ".70",
        80: ".80",
        85: ".85"
      }
    }
  },
  plugins: []
};
