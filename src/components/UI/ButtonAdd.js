import React from 'react';

const ButtonAdd = (props) => {
	return (
		<div className='flex  relative items-center justify-end  w-[100%] max-w-[15.875rem] h-[2rem] p-1   flex-shrink-0 rounded-[0.3125rem] bg-[#71CF48] hover:bg-[#70da43]'>
			<button
				onClick={props.onClick}
				className='text-white    text-[0.875rem] w-full   justify-center  border-r border-[#68C142]'
			>
				{props.text}{' '}
			</button>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				color='#ffff'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 4.5v15m7.5-7.5h-15'
				/>
			</svg>
		</div>
	);
};

export default ButtonAdd;