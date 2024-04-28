/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vkcs.cloud',
                port: '',
            },
        ],
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/i,

            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
