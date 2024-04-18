import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                primary: "#082E4E",
                dark: "#0E273C",
                info: "#D4EAE9",
                highlight: "#EAB41E",
                muted: "#A0A7A5",
                light: "#FFFFFF"
            }
        }
    },
    plugins: []
};
export default config;
