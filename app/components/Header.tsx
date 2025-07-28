export function Header() {
	const sections = [
		{ name: 'Home', path: 'home' },
		{ name: 'About us', path: 'about-us' },
		{ name: 'Electric Arc Furnace & INDUCTION FURNACE', path: 'melting' },
		{ name: 'AOD Converter SECONDARY REFINING', path: 'converter' },
		{ name: 'Open Die Forging', path: 'open-die-forging' },
		{ name: 'REMELTING INGOTS', path: 'remelting-ingots' },
		{ name: 'Contacts', path: 'contacts' },
	];
	return (
		<header
			className='sticky top-10 mx-auto bg-white z-10 lg:w-11/12 md:w-full w-[98%] rounded-xl'
			style={{ boxShadow: '0 0px 10px rgba(124, 124, 124, 0.25)' }}
		>
			<div className='container mx-auto lg:px-4 py-4 flex justify-center'>
				{/* <div className='text-2xl font-bold text-gray-800'>AKMETAL</div> */}
				<nav className='mx-auto 2xl:w-11/12 lg:w-full md:w-[97%] w-[98%]'>
					<ul className='flex justify-between'>
						{sections.map(section => (
							<li key={section.name}>
								<a
									href={`#${section.path}`}
									className='text-[10px] lg:text-sm text-gray-600 text-center hover:text-blue-600 transition'
								>
									{section.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
