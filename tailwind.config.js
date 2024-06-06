/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/contact/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        animation: {
            bounceBall: 'spin 3s linear infinite',
            rollBall: 'spin 8s linear infinite',
            bounce: 'bounce 10s infinite',
            wiggle: 'wiggle 1s ease-in-out infinite',
        },
        keyframes: {
            bounce: { 
                '0%': {backgroundColor: 'yellow', left: '0px', top: '0px' }, 
                '7%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '10%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '11%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '22%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '33%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '66%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '99%': {backgroundColor: 'red', left: '700px', top: '100px' },
                '100%': {backgroundColor: 'red', left: '700px', top: '100px' }
            }
        },
        extend: {
            fontFamily: {
                burtons: 'burtons'
            }
        },
    },
    plugins: [],
}