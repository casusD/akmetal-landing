'use client';

import Image from 'next/image';

export function Hero() {
	return (
		<section
			id='home'
			className='relative min-h-screen overflow-hidden flex items-center'
		>
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
			<Image
				src={'/97.jpg'}
				alt='image'
				width={280}
				height={100}
				className='absolute left-10 top-25 rounded-xl xl:block hidden w-[300px] h-[280px]'
			/>
			<Image
				src={'/54776401_2.jpg'}
				alt='image'
				width={350}
				height={100}
				className='absolute left-35 bottom-35  rounded-xl xl:block hidden'
			/>
			<Image
				src={'/cast-steel-foundry.jpg'}
				alt='image'
				width={350}
				height={100}
				className='absolute right-35 bottom-35 rounded-xl xl:block hidden'
			/>
			<Image
				src={'/Homepage-feature2.webp'}
				alt='image'
				width={300}
				height={100}
				className='absolute right-10 top-25 rounded-xl xl:block hidden w-[300px] h-[280px]'
			/>
			<Image
				src={'/steel-manufacturing-molten.jpg'}
				alt='image'
				width={350}
				height={100}
				className='absolute left-[50%] -translate-x-1/2 top-40 rounded-xl xl:block hidden'
			/>
		</section>
	);
}
