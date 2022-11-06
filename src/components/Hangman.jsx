import { useCallback, useEffect, useState } from 'react'
import Drawing from './Drawing'
import Hint from './Hint'
import Keyboard from './Keyboard'
import Word from './Word'

function Hangman({ words = [''] }) {
	const getWord = () => words[Math.floor(Math.random() * words.length)]
	const [wordToGuess, setWordToGuess] = useState(getWord)
	const wordToGuessLetterArray = wordToGuess.split('')
	const wordToGuessFirstLetter = wordToGuessLetterArray[0]
	const wordToGuessLastLetter =
		wordToGuessLetterArray[wordToGuessLetterArray.length - 1]

	useEffect(() => {
		console.log(wordToGuess)
	}, [wordToGuess])

	const [guessedLetters, setGuessedLetters] = useState([])

	const incorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuessLetterArray.includes(letter)
	)

	const isLoser = incorrectLetters.length >= 6
	const isWinner = wordToGuessLetterArray.every((letter) =>
		guessedLetters.includes(letter)
	)

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

	useEffect(() => {
		const handler = (e) => {
			const key = e.key
			if (key !== 'Enter') return

			e.preventDefault()
			setGuessedLetters([])
			setWordToGuess(getWord())
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [])
	return (
		<div className='relative flex flex-col items-center gap-8'>
			<div className='mt-2 text-center text-4xl'>
				{isWinner && 'You won! - Refresh to try again'}
				{isLoser && 'You lost! - Refresh to try again'}
			</div>
			<Hint
				isWinner={isWinner}
				isLoser={isLoser}
				wordToGuessFirstLetter={wordToGuessFirstLetter}
				wordToGuessLastLetter={wordToGuessLastLetter}
			/>
			<Drawing numberOfGuesses={incorrectLetters.length} />
			<Word
				reveal={isLoser}
				guessedLetters={guessedLetters}
				wordToGuessLetterArray={wordToGuessLetterArray}
			/>
			<div className='self-stretch'>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter((letter) =>
						wordToGuessLetterArray.includes(letter)
					)}
					inactiveLetters={incorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	)
}
export default Hangman
