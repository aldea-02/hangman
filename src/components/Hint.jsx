import { useEffect, useState } from 'react'
import { GrCircleQuestion, GrRefresh } from 'react-icons/gr'

function Hint({
	isWinner,
	isLoser,
	wordToGuessFirstLetter,
	wordToGuessLastLetter
}) {
	const [showHint, setShowHint] = useState(false)
	const refreshHandler = () => {
		window.location.reload()
	}
	useEffect(() => {
		const handler = (e) => {
			const key = e.key
			if (key !== ' ') return

			e.preventDefault()
			setShowHint(true)
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [])
	return (
		<>
			<GrRefresh
				title='Refresh'
				onClick={refreshHandler}
				className='absolute right-0 cursor-pointer'
				size={28}
			/>
			<div
				className={
					isWinner || isLoser
						? 'hidden'
						: 'absolute left-0 flex flex-col text-lg  sm:text-2xl'
				}
			>
				<GrCircleQuestion
					title='Show Hint'
					onClick={() => {
						setShowHint(true)
					}}
					className={showHint ? 'hidden' : 'cursor-pointer'}
					size={28}
				/>
				<div className={showHint ? 'flex flex-col' : 'hidden'}>
					<span>First letter is {wordToGuessFirstLetter.toUpperCase()} </span>
					<span>Last letter is {wordToGuessLastLetter.toUpperCase()} </span>
				</div>
			</div>
		</>
	)
}
export default Hint
