/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: "currentColor",
    }),
    extend: {
      // Need to extend backgroundImage and use these directly instead of using "bg-[--var_name]"
      // The "bg-[--var_name]" approach does not work since tailwind treats it as a color instead of an image
      backgroundImage: {
        brand: "var(--bg-brand)",
      },
      colors: {
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        "text-primary": "var(--text-primary)",
      },
    },
  },
  plugins: [],
};
