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

function Keyboard() {
	return (
		<div className='grid grid-cols-keyboard gap-2 p-6'>
			{KEYS.map((key) => {
				return (
					<button
						className='aspect-square border border-black uppercase hover:bg-neutral-200 active:bg-blue-500 active:text-white disabled:opacity-30'
						key={key}
					>
						{key}
					</button>
				)
			})}
		</div>
	)
}
export default Keyboard
