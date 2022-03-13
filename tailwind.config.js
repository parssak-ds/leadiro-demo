module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./node_modules/demandscience-ui/dist/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // sans: ['Sofia Pro', 'sans-serif'], // -> There are some issues with this font
      },
      colors: {
        dark: "#050237",
        primary: {
          100: "#ffe8f2",
          200: "#ffcfe4",
          300: "#ff66ac",
          400: "#FA0475",
          500: "#c9035f",
          600: "#970248",
          700: "#7d0040",
          800: "#5c0039",
          900: "#3b0030",
        },
        secondary: {
          100: "#e3d1ff",
          200: "#caa8ff",
          300: "#3C82F6",
          400: "#1C4ED8",
          500: "#1C4ED8",
          600: "#2a0080",
          700: "#1f0066",
          800: "#14004c",
          900: "#0a0032",
        },
        error: {
          400: "#F97066",
          500: "#F04438",
          600: "#970248",
        },
        warning: {
          400: "#F9C851",
          500: "#FDB022",
          600: "#DC6803",
        },
        success: {
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
