/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.slate.700"),
            hr: {
              borderColor: theme("colors.slate.100"),
              marginTop: "3em",
              marginBottom: "3em",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
            },
            h2: {
              marginBottom: `${16 / 24}em`,
              color: theme("colors.gdgBlue"),
            },
            h3: {
              marginTop: "2.4em",
              lineHeight: "1.4",
            },
            h4: {
              marginTop: "2em",
              fontSize: "1.125em",
            },
            "h2 small, h3 small, h4 small": {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.slate.500"),
              fontWeight: 500,
            },
            "h2 small": {
              fontSize: theme("fontSize.lg")[0],
              ...theme("fontSize.lg")[1],
            },
            "h3 small": {
              fontSize: theme("fontSize.base")[0],
              ...theme("fontSize.base")[1],
            },
            "h4 small": {
              fontSize: theme("fontSize.sm")[0],
              ...theme("fontSize.sm")[1],
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },

            a: {
              fontWeight: theme("fontWeight.semibold"),
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.sky.300")}`,
            },
            "a:hover": {
              borderBottomWidth: "2px",
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: theme("colors.slate.900"),
              fontWeight: theme("fontWeight.semibold"),
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            kbd: {
              background: theme("colors.slate.100"),
              borderWidth: "1px",
              borderColor: theme("colors.slate.200"),
              padding: "0.125em 0.25em",
              color: theme("colors.slate.700"),
              fontWeight: 500,
              fontSize: "0.875em",
              fontVariantLigatures: "none",
              borderRadius: "4px",
              margin: "0 1px",
            },
            code: {
              fontWeight: theme("fontWeight.medium"),
              fontVariantLigatures: "none",
            },
            pre: {
              color: theme("colors.slate.50"),
              borderRadius: theme("borderRadius.xl"),
              padding: theme("padding.5"),
              boxShadow: theme("boxShadow.md"),
              display: "flex",
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            "p + pre": {
              marginTop: `${-4 / 14}em`,
            },
            "pre + pre": {
              marginTop: `${-16 / 14}em`,
            },
            "pre code": {
              flex: "none",
              minWidth: "100%",
            },
            table: {
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("fontSize.sm")[1].lineHeight,
            },
            thead: {
              color: theme("colors.slate.700"),
              borderBottomColor: theme("colors.slate.200"),
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: theme("fontWeight.semibold"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.slate.100"),
            },
            "tbody tr:last-child": {
              borderBottomWidth: "1px",
            },
            "tbody code": {
              fontSize: theme("fontSize.xs")[0],
            },
            "figure figcaption": {
              textAlign: "center",
              fontStyle: "italic",
            },
            "figure > figcaption": {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.slate.400"),
            "h2, h3, h4, thead th": {
              color: theme("colors.slate.200"),
            },
            "h2 small, h3 small, h4 small": {
              color: theme("colors.slate.400"),
            },
            kbd: {
              background: theme("colors.slate.700"),
              borderColor: theme("colors.slate.600"),
              color: theme("colors.slate.200"),
            },
            code: {
              color: theme("colors.slate.200"),
            },
            hr: {
              borderColor: theme("colors.slate.200"),
              opacity: "0.05",
            },
            pre: {
              boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
            },
            a: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.sky.400"),
            },
            strong: {
              color: theme("colors.slate.200"),
            },
            thead: {
              color: theme("colors.slate.300"),
              borderBottomColor: "rgb(148 163 184 / 0.2)",
            },
            "tbody tr": {
              borderBottomColor: "rgb(148 163 184 / 0.1)",
            },
            blockQuote: {
              color: theme("colors.white"),
            },
          },
        },
      }),
      colors: {
        myPrimary: "rgb(66,133,246)",
        gdgBlue: "rgb(66,133,246)",
        gdgYellow: "rgb(249,187,4)",
        gdgRed: "rgb(234,66,53)",
        gdgGreen: "rgb(16,157,88)",
      },
      animation: { blob: "blob 7s infinite" },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],

  darkMode: "class",
};
