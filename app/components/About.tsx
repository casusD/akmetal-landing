import Link from 'next/link';
import Carousel from './Carusel';

// Компонент About
export function About() {
	return (
		<section
			id='about-us'
			className='py-20 bg-gradient-to-b from-gray-50 to-gray-100'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<h2 className='text-4xl sm:text-5xl font-extrabold text-center mb-16 text-blue-400 tracking-tight animate-in fade-in duration-1000'>
					About us
				</h2>

				{/* Industries We Serve */}
				<div className='mb-16'>
					<h3 className='text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 animate-in fade-in duration-1000'>
						Industries We Serve
					</h3>
					<p className='text-lg sm:text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1200'>
						Solutions for oil & gas, marine, mining, energy, pressure systems,
						and more.
					</p>

					<Carousel />
				</div>

				{/* Advanced Equipment & Technology */}
				<div>
					<h3 className='text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 animate-in fade-in duration-1000'>
						Advanced Equipment & Technology
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						<div className='p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg animate-in fade-in slide-in-from-left duration-1200'>
							<h4 className='text-xl font-semibold text-gray-800 mb-4'>
								Melting Technology
							</h4>
							<p className='text-gray-600'>
								Equipped with Electric Arc and Induction Furnaces, combined with
								a rare AOD converter process — one of the few in Europe.
							</p>
						</div>
						<div className='p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg animate-in fade-in slide-in-from-right duration-1200'>
							<h4 className='text-xl font-semibold text-gray-800 mb-4'>
								Forging Capabilities
							</h4>
							<p className='text-gray-600'>
								Precision open die forging for custom parts using a 1000-ton
								press and 6-ton manipulator.
							</p>
						</div>
					</div>
				</div>

				{/* CTA Button */}
				<div className='text-center mt-12 animate-in fade-in slide-in-from-bottom duration-1400 relative'>
					<Link
						href='#контакты'
						className='inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105'
					>
						Contact us
					</Link>
				</div>
			</div>
		</section>
	);
}
