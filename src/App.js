import { useState } from 'react'
import Hangman from './components/Hangman'
import animals from './json/animals.json'
import carBrands from './json/car-brands.json'
import cities from './json/cities.json'
import colors from './json/colors.json'
import countries from './json/countries.json'
import deserts from './json/deserts.json'
import foodBrands from './json/food-brands.json'
import foods from './json/foods.json'
import fruits from './json/fruits.json'
import iceCreamFlavours from './json/ice-cream-flavours.json'

function App() {
	const categories = {
		animals: animals,
		cities: cities,
		'car Brands': carBrands,
		colors: colors,
		countries: countries,
		deserts: deserts,
		'food Brands': foodBrands,
		foods: foods,
		fruits: fruits,
		'ice Cream Flavours': iceCreamFlavours
	}
	const [selectedCategory, setSelectedCategory] = useState()
	const categoryHandler = (category) => {
		Object.keys(categories).forEach((key, index) => {
			if (category.target.innerHTML === key) {
				setSelectedCategory(Object.values(categories)[index])
			}
		})
	}

	return (
		<div className='container mx-auto min-w-[370px] p-4'>
			{!selectedCategory && (
				<div className='mx-auto max-w-3xl'>
					<div className='my-3 bg-black p-4 text-center text-2xl  uppercase tracking-wider text-white sm:text-4xl'>
						Choose a category
					</div>
					<div>
						{Object.keys(categories).map((category, index) => {
							return (
								<button
									onClick={categoryHandler}
									className='my-3 w-full border-2 border-black p-4 text-center text-xl uppercase tracking-wider hover:bg-neutral-200 active:bg-blue-500 active:text-white sm:text-2xl'
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
