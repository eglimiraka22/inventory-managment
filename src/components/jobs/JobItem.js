import React ,{useState,useEffect}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';

const JobItem = (props) => {
	const dispatch = useDispatch();

    
	const onClickJobHandler = () => {
		dispatch(uiActions.toggleCategoryForm());
		dispatch(uiActions.setSelectedJob(props.id));
	};

    


      

	return (
		<React.Fragment>
			<li
				className={`flex w-full  justify-center   py-1  gap-1  ${props.className}`}
			>
				<p className='w-full md:w-[70%] flex flex-row justify-center'>
					<span
						onClick={onClickJobHandler}
						className='flex-1 text-center cursor-pointer text-[#1264A3] font-serif font-[0.875rem]'
					>
						{props.name}
					</span>{' '}
					<span className='flex-1 text-center'>{props.status}</span>
				</p>
			</li>
		</React.Fragment>
	);
};

export default JobItem;
