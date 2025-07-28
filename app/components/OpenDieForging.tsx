'use client';

// import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCertificate, FaHammer } from 'react-icons/fa';

export function OpenDieForging() {
	return (
		<section
			id='open-die-forging'
			className='py-16 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden'
		>
			{/* SVG фоновый узор */}
			<div className='absolute inset-0 opacity-10'>
				<svg
					className='w-full h-full'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<pattern
						id='grid'
						width='40'
						height='40'
						patternUnits='userSpaceOnUse'
					>
						<path d='M40 0H0V40' stroke='#3b82f6' strokeWidth='1' />
					</pattern>
					<rect width='100%' height='100%' fill='url(#grid)' />
				</svg>
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Баннер-изображение */}
				<div className='mb-12 h-48 sm:h-64 md:h-80 bg-gray-700/50 rounded-xl overflow-hidden '>
					{/* Замените на реальное изображение */}
					<Image
						src='https://www.usinenouvelle.com/mediatheque/9/6/2/000717269_896x598_c.png'
						alt='Forging Department'
						width={300}
						height={100}
						className='w-full h-full object-cover'
					/>
				</div>

				{/* Заголовок */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl sm:text-5xl font-bold text-blue-400 tracking-tight flex items-center justify-center gap-3 relative'>
						Open Die Forging
					</h2>
					<div className='mt-2 h-1 w-24 bg-blue-500 mx-auto rounded-full'></div>
				</div>

				{/* Основной контент */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
					{/* Текст */}
					<div className='space-y-4 text-gray-900 text-base sm:text-lg leading-relaxed'>
						<p>
							AKMETAL’s forging department leverages a 1000 MT two-column
							pulldown oil hydraulic open die forging press and a 6 MT
							rail-bound manipulator to produce high-quality steel parts,
							including shafts, discs, and rings. Our expertise in small-series
							production with specialized shapes and materials sets us apart.
						</p>
						<p>
							Using our AOD converter, we cast high-quality steel ingots in
							weights of 2.5 tons, 4.3 tons, and 5.5 tons, tailored to specific
							shapes and sizes. Every step—from ingot pouring to forging and
							heat treatment—is certified by third-party approvals, ensuring
							top-tier quality.
						</p>
					</div>

					{/* Placeholder для изображения */}
					<div className='h-64 sm:h-80 bg-gray-700/50 rounded-xl overflow-hidden'>
						{/* Замените на реальное изображение */}
						<Image
							src='https://www.hiperoy.com/images/Banner/-517592.jpg'
							alt='Forged Steel Parts'
							width={300}
							height={100}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* Карточки характеристик */}
				<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
					{[
						{
							text: '2.5 Tons Ingot',
							icon: <FaHammer className='text-blue-400 text-2xl' />,
						},
						{
							text: '4.3 Tons Ingot',
							icon: <FaHammer className='text-blue-400 text-2xl' />,
						},
						{
							text: '5.5 Tons Ingot',
							icon: <FaHammer className='text-blue-400 text-2xl' />,
						},
					].map((item, index) => (
						<div
							key={index}
							className='p-6 bg-white rounded-xl shadow-lg transition-colors duration-300'
						>
							<div className='flex items-center gap-3 mb-2'>
								{item.icon}
								<h3 className='text-lg font-semibold text-gray-900'>
									{item.text}
								</h3>
							</div>
							<p className='text-gray-500 text-sm'>
								Tailored for precision forging of specialized shapes.
							</p>
						</div>
					))}
				</div>

				{/* Кнопка CTA */}
				<div className='text-center mt-12'>
					<a
						href='/certificates'
						className='inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 gap-2'
					>
						<FaCertificate />
						Check Out Our Certificates
					</a>
				</div>
			</div>
		</section>
	);
}
