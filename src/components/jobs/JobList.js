import React, { useState, useEffect } from 'react';
import ButtonAdd from '../UI/ButtonAdd';
import { uiActions } from '../../store/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import JobItem from './JobItem';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reorderJobs } from '../../store/slices/jobsSlice';

const JobList = (props) => {
	const dispatch = useDispatch();
	const [filterValue, setFilterValue] = useState(''); // Add filter state
	const [filteredJobs, setFilteredJobs] = useState([]);

	const jobsData = useSelector((state) => state.jobData.jobs);
	const handleFilterChange = (e) => {
		setFilterValue(e.target.value); //GET FILTERED VALUE FROM FILTER INPUT
	};
	const onDragEnd = (result) => {
		if (!result.destination) return;

		const sourceIndex = result.source.index;
		const destinationIndex = result.destination.index;

		dispatch(reorderJobs({ sourceIndex, destinationIndex }));
	};
	useEffect(() => {
		let timer;

		if (jobsData) {
		  // Clear any previous timer
		  if (timer) {
			clearTimeout(timer);
		  }
	
		  // Set a new timer to update filtered jobs after 2 seconds
		  timer = setTimeout(() => {
			const jobs = jobsData.filter((job) =>
			  job.jobName.toLowerCase().includes(filterValue.toLowerCase())
			);
			setFilteredJobs(jobs);

		  }, 500); // 2-second delay
		}

		// Cleanup: Clear the timer if the component unmounts or dependencies change
		return () => {
		  if (timer) {
			clearTimeout(timer);

		  }
		};
	  }, [jobsData, filterValue]);

	  useEffect(() => {
		console.log(filteredJobs); // Logs the most up-to-date state
	  }, [filteredJobs]);
	// const jobsFilteredList = filteredJobs.map((jobs, index) => {       OLD SOLUTION WITHOUT REACT DND
	// 	return (
	// 		<JobItem
	// 			handleNoteSubmit={props.handleNoteSubmit}
	// 			key={jobs.id}
	// 			id={jobs.id}
	// 			name={jobs.jobName}
	// 			status={jobs.status}
	// 			isSelected={props.selectedCategoryId === jobs.id}
	// 			filterValue={filterValue}
	// 			className={index % 2 === 1 ? 'bg-white' : 'bg-gray-200'}
	// 		/>
	// 	);
	// });

	// const jobsDataLists = jobsData.map((jobs, index) => {
	// 	return (
	// 		<JobItem
	// 			handleNoteSubmit={props.handleNoteSubmit}
	// 			key={jobs.id}
	// 			id={jobs.id}
	// 			name={jobs.jobName}
	// 			status={jobs.status}
	// 			isSelected={props.selectedCategoryId === jobs.id}
	// 			filterValue={filterValue}
	// 			className={index % 2 === 1 ? 'bg-white' : 'bg-gray-200'}
	// 		/>
	// 	);
	// });
	const jobsList = filterValue ? filteredJobs : jobsData;

	const onAddJobHandler = () => {
		dispatch(uiActions.toggleJobForm());
	};
	return (
		<React.Fragment>
			<main className='w-full h-[85vh] pt-5  '>
				<div className='flex flex-col   border mx-3  shadow-xl h-full gap-3 rounded-lg'>
					<div className='flex flex-col h-full overflow-auto '>
						<div className='bg-[#F8F8FA] py-3 px-1'>
							<h3>Title</h3>
						</div>
						<div className='w-full  justify-between flex p-1'>
							<h3 className='flex-1 flex gap-2 items-center flex-row'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
									>
										<g clipPath='url(#clip0_402_466)'>
											<path
												d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 15C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V10C9 9.73478 9.10536 9.48043 9.2929 9.29289C9.48043 9.10536 9.73479 9 10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15ZM11 7H9V5H11V7Z'
												fill='#1264A3'
											/>
										</g>
										<defs>
											<clipPath id='clip0_402_466'>
												<rect width='20' height='20' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</span>{' '}
								<span>
									Informative piece of text that can be used regarding to this
									model
								</span>
							</h3>
							<div className='flex flex-1 justify-end flex-col lg:flex-row gap-2 p-2'>
								<div className='flex justify-normal w-fit lg:w-[30.6875rem] items-center px-4 border-[1px] rounded-lg border-[#EAEAEA]'>
									<AiOutlineSearch className='search-icon text-gray-300' />
									<input
										type='text'
										placeholder='Search notes...'
										className='search-input focus-visible:outline-none  border-gray-300'
										value={filterValue}
										onChange={handleFilterChange}
									/>
								</div>
								<ButtonAdd text={'Create'} onClick={onAddJobHandler} />
							</div>
						</div>
						<div className='w-full  flex flex-col justify-center         shadow-md '>
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId='job-list' direction='vertical'>
									{(provided) => (
										<ul
											{...provided.droppableProps}
											ref={provided.innerRef}
											className='w-full flex flex-col justify-evenly items-'
										>
												<li className='flex w-full   justify-center    gap-2 py-2'>
									<p className='w-full md:w-[60%]  flex flex-row justify-center font-bold'>
										<span className='flex-1 text-center'>JobSite</span>{' '}
										<span className='flex-1 text-center'>Status</span>
									</p>
								</li>
											{jobsList.map((job, index) => (
												<Draggable
													key={job.id}
													draggableId={job.id.toString()}
													index={index}
												>
													{(provided) => (
														<li
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
														>
															<JobItem
																handleNoteSubmit={props.handleNoteSubmit}
																id={job.id}
																name={job.jobName}
																status={job.status}
																isSelected={props.selectedCategoryId === job.id}
																className={
																	index % 2 === 1 ? 'bg-white' : 'bg-gray-200'
																}
															/>
														</li>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</ul>
									)}
								</Droppable>
							</DragDropContext>
						</div>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default JobList;
