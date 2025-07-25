'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Melting() {
	return (
		<section
			id='melting'
			className='py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-hidden'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Header */}
				<motion.h2
					className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-blue-400 tracking-tight drop-shadow-md'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Melting Capabilities
				</motion.h2>

				{/* Main Content with Images */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
					{/* Text Content */}
					<motion.div
						className='space-y-6 text-lg sm:text-xl leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p>
							AKMETAL operates a state-of-the-art melting facility with a rich
							history dating back to 1972. Powered by advanced technology,
							including the only Turkish Steel Foundry equipped with an ABB
							Electric Arc Furnace, we ensure the highest quality steel
							production.
						</p>
						<p>
							Our 8-ton Electric Arc Furnace enables precise metallurgical
							reactions, such as oxygen blowing and carbon injection for
							dephosphorization, delivering superior steel quality. Since 2015,
							our 8-ton EGES Induction Furnace has doubled our melting capacity,
							enhancing efficiency and scalability.
						</p>
						<p>
							Additionally, our 3.5-ton Inductotherm and 750 kg Indemak
							Induction Furnaces provide flexibility for small and medium-sized
							products, as well as rapid prototyping, meeting diverse client
							needs with precision and speed.
						</p>
					</motion.div>

					{/* Image Placeholder */}
					<motion.div
						className='relative h-96 w-full rounded-xl overflow-hidden shadow-2xl'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Image
							src='https://a.d-cd.net/hTQAAgDb5eA-1920.jpg'
							alt='Electric Arc Furnace'
							fill
							className='object-cover'
							priority
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
							<span className='text-white font-semibold text-lg'>
								ABB Electric Arc Furnace
							</span>
						</div>
					</motion.div>
				</div>

				{/* Equipment List with Image */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<h3 className='text-2xl sm:text-3xl font-semibold text-center mb-6 text-blue-400 drop-shadow'>
							Primary Melting Shop Equipment
						</h3>
						<ul className='grid grid-cols-1 gap-4'>
							{[
								'8 MT Electric Arc Furnace',
								'8 MT Induction Furnace',
								'3.5 MT Induction Furnace',
								'8 MT Induction Holding Furnace',
								'0.75 MT Induction Furnace',
							].map((item, index) => (
								<li
									key={index}
									className='flex items-center p-4 bg-white rounded-lg shadow-md transition-colors duration-300'
								>
									<span className='w-3 h-3 bg-blue-400 rounded-full mr-3'></span>
									<span className='text-gray-900'>{item}</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Second Image Placeholder */}
					<motion.div
						className='relative h-96 w-full rounded-xl overflow-hidden shadow-2xl'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Image
							src='https://images.squarespace-cdn.com/content/v1/5d0f82e3115de80001c4070f/1561322433756-ZZW1ZNYL5BNZE9OSKSZ1/fc1.jpg'
							alt='Induction Furnace'
							fill
							className='object-cover'
							priority
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
							<span className='text-white font-semibold text-lg'>
								EGES Induction Furnace
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
