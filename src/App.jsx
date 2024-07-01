import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

function App() {
	const [cardCollection, setCardCollection] = useState([])

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((response) => response.json())
			.then((data) => setCardCollection(data))
	}, [])

	function sortedCards() {
		let sortedCardsCollection = cardCollection.sort((a, b) =>
			a.name.common > b.name.common
				? 1
				: a.name.common < b.name.common
				? -1
				: 0
		)
		return sortedCardsCollection
	}

	console.log(cardCollection.length && sortedCards())

	const cardElements = cardCollection.map((eachCard) => (
		<Card
			key={eachCard.ccn3}
			name={eachCard.name.common}
			population={eachCard.population}
			region={eachCard.region}
			capital={eachCard.capital}
			flag={eachCard.flags.svg}
		/>
	))

	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<section className='card-section'>{cardElements}</section>
			</main>
		</div>
	)
}

export default App
