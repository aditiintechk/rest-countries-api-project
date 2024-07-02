export default function Detail(props) {
	const {
		flag,
		name,
		nativeName,
		population,
		region,
		subRegion,
		capital,
		topLevelDomain,
		currencies,
		languages,
	} = props

	console.log(languages)

	function renderNativeName() {
		let nativeNameArr = []
		const nativeNameKeys = Object.keys(nativeName)
		nativeNameKeys.forEach((key) => {
			const nativeNameKey = nativeName[key]
			nativeNameArr.push(nativeNameKey.common)
		})

		return nativeNameArr[0]
	}

	function renderCurrencies() {
		let currenciesArr = []
		const currenciesKeys = Object.keys(currencies)
		currenciesKeys.forEach((key) => {
			const currenciesKey = currencies[key]
			currenciesArr.push(currenciesKey.name)
		})

		return currenciesArr[0]
	}

	function renderLanguages() {
		let languagesArr = []
		const languagesKeys = Object.keys(languages)
		languagesKeys.forEach((key) => {
			const languagesKey = languages[key]
			languagesArr.push(languagesKey)
		})

		return languagesArr
	}

	return (
		<section className='content'>
			<div>
				<img className='content--img' src={flag} alt='country flag' />
			</div>
			<div>
				<h2 className='content--name'>{name}</h2>
				<div className='content--specifics'>
					<h3 className='specifics'>
						Native Name: <span>{renderNativeName()}</span>
					</h3>
					<h3 className='specifics'>
						Population: <span>{population}</span>
					</h3>
					<h3 className='specifics'>
						Region: <span>{region}</span>
					</h3>
					<h3 className='specifics'>
						Sub Region: <span>{subRegion}</span>
					</h3>
					<h3 className='specifics'>
						Capital: <span>{capital}</span>
					</h3>
					<h3 className='specifics'>
						Top Level Domain: <span>{topLevelDomain}</span>
					</h3>
					<h3 className='specifics'>
						Currencies: <span>{renderCurrencies()}</span>
					</h3>
					<h3 className='specifics'>
						Languages: <span>{renderLanguages().join(', ')}</span>
					</h3>
				</div>
				{/* <div className='border-countries'>
					<h3>
						Border Countries:
						<span>{borderCountry1}</span>
						<span>{borderCountry2}</span>
						<span>{borderCountry3}</span>
					</h3>
				</div> */}
			</div>
		</section>
	)
}
