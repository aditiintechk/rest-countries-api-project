export default function Card(props) {
	const { name, population, region, capital, flag } = props
	return (
		<section className='card'>
			<img src={flag} alt={`flag of ${name}`} className='card--img' />
			<div className='card--details'>
				<h2 className='card__name'>{name}</h2>
				<h3 className='specifics card__population'>
					Population: <span>{population}</span>
				</h3>
				<h3 className='specifics card__region'>
					Region: <span> {region} </span>
				</h3>
				<h3 className='specifics card__capital'>
					Capital: <span>{capital}</span>
				</h3>
			</div>
		</section>
	)
}
