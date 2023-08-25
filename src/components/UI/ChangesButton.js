import React from 'react';

const ChangesButton = ({ className = '', onClick, text,cancelIcon }) => {
	return (
		<div
			className={
				`flex flex-1  relative items-center justify-end   w-[100%]   h-[2rem] px-2   flex-shrink-0 rounded-[0.3125rem] ` +
				className
			}
		>
			<button
				onClick={onClick}
				className='text-white flex-1  px-2   text-[0.875rem] w-full  h-full  justify-center  border-r border-gray-400 '
			>
				{text}
			</button>
			{!cancelIcon ? <svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				color='white'
				viewBox='0 0 18 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4.5 12.75l6 6 9-13.5'
				/>
			</svg> : <svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
                            color='white'
							viewBox='0 0 18 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>}
		</div>
	);
};

export default ChangesButton;
