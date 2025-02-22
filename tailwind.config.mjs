/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary blue
        secondary: "#F59E0B", // Custom secondary yellow
        background: "#F1F5F9", // Custom light background
        textPrimary: "#333333", // Custom dark text color
        textSecondary: "#6B7280", // Custom gray text color
      },
    },
  },
  plugins: [],
};
