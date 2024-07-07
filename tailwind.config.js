/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/*.{js,ts,jsx,tsx,mdx}",
        "./src/api/*.{js}",
        "./src/*.{js,ts,jsx,tsx,mdx}",
        "./*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        screens: {
            'xsm': '420px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                burtons: 'burtons'
            }
        },
    },
    plugins: [],
}