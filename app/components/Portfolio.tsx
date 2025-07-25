import Image from 'next/image';
import { useState } from 'react';
import { CertificateProps } from '../page';

// Компонент Portfolio (упрощённый)
export function Portfolio() {
	const [selectedCertificate, setSelectedCertificate] =
		useState<CertificateProps | null>(null);

	const certificates = Array.from({ length: 12 }, (_, i) => ({
		id: i + 1,
		src: `/${i + 1}.jpg`,
		alt: `Certificate ${i + 1}`,
	}));

	const openModal = (certificate: CertificateProps) => {
		setSelectedCertificate(certificate);
	};

	const closeModal = () => {
		setSelectedCertificate(null);
	};

	return (
		<section
			id='certificates'
			className='py-20 bg-gradient-to-b from-gray-50 to-gray-100'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-800 tracking-tight animate-in fade-in duration-1000'>
					Certificates
				</h2>
				<p className='text-lg sm:text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1200'>
					Our credentials and certifications
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{certificates.map((certificate, index) => (
						<div
							key={certificate.id}
							className='relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom'
							style={{ animationDelay: `${index * 100}ms` }}
							onClick={() => openModal(certificate)}
						>
							<div className='relative h-64 w-full'>
								<Image
									src={certificate.src}
									alt={certificate.alt}
									fill
									className='object-cover rounded-t-xl'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
									priority={index < 4}
								/>
							</div>
							<div className='p-4 text-center'>
								<p className='text-gray-800 font-semibold'>{certificate.alt}</p>
							</div>
						</div>
					))}
				</div>

				{/* Full-Screen Modal */}
				{selectedCertificate && (
					<div
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-500'
						onClick={closeModal}
					>
						<div className='relative max-w-4xl w-full mx-4 sm:mx-8'>
							<button
								className='absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition'
								onClick={closeModal}
							>
								&times;
							</button>
							<div className='relative w-full h-[80vh]'>
								<Image
									src={selectedCertificate.src}
									alt={selectedCertificate.alt}
									fill
									className='object-contain rounded-lg'
									sizes='100vw'
									priority
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
