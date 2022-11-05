import { useCallback, useEffect, useState } from 'react'
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'
import words from './words.json'

function App() {
	const [wordToGuess, setWordToGuess] = useState(
		() => words[Math.floor(Math.random() * words.length)]
	)

	const [guessedLetters, setGuessedLetters] = useState([])

	const incorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	)

	const isLoser = incorrectLetters.length >= 6
	const isWinner = wordToGuess
		.split('')
		.every((letter) => guessedLetters.includes(letter))

	const addGuessedLetter = useCallback(
		(letter) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return

			setGuessedLetters((currentLetters) => [...currentLetters, letter])
		},
		[guessedLetters, isWinner, isLoser]
	)

	useEffect(() => {
		const handler = (e) => {
			const key = e.key
			if (!key.match(/^[a-z]$/)) return

			e.preventDefault()
			addGuessedLetter(key)
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [guessedLetters, addGuessedLetter])

	return (
		<div className='container mx-auto flex min-w-[370px] flex-col items-center gap-8'>
			<div className='mt-6 text-center text-4xl'>
				{isWinner && 'You won! - Refresh to try again'}
				{isLoser && 'You lost! - Refresh to try again'}
			</div>
			<Drawing numberOfGuesses={incorrectLetters.length} />
			<Word
				reveal={isLoser}
				guessedLetters={guessedLetters}
				wordToGuess={wordToGuess}
			/>
			<div className='self-stretch'>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter((letter) =>
						wordToGuess.includes(letter)
					)}
					inactiveLetters={incorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	)
}

export default App
