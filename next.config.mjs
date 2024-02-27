/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    typescript: {
        tsconfigPath: "./tsconfig.json",
        ignoreBuildErrors: true,
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/en",
                permanent: false
            },
            {
                source: "/portfolio",
                destination: "/en/portfolio",
                permanent: false
            },
            {
                source: "/about",
                destination: "/en/about",
                permanent: false
            },
            {
                source: "/contact",
                destination: "/en/contact",
                permanent: false
            },
        ]
    },
};

export default nextConfig;