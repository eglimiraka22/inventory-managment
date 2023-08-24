import React from 'react';

const HeaderList = ({ className = '', text }) => {
	return (
		<li
			className={
				`flex-1 text-white  flex items-center justify-center text-center   w-[100%]   h-[3.5rem]   flex-shrink-0 rounded-[0.3125rem] ` +
				className
			}
		>
			{text}
		</li>
	);
};

export default HeaderList;
