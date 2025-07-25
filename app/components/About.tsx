import Image from 'next/image';
import Link from 'next/link';

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
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
						{[
							{
								title: 'Offshore',
								desc: 'Marine Platforms',
								img: 'https://static.vesselfinder.net/images/media/20231222/1044-17ff2f095717cd70b79f35d65c4efa28.jpg',
							},
							{
								title: 'Mining',
								desc: 'Heavy Equipment',
								img: 'https://i.pinimg.com/originals/56/0a/3e/560a3ed1065b8abd1c577d695b3dc342.jpg',
							},
							{
								title: 'Energy',
								desc: 'Power Generation',
								img: 'https://i.pinimg.com/originals/2e/c1/b4/2ec1b41ccdd773429df9df26faa01d22.jpg',
							},
							{
								title: 'Lifting',
								desc: 'Heavy Machinery',
								img: 'https://i.ytimg.com/vi/coH3KSIyIqg/maxresdefault.jpg',
							},
							{
								title: 'Pressure Vessels',
								desc: 'Equipment & Piping',
								img: 'https://radar.gr/wp-content/uploads/2022/12/221216152021_fysiko-aerio.jpg',
							},
							{
								title: 'Paper & Pulp',
								desc: 'Process Systems',
								img: 'https://www.liga-pm.ru/upload/iblock/15f/rtgy45q7sz8qdqplvxo7g5i07pg86df2.jpeg',
							},
							{
								title: 'Engineering',
								desc: 'Industrial Design',
								img: 'https://miro.medium.com/max/1104/1*FqIAlrVzlFWYzBL0-6MaXw.png',
							},
							{
								title: 'Marine',
								desc: 'Vccionar',
								img: 'https://csaline.com/wp-content/uploads/2017/11/2105047_r1-Custom.jpg',
							},
						].map((industry, index) => (
							<div
								key={index}
								className='bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom'
							>
								<div
									className='p-6'
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<h4 className='text-xl font-semibold text-gray-800 mb-2'>
										{industry.title}
									</h4>
									<p className='text-gray-600'>{industry.desc}</p>
								</div>
								<Image
									src={industry.img}
									alt={'alt'}
									width={300}
									height={200}
									className='w-full h-50 rounded-b-xl'
								/>
							</div>
						))}
					</div>
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
