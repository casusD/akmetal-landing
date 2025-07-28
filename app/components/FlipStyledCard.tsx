import { useState } from 'react';

export interface ProductProps {
	name: string;
	desc: string;
	img: string;
	details: string[];
	category: string;
}

export function FlipStyledCard(product: ProductProps) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			key={product.name}
			className={`transition-all duration-700 perspective relative md:w-[350px] 2xl:w-[350px] lg:w-[230px]  xl:w-[280px] w-[270px] h-[400px]`}
		>
			<div
				className={`relative w-full h-full transition-all duration-700 transform-style preserve-3d ${
					flipped ? 'rotate-y-180' : ''
				} z-10`}
			>
				{/* Front Side */}
				<div className='absolute w-full h-full backface-hidden flex flex-col items-center justify-start rounded-xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 overflow-hidden'>
					<div
						className={`w-full h-48 bg-cover bg-center rounded-t-xl`}
						style={{ backgroundImage: `url(${product.img})` }}
					></div>
					<div className='p-6'>
						<h3 className='text-center text-xl font-semibold mb-2 text-gray-800'>
							{product.name}
						</h3>
						<p className='text-gray-600 mb-4 text-center'>{product.desc}</p>
						<button
							onClick={() => setFlipped(true)}
							className='absolute w-8/12 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium left-1/2 -translate-x-1/2 bottom-10'
						>
							Show details
						</button>
					</div>
				</div>
				{/* Back Side */}
				<div className='absolute w-full h-full rotate-y-180 backface-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col justify-start items-start p-6 text-left overflow-y-auto'>
					<div className='mt-4 mb-6'>
						<h4 className='text-lg font-semibold text-gray-800 mb-3'>
							{product.category}
						</h4>
						<ul className='text-gray-600 text-sm space-y-2'>
							{product.details.map((detail, i) => (
								<li key={i} className='flex items-center gap-2'>
									<span className='text-blue-600'>•</span> {detail}
								</li>
							))}
						</ul>
					</div>
					<button
						onClick={() => setFlipped(false)}
						className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium'
					>
						Hide Details
					</button>
				</div>
			</div>
		</div>
	);
}
