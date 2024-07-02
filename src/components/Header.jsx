export default function Header(props) {
	return (
		<>
			<header className={props.lightMode ? 'header light' : 'header'}>
				<h1 className='header--title'>Where in the world?</h1>
				<div className='header--mode' onClick={props.toggleMode}>
					<img
						className='mode__img'
						src={
							props.lightMode
								? '../../public/light-mode.svg'
								: '../../public/dark-mode.svg'
						}
						alt='white color moon symbol to represent dark mode of the website'
					/>
					<h2 className='mode__text'>
						{props.lightMode ? 'Light' : 'Dark'} Mode
					</h2>
				</div>
			</header>
		</>
	)
}
