'use client';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Converter } from './components/Converter';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Melting from './components/Melting';
import { OpenDieForging } from './components/OpenDieForging';
import { Portfolio } from './components/Portfolio';
import { Products } from './components/Products';
import { RemeltingIngots } from './components/RemeltingIngots';

export interface CertificateProps {
	id: number;
	src: string;
	alt: string;
}

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Products />
				<Portfolio />
				<Melting />
				<Converter />
				<OpenDieForging />
				<RemeltingIngots />
				<Contact />
			</main>
			<footer className='py-6 flex justify-between px-15 text-gray-600'>
				<h2>AKMETAL</h2>
				<p>© 2025 AKMETAL. All rights reserved.</p>
			</footer>
		</>
	);
}
