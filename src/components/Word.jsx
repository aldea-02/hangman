function Word() {
	const guessedLetters = 'w'
	const word = 'word'
	return (
		<div className='flex gap-1 text-6xl font-bold uppercase tracking-wider sm:text-8xl'>
			{word.split('').map((letter, index) => (
				<span className='border-b-2 border-black' key={index}>
					<span
						className={
							guessedLetters.includes(letter) ? 'visible' : 'invisible'
						}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	)
}
export default Word
