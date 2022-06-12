/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            fontFamily: {
                sen: ["Sen", "sans-serif"],
            },
            colors: {
                grayPrimary: "#696262",
                graySecondary: "#C8BDBD",
                redPrimary: "#FD5056",
                brown: "#280C0C",
            },
            backgroundImage: {
                hero: "linear-gradient(20deg,  var(--color-redLinear),var(--color-white))",
            },
        },
    },
    plugins: [],
};
