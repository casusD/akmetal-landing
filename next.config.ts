import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.vesselfinder.net' /* static.vesselfinder.net */,
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com' /* i.pinimg.com */,
			},
			{
				protocol: 'https',
				hostname: 'i.ytimg.com' /* i.ytimg.com */,
			},
			{
				protocol: 'https',
				hostname: 'radar.gr' /* radar.gr */,
			},
			{
				protocol: 'https',
				hostname: 'www.liga-pm.ru' /* www.liga-pm.ru */,
			},
			{
				protocol: 'https',
				hostname: 'miro.medium.com' /* miro.medium.com */,
			},
			{
				protocol: 'https',
				hostname: 'csaline.com' /* csaline.com */,
			},
		],
	},
};

export default nextConfig;
