'use client'; // Директива для клиентского компонента

import { type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

export function Hero() {
	const [init, setInit] = useState(false);

	// Инициализация движка частиц
	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine); // Используем slim-версию для оптимизации
			setInit(true);
		}).catch(error => {
			console.error('Failed to initialize particles:', error);
		});
	}, []);

	// Настройки частиц с типизацией
	const particlesOptions: ISourceOptions = {
		particles: {
			number: { value: 80, density: { enable: true, value_area: 800 } },
			color: { value: ['#ff4500', '#ffa500', '#ffffff'] }, // Оранжевый, желтый, белый для искр
			shape: { type: 'circle' },
			opacity: {
				value: { min: 0.2, max: 0.8 },
				animation: { enable: true, speed: 3 },
			},
			size: {
				value: { min: 1, max: 4 },
				animation: { enable: true, speed: 5 },
			},
			move: {
				enable: true,
				speed: { min: 2, max: 5 },
				direction: 'bottom', // Искры падают вниз
				random: true,
				outModes: { default: 'out' },
			},
		},
		interactivity: {
			events: {
				// onHover: { enable: true, mode: 'repulse' },
				onClick: { enable: true, mode: 'push' },
			},
		},
		detectRetina: true,
	};

	return (
		<section
			id='home'
			className='relative min-h-screen overflow-hidden flex items-center'
		>
			{init && (
				<Particles
					id='tsparticles'
					options={particlesOptions}
					className='absolute inset-0 z-0'
				/>
			)}
			<div className='relative container mx-auto text-center text-gray-900'>
				<div className='mx-auto w-fit rounded-full bg-gradient-to-b from-gray-200/50 to-transparent px-6 py-3 text-lg shadow-md mb-10'>
					Welcome to AKMETAL
				</div>
				<h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 animate-in fade-in zoom-in duration-1000 leading-tight'>
					HIGH INTEGRITY{' '}
					<span className='block text-blue-400'>CASTINGS & FORGINGS</span>
				</h1>
				<p className='text-base sm:text-lg max-w-2xl mx-auto opacity-90 leading-7'>
					AKMETAL Metallurgical Industries Corp., founded in 1963 and located in
					Istanbul, Turkey, specializes in stainless, low alloy, and carbon
					steels. With three generations of expertise, we deliver advanced
					casting and forging solutions.
				</p>
			</div>
		</section>
	);
}
