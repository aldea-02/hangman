const HEAD = (
	<div className='absolute top-12 -right-7 h-16 w-16 rounded-full border-8 border-black' />
)

const BODY = (
	<div className='absolute top-28 right-0 h-28 w-2 origin-center bg-black' />
)

const RIGHT_ARM = (
	<div className='absolute top-40 -right-28 h-2 w-28 origin-bottom-left -rotate-[30deg] bg-black' />
)

const LEFT_ARM = (
	<div className='absolute top-40 right-2 h-2 w-28 origin-bottom-right rotate-[30deg] bg-black' />
)

const RIGHT_LEG = (
	<div className='absolute top-52 -right-[120px] h-2 w-32 origin-bottom-left rotate-[60deg] bg-black' />
)

const LEFT_LEG = (
	<div className='absolute top-52 right-0 h-2 w-32 origin-bottom-right -rotate-[60deg] bg-black' />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

function Drawing() {
	return (
		<div className='relative'>
			{BODY_PARTS}
			<div className='absolute top-0 right-0 h-12 w-2 bg-black' />
			<div className='ml-28 h-2 w-48 bg-black' />
			<div className='ml-28 h-96 w-2 bg-black' />
			<div className='h-2 w-60 bg-black' />
		</div>
	)
}
export default Drawing
