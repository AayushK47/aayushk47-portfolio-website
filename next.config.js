/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.shields.io",
                port: "",
                pathname: "/badge/*"
            }
        ]
    }
};
