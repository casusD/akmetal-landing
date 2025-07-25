import Link from 'next/link';
import { useState } from 'react';

// Компонент Contact
export function Contact() {
	const [hoveredContact, setHoveredContact] = useState('');

	return (
		<section
			id='contacts'
			className='py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-5xl sm:text-6xl font-extrabold text-center mb-12 bg-clip-text text-gray-800 animate-in fade-in duration-1000'>
					Contact us
				</h2>
				<p className='text-xl text-center text-gray-800 mb-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1200'>
					Our team is ready to offer you customized solutions and professional
					support for your projects.
				</p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Company Information */}
					<div className='bg-white backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-in fade-in slide-in-from-left duration-1200'>
						<h3 className='text-3xl font-bold mb-6 text-blue-400'>
							Metallurgical Industries Corp. – AKMETAL
						</h3>
						<div className='space-y-6 text-gray-300'>
							<div>
								<h4 className='text-lg font-semibold text-gray-800 mb-2'>
									Office
								</h4>
								<p className='leading-relaxed text-gray-800'>
									Tepeören Mah. Eski Ankara Asfaltı Cad.
									<br />
									No: 236, 34959
									<br />
									Tuzla‑Istanbul / Turkey
								</p>
							</div>
							<div>
								<h4 className='text-lg font-semibold text-gray-800 mb-2'>
									Contacts
								</h4>
								<p className='leading-relaxed text-gray-800'>
									<strong>Telephone:</strong>
									<br />
									<a
										href='tel:+902165930380'
										className='hover:text-blue-400 transition-colors'
									>
										+90 (216) 593 03 80
									</a>
									<br />
									<a
										href='tel:+902165930382'
										className='hover:text-blue-400 transition-colors'
									>
										+90 (216) 593 03 82
									</a>
								</p>
								<p className='mt-2 text-gray-800'>
									<strong>Email:</strong>
									<br />
									<a
										href='mailto:info@akmetal.com'
										className='hover:text-blue-400 transition-colors'
									>
										info@akmetal.com
									</a>
								</p>
							</div>
						</div>
					</div>

					{/* Sales Team */}
					<div className='space-y-6'>
						<div
							className=' backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-in fade-in slide-in-from-right duration-1200'
							onMouseEnter={() => setHoveredContact('serhat')}
							onMouseLeave={() => setHoveredContact('')}
						>
							<h4 className='text-lg font-semibold text-gray-800 mb-2'>
								Sales Manager
							</h4>
							<p className='text-gray-800'>
								<strong>B.Sc. Serhat Adışen</strong>
								<br />
								Materials Science Engineer
								<br />
								NDT Level 3 Inspector
								<br />
								<a
									href='mailto:serhat.adisen@akmetal.com'
									className='text-blue-400 hover:underline'
								>
									serhat.adisen@akmetal.com
								</a>
							</p>
							<div
								className={`mt-4 h-1 bg-blue-400 transition-all duration-300 ${
									hoveredContact === 'serhat' ? 'w-full' : 'w-0'
								}`}
							/>
						</div>
						<div
							className='backdrop-blur-lg rounded-2xl p-8 50 shadow-xl animate-in fade-in slide-in-from-right duration-1200'
							onMouseEnter={() => setHoveredContact('merve')}
							onMouseLeave={() => setHoveredContact('')}
						>
							<h4 className='text-lg font-semibold text-gray-800 mb-2'>
								Sales and Planning Engineer
							</h4>
							<p className='text-gray-800'>
								<strong>M.Sc. Merve Yangaz</strong>
								<br />
								Materials Science and Industrial Engineering Engineer
								<br />
								<a
									href='mailto:merve.yangaz@akmetal.com'
									className='text-blue-400 hover:underline'
								>
									merve.yangaz@akmetal.com
								</a>
							</p>
							<div
								className={`mt-4 h-1 bg-blue-400 transition-all duration-300 ${
									hoveredContact === 'merve' ? 'w-full' : 'w-0'
								}`}
							/>
						</div>
					</div>
				</div>

				{/* CTA Button */}
				<div className='relative text-center mt-12 animate-in fade-in slide-in-from-bottom duration-1400'>
					<Link
						href='mailto:info@akmetal.com'
						className='inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg'
					>
						Write to us
					</Link>
				</div>
			</div>
		</section>
	);
}
