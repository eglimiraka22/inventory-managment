// src/components/JobForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJobForm } from '../../store/slices/jobsSlice';
import { uiActions } from '../../store/slices/uiSlice';
import Modal from '../UI/Modal';

const JobForm = (props) => {
	const [jobName, setJobName] = useState('');

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [status, setStatus] = useState('');

	const dispatch = useDispatch();

	const categories = [
		'Category 1',
		'Category 2',
		'Category 3',
		// Add more categories as needed
	];

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	const handleCategoryChange = (e) => {
		const newSelectedCategory = e.target.value;
		if (
			newSelectedCategory &&
			!selectedCategories.includes(newSelectedCategory)
		) {
			setSelectedCategories([...selectedCategories, newSelectedCategory]);
		}
		setSelectedCategory('');
	};

	//   const filteredCategories = categories.map(category => ({
	//     ...category,
	//     notes: category.notes.filter(note =>
	//       note.content.toLowerCase().includes(searchTerm.toLowerCase())
	//     ),
	//   }));

	const handleRemoveCategory = (category) => {
		const updatedCategories = selectedCategories.filter(
			(cat) => cat !== category
		);
		setSelectedCategories(updatedCategories);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (jobName.trim() === '') {
			alert('Category Title empty'); //TODO error message
			return;
		}
		dispatch(
			addJobForm({
				jobName: jobName,
				categories: selectedCategories,
				status: status,
			})
		);

		setJobName('');
		dispatch(uiActions.toggleJobForm());
	};

	const handleCancelFormSubmit = () => {
		dispatch(uiActions.toggleJobForm());
	};

	//   border-radius: 0.3125rem;
	//   background: #F5F5F7;
	return (
		<div>
			<Modal >
				<form
					onSubmit={handleSubmit}
					className='flex flex-col justify-center items-center  gap-3 w-[100%] h-full rounded-lg border-[3px] font-serif '
				>
					<div className='w-full bg-gray-200 h-10 flex items-center'>
						<h3 className='text-left w-full'>Title</h3>
					</div>
					<div className='flex flex-col w-full px-3 py-2 bg-white'>
						<h4>
							Informative piece of text that can be used regarding this modal
						</h4>
						<div className='flex flex-col  py-2'>
							<label htmlFor='text'>Name</label>
							<input
								type='text'
								value={jobName}
								onChange={(e) => setJobName(e.target.value)}
								placeholder='Type the JobeSite Name'
								className='border-2 px-3 rounded-[0.3125rem] h-[2rem] w-full bg-gray-200 focus-visible:outline-none text-sm '
							/>
						</div>

						<div className='flex flex-row bg-white w-full justify-between py-4 gap-3'>
							<div className='w-full flex-1'>
								<label htmlFor='Category'>Category Included</label>
								<div className='p-1 w-full '>
									<div className='flex  w-full'>
										<select
											className='px-4 py-2 border rounded-md w-full'
											value={selectedCategory}
											onChange={handleCategoryChange}
										>
											<option value='' disabled hidden>
												Select
											</option>
											{categories.map((category, index) => (
												<option key={index} value={category}>
													{category}
												</option>
											))}
										</select>
									</div>
									<div className='mt-2'>
										<ul className='flex flex-row gap-2'>
											{selectedCategories.map((category, index) => (
												<li
													key={index}
													className='mb-1 cursor-pointer'
													onClick={() => handleRemoveCategory(category)}
												>
													{category}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className='flex w-[30%] flex-col'>
								<label htmlFor='Status'> Status</label>
								<div className=''>
									<div className='flex'>
										<select
											className='px-4 py-2 border rounded-md w-full'
											value={status}
											onChange={handleStatusChange}
										>
											<option value='' disabled hidden>
												Select
											</option>
											<option value='completed'>Completed</option>
											<option value='inProgress'>In Progress</option>
											<option value='onHold'>On Hold</option>
										</select>
									</div>
									<div className='mt-4'>
										<h3 className='text-md font-semibold mb-2'>
											{status || 'None'}
										</h3>
									</div>
								</div>
							</div>
						</div>
                        <div className='w-full flex justify-end gap-4 px-2 py-1'>
                            <button type='submit'>Save Changes</button>
                            <button onClick={handleCancelFormSubmit}>Discard Changes</button>

                        </div>
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default JobForm;
