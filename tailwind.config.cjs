// tailwind.config.cjs
module.exports = {
    mode: "jit",
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                accent: '#3D8FF6',
                body: "#10254E"
            }
        }
    }
};
