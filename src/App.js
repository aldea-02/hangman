import { useState } from 'react'
import Hangman from './components/Hangman'
import animals from './json/animals.json'
import colors from './json/colors.json'
import countries from './json/countries.json'

function App() {
	const [selectedCategory, setSelectedCategory] = useState()
	const categoryHandler = (category) => {
		switch (category.target.innerHTML) {
			case 'animals':
				setSelectedCategory(animals)
				break
			case 'colors':
				setSelectedCategory(colors)
				break
			case 'countries':
				setSelectedCategory(countries)
				break
			default:
				break
		}
	}

	return (
		<div className='container mx-auto min-w-[370px] p-4'>
			{!selectedCategory && (
				<div className='mx-auto max-w-3xl'>
					<div className='my-3 bg-black p-4 text-center text-2xl  uppercase tracking-wider text-white sm:text-4xl'>
						Choose a category
					</div>
					<div>
						{['animals', 'colors', 'countries'].map((category, index) => {
							return (
								<button
									onClick={categoryHandler}
									className='my-3 w-full border-2 border-black p-4 text-center text-xl uppercase tracking-wider hover:bg-neutral-200 sm:text-2xl'
									key={index}
								>
									{category}
								</button>
							)
						})}
					</div>
				</div>
			)}
			{selectedCategory && <Hangman words={selectedCategory} />}
		</div>
	)
}
export default App
