/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			verdana: ['Verdana', 'Geneva', 'sans-serif'],
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			muted: "rgb(var(--muted))",
			"muted-foreground": "rgb(var(--muted-foreground))",
			primary: "rgb(var(--primary))",
			"primary-foreground": "rgb(var(--primary-foreground))",
			border: "rgb(var(--border))",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require("tailwindcss-motion"), 
  ],
};
