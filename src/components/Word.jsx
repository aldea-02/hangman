function Word({ guessedLetters, wordToGuessLetterArray, reveal = false }) {
	return (
		<div className='flex gap-1 text-6xl font-bold uppercase tracking-wider sm:text-8xl'>
			{wordToGuessLetterArray.map((letter, index) => (
				<span className='border-b-2 border-black' key={index}>
					<span
						className={`${
							guessedLetters.includes(letter) || reveal
								? 'visible'
								: 'invisible'
						}
						${!guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-black'}`}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	)
}
export default Word
