import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

function App() {
	return (
		<>
			<Header />
			<Card
				name='United States of America'
				population='323,947,000'
				region='Americas'
				capital='Washington. D. C'
				flag='https://flagcdn.com/us.svg'
			/>
		</>
	)
}

export default App
