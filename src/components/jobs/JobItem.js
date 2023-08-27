import React from 'react';
import { useDispatch } from 'react-redux';
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
		<div
		  onClick={onClickJobHandler}
		  className={`flex w-full justify-center py-1 gap-1 ${className}`}
		>
		  <p className="w-full md:w-[60%] px-1 h-full flex flex-row justify-center items-center">
			<span
			  className="flex-1 w-fit  relative mx-auto text-center cursor-pointer text-[#1264A3] font-sans font-[0.875rem]"
			>
			  {name}
			</span>
			<span className="flex-1 flex text-center h-full text-white  items-center justify-center">
			  <span
				className={`text-center w-[129px] py-1 h-full flex justify-center items-center rounded-md ${statusClassName}`}
				style={{ backgroundColor: statusBackgroundColor }}
			  >
				{status}
			  </span>
			</span>
		  </p>
		</div>
	  </React.Fragment>
	);
};

export default JobItem;
