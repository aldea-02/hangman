const KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]

function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled = false
}) {
	return (
		<div className='grid grid-cols-keyboard gap-2'>
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key)
				const isInactive = inactiveLetters.includes(key)
				return (
					<button
						onClick={() => addGuessedLetter(key)}
						className={
							isActive
								? 'bg-blue-500 text-white '
								: 'aspect-square border border-black hover:bg-neutral-200 disabled:opacity-30'
						}
						disabled={isInactive || isActive || disabled}
						key={key}
					>
						{key.toUpperCase()}
					</button>
				)
			})}
		</div>
	)
}
export default Keyboard
