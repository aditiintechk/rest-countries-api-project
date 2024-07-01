import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

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
		console.log('clicked on dark mode button yuhooo')
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
		</div>
	)
}

export default App
