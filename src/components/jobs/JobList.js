import React from 'react';
import ButtonAdd from '../UI/ButtonAdd';
import { uiActions } from '../../store/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import JobItem from './JobItem';

const JobList = (props) => {
	const dispatch = useDispatch();

	const jobsData = useSelector((state) => state.jobData.jobs);

	console.log(jobsData);

    const jobsDataLists = jobsData.map((jobs,index) => {
		return (
			<JobItem 
				handleNoteSubmit={props.handleNoteSubmit}
				key={jobs.id}
				id={jobs.id}
				name={jobs.jobName}
                status={jobs.status}
				isSelected={props.selectedCategoryId===jobs.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200' }
			/>
		);
	});

	const onAddJobHandler = () => {
		dispatch(uiActions.toggleJobForm());
	};
	return (
		<React.Fragment>
			<main className='w-full h-[90vh]  '>
				<div className='flex flex-col mx-3 p-2 h-full gap-3'>
					<div>
						<h3>Title</h3>
					</div>
					<div className='w-full  justify-between flex p-2'>
						<h3 className='flex-1'>
							Informative piece of text that can be used regarding to this model
						</h3>
						<ButtonAdd text={'Create'} onClick={onAddJobHandler} />
					</div>
					<div className='w-full  flex flex-col justify-center '>
                        <p className='flex w-full justify-evenly gap-10 p-1'><span>JobSite</span> <span>Status</span></p>

						<ul className=' w-full flex flex-col justify-evenly  items-center'>

                            {jobsDataLists}
                            
                            </ul>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default JobList;
