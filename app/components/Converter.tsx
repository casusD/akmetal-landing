'use client';

// import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCogs, FaFire } from 'react-icons/fa';

export function Converter() {
	return (
		<section
			id='converter'
			className='py-16 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 overflow-hidden'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Заголовок с иконкой */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl sm:text-5xl font-bold text-blue-400 tracking-tight flex items-center justify-center gap-3 relative'>
						<FaFire className='text-blue-500' /> AOD Converter
					</h2>
					<div className='mt-2 h-1 w-24 bg-blue-500 mx-auto rounded-full'></div>
				</div>

				{/* Основной контент с изображением слева */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
					{/* Текст */}
					<div className='space-y-6 text-gray-900 text-lg sm:text-xl leading-relaxed relative'>
						<p>
							The AOD (Argon Oxygen Decarburization) Converter is a cornerstone
							of AKMETAL’s secondary steel processing, delivering unparalleled
							quality and precision. By enabling computerized injection of
							oxygen combined with argon and nitrogen, our AOD Converter
							efficiently decarburizes molten metal from Electric Arc or
							Induction Furnaces.
						</p>
						<p>
							The converter performs critical processes such as deoxidation
							(oxygen removal) and desulfurization (sulphur removal), producing
							the cleanest and most homogeneous steel. This ensures exceptional
							material properties, including:
						</p>
						<ul className='space-y-3'>
							{[
								{
									text: 'Low Carbon: < 0.010%',
									icon: <FaCogs className='text-blue-500' />,
								},
								{
									text: 'Low Sulphur: < 0.003%',
									icon: <FaCogs className='text-blue-500' />,
								},
								{
									text: 'Low Hydrogen: < 2 ppm',
									icon: <FaCogs className='text-blue-500' />,
								},
							].map((item, index) => (
								<li key={index} className='flex items-center gap-3'>
									{item.icon}
									<span>{item.text}</span>
								</li>
							))}
						</ul>
						<p>
							These characteristics make our specialty alloy castings ideal for
							high-demand applications in industries such as offshore, energy,
							defense, heavy-lifting, and mining.
						</p>
					</div>

					{/* Placeholder для изображения */}
					<div className='relative h-64 sm:h-80 lg:h-96 bg-gray-700/50 rounded-lg overflow-hidden'>
						{/* Замените на реальное изображение */}
						<Image
							src='https://demo.cmssuperheroes.com/themeforest/koira/wp-content/uploads/2019/08/theme-18.jpg'
							alt='AOD Converter'
							width={300}
							height={100}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* Дополнительное изображение снизу */}
				<div className='mt-12 max-w-4xl mx-auto h-48 sm:h-64 bg-gray-700/50 rounded-lg overflow-hidden'>
					{/* Замените на реальное изображение */}
					<Image
						src='https://pr6.zoon.ru/KwaGQAxLLUQOOE2AZHVT_A/2400x1500,q75/SCafnnHQ7j4TrbVAJagfzEGLkdLa-9M1oJCR85tjcdIshboGHZEUQoBn6RBOozljIw22yf173SLLQt5LWQvCEA'
						alt='Steel Facility'
						width={300}
						height={100}
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</section>
	);
}
