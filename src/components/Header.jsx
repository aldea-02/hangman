import { useEffect, useState } from 'react'
import { GrCircleQuestion, GrClose, GrMenu, GrRefresh } from 'react-icons/gr'
import useLocalStorage from 'use-local-storage'

function Header({
	setGuessedLetters,
	setWordToGuess,
	getWord,
	isWinner,
	isLoser,
	wordToGuessFirstLetter,
	wordToGuessLastLetter
}) {
	const [showHint, setShowHint] = useState(false)

	const [score, setScore] = useLocalStorage('score', 0)

	useEffect(() => {
		if (isWinner) {
			const newScore = score + 1
			setScore(newScore)
		}
		if (isLoser && score > 0) {
			const newScore = score - 1
			setScore(newScore)
		}
	}, [isWinner, isLoser])

	return (
		<div className='flex w-full items-center justify-between'>
			<div
				className={isWinner || isLoser ? 'invisible' : 'flex flex-col text-2xl'}
			>
				<GrCircleQuestion
					title='Show hint'
					onClick={() => {
						setShowHint(true)
					}}
					className={showHint ? 'invisible' : 'cursor-pointer'}
					size={28}
				/>
				<div
					className={
						showHint
							? 'absolute z-10 flex flex-col border-2 border-black bg-white p-8 '
							: 'hidden'
					}
				>
					<GrClose
						className='absolute left-1 top-1 cursor-pointer'
						onClick={() => {
							setShowHint(false)
						}}
					/>
					<span>First letter is {wordToGuessFirstLetter.toUpperCase()} </span>
					<span>Last letter is {wordToGuessLastLetter.toUpperCase()} </span>
				</div>
			</div>
			<div
				onClick={() => {
					setScore(0)
				}}
				className='-mt-1 cursor-pointer text-3xl'
			>
				Score: {score}
			</div>
			<div className='flex gap-2'>
				<GrMenu
					title='Back to menu'
					onClick={() => {
						window.location.reload()
					}}
					className='cursor-pointer'
					size={28}
				/>
				<GrRefresh
					title='New word'
					onClick={() => {
						setGuessedLetters([])
						setWordToGuess(getWord())
						setShowHint(false)
					}}
					className='cursor-pointer'
					size={28}
				/>
			</div>
		</div>
	)
}
export default Header
