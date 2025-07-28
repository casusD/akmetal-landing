'use client';

import Image from 'next/image';

export default function Melting() {
	return (
		<section
			id='melting'
			className='py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-hidden'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl sm:text-5xl font-bold text-blue-400 tracking-tight flex items-center justify-center gap-3 relative'>
						Melting
					</h2>
					<div className='mt-2 h-1 w-24 bg-blue-500 mx-auto rounded-full'></div>
				</div>

				{/* Main Content with Images */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
					{/* Text Content */}
					<div className='space-y-6 text-lg sm:text-xl leading-relaxed'>
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
					</div>

					{/* Image Placeholder */}
					<div className='relative h-96 w-full rounded-xl overflow-hidden shadow-2xl'>
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
					</div>
				</div>

				{/* Equipment List with Image */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div>
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
					</div>

					{/* Second Image Placeholder */}
					<div className='relative h-96 w-full rounded-xl overflow-hidden shadow-2xl'>
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
					</div>
				</div>
			</div>
		</section>
	);
}
