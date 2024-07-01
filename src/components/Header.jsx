export default function Header() {
	return (
		<>
			<header className='header'>
				<h1 className='header--title'>Where in the world?</h1>
				<div className='header--mode'>
					<img
						className='mode__img'
						src='../../public/assets/dark-mode.svg'
						alt='white color moon symbol to represent dark mode of the website'
					/>
					<h2 className='mode__text'>Dark Mode</h2>
				</div>
			</header>
		</>
	)
}
