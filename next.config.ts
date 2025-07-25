import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.vesselfinder.net',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
			},
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
			},
			{
				protocol: 'https',
				hostname: 'radar.gr',
			},
			{
				protocol: 'https',
				hostname: 'www.liga-pm.ru',
			},
			{
				protocol: 'https',
				hostname: 'miro.medium.com',
			},
			{
				protocol: 'https',
				hostname: 'csaline.com',
			},
			{
				protocol: 'https',
				hostname: 'a.d-cd.net',
			},
			{
				protocol: 'https',
				hostname: 'images.squarespace-cdn.com',
			},
			{
				protocol: 'https',
				hostname: 'demo.cmssuperheroes.com',
			},
			{
				protocol: 'https',
				hostname: 'pr6.zoon.ru',
			},
			{
				protocol: 'https',
				hostname: 'www.usinenouvelle.com',
			},
			{
				protocol: 'https',
				hostname: 'www.hiperoy.com',
			},
			{
				protocol: 'https',
				hostname: 'www.alcircle.com',
			},
		],
	},
};

export default nextConfig;
