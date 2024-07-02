import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Detail from './components/Detail.jsx'

function App() {
	const [cardCollection, setCardCollection] = useState([])
	const [lightMode, setLightMode] = useState(false)

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((response) => response.json())
			.then((data) => setCardCollection(data))
	}, [])

	function sortedCards() {
		cardCollection.sort((a, b) =>
			a.name.common > b.name.common
				? 1
				: a.name.common < b.name.common
				? -1
				: 0
		)
	}

	sortedCards()

	function toggleMode() {
		setLightMode((prevMode) => !prevMode)
	}

	const cardElements = cardCollection.map((eachCard) => (
		<Card
			key={eachCard.alpha3Code}
			name={eachCard.name.common}
			population={Intl.NumberFormat('en-US').format(eachCard.population)}
			region={eachCard.region}
			capital={eachCard.capital}
			flag={eachCard.flags.svg}
			lightMode={lightMode}
		/>
	))

	return (
		<div className='container'>
			<Header lightMode={lightMode} toggleMode={toggleMode} />
			<main className={lightMode ? 'main light' : 'main'}>
				<section className='card-section'>{cardElements}</section>
			</main>

			{/* <div className={lightMode ? 'main light' : 'main'}>
				<section className='back'>
					<button className='back-btn'>⬅ Back</button>
				</section>
				{cardCollection.length && (
					<Detail
						flag={cardCollection[0].flags.svg}
						name={cardCollection[0].name.common}
						nativeName={cardCollection[0].name.nativeName}
						population={cardCollection[0].population}
						region={cardCollection[0].region}
						subRegion={cardCollection[0].subregion}
						capital={cardCollection[0].capital}
						topLevelDomain={cardCollection[0].tld}
						currencies={cardCollection[0].currencies}
						languages={cardCollection[0].languages}
					/>
				)}
			</div> */}
		</div>
	)
}

export default App
