import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel: React.FC = () => {
	const items = [
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
	];

	useEffect(() => {
		// Динамическая настройка стилей для активного слайда
		const updateActiveSlide = () => {
			const slides = document.querySelectorAll('.swiper-slide');
			slides.forEach(slide => {
				slide.classList.remove('active');
				if (slide.classList.contains('swiper-slide-active')) {
					slide.classList.add('active');
				}
			});
		};

		// Инициализация и обновление при смене слайда
		updateActiveSlide();
		const swiperElement = document.querySelector('.swiper') as
			| (HTMLElement & { swiper: SwiperType })
			| null;

		const swiperInstance = swiperElement?.swiper;
		if (swiperInstance) {
			swiperInstance.on('slideChange', updateActiveSlide);
		}

		return () => {
			if (swiperInstance) {
				swiperInstance.off('slideChange', updateActiveSlide);
			}
		};
	}, []);

	return (
		<div className='flex items-center justify-center font-sans'>
			<div className='relative w-full'>
				<Swiper
					modules={[Navigation, EffectCoverflow]}
					loop={true}
					centeredSlides={true}
					slidesPerView={3.5}
					spaceBetween={60}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					effect='slide'
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					className='h-full'
				>
					{items.map((item, index) => (
						<SwiperSlide
							key={index}
							className='bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 transition-all duration-300 animate-in fade-in slide-in-from-bottom'
						>
							<div
								className='p-6 h-35 xl:h-auto'
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<h4 className='lg:text-xl text-md font-semibold text-gray-800 mb-2'>
									{item.title}
								</h4>
								<p className='text-gray-600 lg:text-xl text-sm'>{item.desc}</p>
							</div>
							<Image
								src={item.img}
								alt={'alt'}
								width={400}
								height={200}
								className='w-full xl:h-50 lg:h-40 h-20 rounded-b-xl'
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='flex gap-2.5 z-10'>
					<button className='swiper-button-prev rounded-md  px-5 py-2.5 text-white text-base  transition-colors'></button>
					<button className='swiper-button-next rounded-md  px-5 py-2.5 text-white text-base transition-colors'></button>
				</div>
			</div>
			<style jsx>{`
				.swiper-slide.active {
					opacity: 1 !important;
					transform: scale(1) !important;
				}
			`}</style>
		</div>
	);
};

export default Carousel;
