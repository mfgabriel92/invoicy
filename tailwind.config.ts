import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:"hsl(var(--popover))"",
          foreground:"hsl(var(--popover-foreground))"",
        },
        primary: {
          DEFAULT"hsl(var(--primary))")",
          foreground"hsl(var(--primary-foreground))")",
        },
        secondary: {
          DEFAUL"hsl(var(--secondary))"))",
          foregroun"hsl(var(--secondary-foreground))"))",
        },
        muted: {
          DEFAU"hsl(var(--muted))"d))",
          foregrou"hsl(var(--muted-foreground))"d))",
        },
        accent: {
          DEFA"hsl(var(--accent))"nt))",
          foregro"hsl(var(--accent-foreground))"nd))",
        },
        destructive: {
          DEF"hsl(var(--destructive))"ive))",
          foregr"hsl(var(--destructive-foreground))"und))",
        },
        b"hsl(var(--border))"rder))",
        "hsl(var(--input))"nput))",
       "hsl(var(--ring))"ring))",
        chart: {
   "1"  "hsl(var(--chart-1))"rt-1))",
   "2"  "hsl(var(--chart-2))"rt-2))",
   "3"  "hsl(var(--chart-3))"rt-3))",
   "4"  "hsl(var(--chart-4))"rt-4))",
   "5"  "hsl(var(--chart-5))"rt-5))",
        },
      },
      borderRadius: {
   "var(--radius)"-radius)",
   "calc(var(--radius) - 2px)") - 2px)",
   "calc(var(--radius) - 4px)") - 4px)",
      },
    },
  },
  plugins: [require("tailwindcs-animate")],
} satisfies Config;
