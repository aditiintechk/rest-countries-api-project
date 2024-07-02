export default function Header(props) {
	return (
		<>
			<header className={props.lightMode ? 'header light' : 'header'}>
				<h1 className='header--title'>Where in the world?</h1>
				<div className='header--mode' onClick={props.toggleMode}>
					<h2 className='mode__text'>
						{props.lightMode ? 'Light' : 'Dark'} Mode
					</h2>
				</div>
			</header>
		</>
	)
}
