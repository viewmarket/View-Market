/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "viewmarket.assets.com" }],
	},
};

module.exports = nextConfig;
