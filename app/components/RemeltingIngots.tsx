'use client';

// import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCogs, FaRecycle } from 'react-icons/fa';

export function RemeltingIngots() {
	return (
		<section
			id='remelting-ingots'
			className='py-16 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden'
		>
			{/* SVG фоновый узор */}
			<div className='absolute inset-0 opacity-5'>
				<svg
					className='w-full h-full'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<pattern
						id='diagonal'
						width='40'
						height='40'
						patternUnits='userSpaceOnUse'
					>
						<path d='M40 0L0 40' stroke='#3b82f6' strokeWidth='1' />
					</pattern>
					<rect width='100%' height='100%' fill='url(#diagonal)' />
				</svg>
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Placeholder для изображения */}
				<div className='mb-12 h-48 sm:h-64 md:h-80 bg-gray-700/50 rounded-xl overflow-hidden'>
					{/* Замените на реальное изображение */}
					<Image
						src='https://www.alcircle.com/api/media/69c8bb8b595d4a2aaaa5576a9a4f93a5_0_0.jpg'
						alt='Remelting Ingots'
						width={500}
						height={100}
						className='w-full h-full object-cover'
					/>
				</div>

				{/* Заголовок */}
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400 tracking-tight'>
					Remelting Ingots
				</h2>

				{/* Вводный текст */}
				<div className='max-w-3xl mx-auto text-center text-gray-900 text-base sm:text-lg leading-relaxed mb-12'>
					<p>
						AKMETAL excels in producing high-quality remelting ingots for
						foundries lacking the capability to create specialized steels. Our
						expertise ensures reliable, high-specification materials, making us
						the preferred choice for avoiding unexpected challenges in
						production.
					</p>
				</div>

				{/* Типы слитков (карточки) */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>
					{[
						{
							title: 'Pure Iron',
							details: [
								'C < 0.01%',
								'S < 0.003%',
								'N < 30 ppm',
								'O₂ < 100 ppm',
							],
							icon: <FaCogs className='text-blue-400 text-2xl' />,
						},
						{
							title: 'Recycling of Your Scrap',
							details: ['Carbon Reduction < 0.03%'],
							icon: <FaRecycle className='text-blue-400 text-2xl' />,
						},
						{
							title: 'Appropriate Analysis',
							details: ['Customized to your target analysis'],
							icon: <FaCogs className='text-blue-400 text-2xl' />,
						},
					].map((item, index) => (
						<div
							key={index}
							className='p-6 bg-white rounded-xl shadow-lg hover:border-blue-500 transition-all duration-300'
						>
							<div className='flex items-center gap-3 mb-3'>
								{item.icon}
								<h3 className='text-lg font-semibold text-gray-900'>
									{item.title}
								</h3>
							</div>
							<ul className='text-gray-500 text-sm space-y-2'>
								{item.details.map((detail, i) => (
									<li key={i} className='flex items-center gap-2'>
										<span className='w-2 h-2 bg-blue-500 rounded-full'></span>
										{detail}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Преимущества */}
				<div className='max-w-3xl mx-auto'>
					<h3 className='text-2xl font-semibold text-center mb-6 text-blue-400'>
						Advantages of Remelting Ingots
					</h3>
					<ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-900 text-sm'>
						{[
							'Saving of your storage area',
							'Easy handling during transportation and loading',
							'Fast delivery in case of need',
						].map((advantage, index) => (
							<li
								key={index}
								className='flex items-center p-4 bg-white rounded-lg shadow-md'
							>
								<span className='w-3 h-3 bg-blue-500 rounded-full mr-3'></span>
								{advantage}
							</li>
						))}
					</ul>
				</div>

				{/* Кнопка CTA */}
				<div className='text-center mt-12'>
					<a
						href='/contact'
						className='inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 gap-2'
					>
						<FaCogs />
						Contact Us for Custom Solutions
					</a>
				</div>
			</div>

			{/* Декоративный элемент: тонкая линия с градиентом */}
			<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-transparent'></div>
		</section>
	);
}
