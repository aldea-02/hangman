const HEAD = (
	<div
		key={0}
		className='absolute top-12 -right-5 h-12 w-12 rounded-full border-[6px] border-black sm:-right-7 sm:h-16 sm:w-16 sm:border-8'
	/>
)

const BODY = (
	<div
		key={1}
		className='absolute top-24 right-0 h-[86px] w-1.5 origin-center bg-black sm:top-28 sm:h-[104px] sm:w-2'
	/>
)

const RIGHT_ARM = (
	<div
		key={2}
		className='absolute top-32 -right-20 h-1.5 w-20 origin-bottom-left -rotate-[30deg] bg-black sm:top-40 sm:-right-28 sm:h-2 sm:w-28'
	/>
)

const LEFT_ARM = (
	<div
		key={3}
		className='absolute top-32 right-1 h-1.5 w-20 origin-bottom-right rotate-[30deg] bg-black sm:top-40 sm:right-2 sm:h-2 sm:w-28'
	/>
)

const RIGHT_LEG = (
	<div
		key={4}
		className='absolute top-44 -right-[90px] h-1.5 w-24 origin-bottom-left rotate-[60deg] bg-black sm:-right-[120px] sm:top-52 sm:h-2 sm:w-32'
	/>
)

const LEFT_LEG = (
	<div
		key={5}
		className='absolute top-44 right-0 h-1.5 w-24 origin-bottom-right -rotate-[60deg] bg-black sm:top-52 sm:h-2 sm:w-32'
	/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

function Drawing({ numberOfGuesses }) {
	return (
		<div className='relative'>
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div className='absolute top-0 right-0 h-12 w-1.5 bg-black sm:w-2' />
			<div className='ml-20 h-1.5 w-32 bg-black sm:ml-28 sm:h-2 sm:w-48' />
			<div className='ml-20 h-80 w-1.5 bg-black sm:ml-28 sm:h-96 sm:w-2' />
			<div className='h-1.5 w-44 bg-black sm:h-2 sm:w-60' />
		</div>
	)
}
export default Drawing
