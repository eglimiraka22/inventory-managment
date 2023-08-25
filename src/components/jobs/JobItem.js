import React ,{useState,useEffect}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';

const JobItem = ({className,name,status,id,statusClassName=''}) => {
	const dispatch = useDispatch();

    
	const onClickJobHandler = () => {
		dispatch(uiActions.toggleCategoryForm());
		dispatch(uiActions.setSelectedJob(id));
	};

    let statusBackgroundColor = '';
  if (status.toLowerCase().trim() === 'completed') {
    statusBackgroundColor = '#7AC14D';
  } else if (status.toLowerCase().trim() === 'onhold') {
    statusBackgroundColor = '#FE4C4A';
  } else if (status.toLowerCase().trim() === 'inprogress') {
    statusBackgroundColor = '#ECDE7C';
  }
      

	return (
		<React.Fragment>
			<li 
				className={`flex w-full  justify-center py-1      gap-1  ${className}`}
			>
				<p className='w-full md:w-[60%] px-1 h-full flex flex-row justify-center items-center '>
					<span
						onClick={onClickJobHandler}
						className='flex-1  text-center cursor-pointer text-[#1264A3] font-sans font-[0.875rem]'
					>
						{name}
					</span >
					<span className='flex-1 flex text-center h-[100%] text-white    justify-center'><span className={` text-center w-[129px] py-1  rounded-md ${statusClassName}`}  style={{ backgroundColor: statusBackgroundColor }}>{status}</span></span>
				</p>
			</li>
		</React.Fragment>
	);
};

export default JobItem;
