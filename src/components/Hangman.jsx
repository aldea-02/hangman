import { useCallback, useEffect, useState } from 'react'
import Drawing from './Drawing'
import Header from './Header'
import Keyboard from './Keyboard'
import Word from './Word'

function Hangman({ words = [''] }) {
	const getWord = () => words[Math.floor(Math.random() * words.length)]

	const [wordToGuess, setWordToGuess] = useState(getWord)
	const [guessedLetters, setGuessedLetters] = useState([])

	useEffect(() => {
		console.log(wordToGuess)
	}, [wordToGuess])

	const wordToGuessLetterArray = wordToGuess.split('')
	const wordToGuessFirstLetter = wordToGuessLetterArray[0]
	const wordToGuessLastLetter =
		wordToGuessLetterArray[wordToGuessLetterArray.length - 1]

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

	return (
		<div className='flex flex-col items-center gap-8'>
			<Header
				setGuessedLetters={setGuessedLetters}
				setWordToGuess={setWordToGuess}
				getWord={getWord}
				isWinner={isWinner}
				isLoser={isLoser}
				wordToGuessFirstLetter={wordToGuessFirstLetter}
				wordToGuessLastLetter={wordToGuessLastLetter}
			/>
			<div className='text-center text-4xl'>
				{isWinner && 'You won! - Refresh to try again'}
				{isLoser && 'You lost! - Refresh to try again'}
			</div>
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
