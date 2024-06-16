/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/*.{js,ts,jsx,tsx,mdx}",
        "./src/*.{js,ts,jsx,tsx,mdx}",
        "./*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                burtons: 'burtons'
            }
        },
    },
    plugins: [],
}