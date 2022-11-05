function Word() {
	const word = 'word'
	return (
		<div className='flex gap-1 text-8xl font-bold uppercase tracking-wider'>
			{word.split('').map((letter, index) => (
				<span className='border-b-2 border-black' key={index}>
					<span>{letter}</span>
				</span>
			))}
		</div>
	)
}
export default Word
