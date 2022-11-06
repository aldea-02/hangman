import { useState } from 'react'

function Hint({
	isWinner,
	isLoser,
	wordToGuessFirstLetter,
	wordToGuessLastLetter
}) {
	const [showHint, setShowHint] = useState(false)
	return (
		<div
			className={
				isWinner || isLoser
					? 'hidden'
					: 'absolute top-6 left-2 flex flex-col bg-black p-2 text-lg text-white sm:text-2xl'
			}
		>
			<button
				onClick={() => {
					setShowHint(true)
				}}
				className={showHint ? 'hidden' : ''}
			>
				I need a hint !
			</button>
			<span className={showHint ? '' : 'hidden'}>
				First letter is {wordToGuessFirstLetter.toUpperCase()}{' '}
			</span>
			<span className={showHint ? '' : 'hidden'}>
				Last letter is {wordToGuessLastLetter.toUpperCase()}{' '}
			</span>
		</div>
	)
}
export default Hint
