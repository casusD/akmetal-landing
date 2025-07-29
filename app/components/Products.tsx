import { FlipStyledCard, ProductProps } from './FlipStyledCard';

// Компонент Products
export function Products() {
	const products: ProductProps[] = [
		{
			name: 'Stainless steel',
			desc: 'It is resistant to corrosion and durable.',
			img: 'https://avatars.mds.yandex.net/i?id=dded65ca5bad784af0ccbd667818c691_l-6372940-images-thumbs&n=13',
			details: [
				'ASTM A487 CA15',
				'GX12Cr12 – 1.4011',
				'DIN EN 10213 GX4CrNiMo 16-5-1 – 1.4405',
				'DIN EN 10213 GX2CrNiMo 19-11-2 – 1.4409',
				'DIN EN 10213 GX5CrNiMo 19-11-2 – 1.4408',
				'DIN EN 10213 GX2CrNiMoN22-5-3 – 1.4470',
				'DIN EN 10028-7 X2CrNiMoN25-7-4 – 1.4410',
				'DIN EN 10213 GX2CrNiMoN26-7-4 – 1.4469',
				'ASTM A487 CA6NM',
				'GX4CrNi13-4 – 1.4317',
				'DIN EN 10213 GX23CrMoV12-1 – 1.4931',
				'ASTM A217 GX12CrMoVNbN9-1 C12A',
				'ASTM A351 CF3M',
				'ASTM A351 CF8M',
				'ASTM A890/A995 Grade 1A',
				'ASTM A890/A995 Grade 1B',
				'ASTM A890/A995 Grade 3A',
				'ASTM A890/A995 Grade 4A',
				'ASTM A890/A995 Grade 5A',
				'ASTM A890/A995 Grade 6A',
			],
			category: 'Stainless Steels and Heat Resistant Steels',
		},
		{
			name: 'Low-alloy steel',
			desc: 'High strength and weldability',
			img: 'https://www.cumic.com/uploads/image/20240806/16/low-alloy-steel.webp',
			details: [
				'DIN EN 10293 G10MnMoV6-3 – 1.5410',
				'DIN EN 10293 G17CrMo5-5 – 1.7357',
				'DIN EN 10293 G17CrMo9-10 – 1.7379',
				'DIN EN 10213 G17CrMoV5-10 – 1.7706',
				'DIN EN 10293 G26CrMo4 – 1.7221',
				'DIN EN 10293 G34CrMo4 – 1.7230',
				'DIN EN 10293 G42CrMo4 – 1.7231',
				'DIN EN 10293 G20Mo5 – 1.5419',
				'DIN EN 10213 G17NiCrMo13-6 – 1.6781',
				'DIN SEW 250 / EN 10340 G18NiMoCr3-6 – 1.6759',
				'SEW 520 G22NiMoCr5-6 – 1.6760',
				'Special Material GS-32NiCrMo6V',
				'DIN EN 10293 G35CrNiMo6-6 – 1.6579',
				'Special Material GS38NiCrMoV8-4-4',
				'ASTM A148 GRD 90/60',
				'ASTM A148 GRD 105/85',
			],
			category: 'Low Alloy Steels',
		},
		{
			name: 'Carbon steel',
			desc: 'Versatile and economical',
			img: 'https://cnc-detal.com/wp-content/uploads/2025/02/slide-1.jpg',
			details: [
				'DIN EN 10293 GE240 (GS45) – 1.0446',
				'DIN EN 10293 GS52 – 1.0552',
				'DIN EN 10293 GE300 (GS60) – 1.0558',
				'DIN EN 10293 G17Mn5 – 1.1131',
				'DIN EN 10293 G20Mn5 – 1.6220',
				'SEW 685 G21Mn5 – 1.1138',
				'DIN EN 10293 G24Mn6 – 1.1118',
				'DIN EN 10293 G28Mn6 – 1.1165',
				'ASTM A216 WCA',
				'ASTM A216 WCB',
				'ASTM A352 LCC',
				'ASTM A27 GRD 60/30 – 1.0420',
				'ASTM A27 GRD 70/36 – 1.0552',
			],
			category: 'Carbon Steels',
		},
		{
			name: 'Open forging',
			desc: 'Precision forgings for customized solutions',
			img: 'https://i.ytimg.com/vi/yy2PLYFjZ6w/maxresdefault.jpg',
			details: [
				'SAE 4340',
				'DIN EN 10083-1 30CrNiMo8 – 1.6580',
				'DIN EN 10084 18CrNiMo7-6 / 17CrNiMo6 – 1.6587',
				'DIN EN 10083-1 36CrNiMo4 – 1.6511',
				'DIN EN 10025 ST 52-3 – 1.0045',
				'SAE J 404 SAE8620',
				'EN 10250-3 25CrMo4 – 1.7218',
				'EN 10250-3 34CrMo4 – 1.7220',
				'EN 10250-3 42CrMo4 – 1.7225',
			],
			category: 'Open Die Forging Ingots',
		},
	];

	return (
		<section
			id='products'
			className='py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-4xl sm:text-5xl font-extrabold text-center mb-16 c tracking-tight animate-in fade-in duration-1000'>
					Materials
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map((product, i) => (
						<FlipStyledCard {...product} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
