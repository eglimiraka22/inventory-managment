// src/components/JobForm.js
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addJobForm } from '../../store/slices/jobsSlice';
import { uiActions } from '../../store/slices/uiSlice';
import ChangesButton from '../UI/ChangesButton';

const JobForm = (props) => {
	const [jobName, setJobName] = useState('');

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [status, setStatus] = useState('completed');
    
  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');

	const dispatch = useDispatch();

	const categories = [
		'Category 1',
		'Category 2',
		'Category 3',
		// Add more categories as needed
	];


    useEffect(() => {
        if (nameError || categoryError) {
          const timer = setTimeout(() => {
            setNameError('');
            setCategoryError('');
          }, 1000);
    
          return () => clearTimeout(timer);
        }
      }, [nameError, categoryError]);
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
    let isValid = true;

    if (jobName.trim() === '') {
      setNameError('Category Title cannot be empty');
      isValid = false;
    }

    if (selectedCategories.length === 0) {
      setCategoryError('Select at least one category');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

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
		<div className='fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity'>
			<div className='fixed w-fit md:w-[54.25rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded shadow flex flex-col '>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col justify-center items-center  gap-3 w-[100%] h-full rounded-lg border-[3px] font-serif '
				>
					<div className='w-full bg-[#F8F8FA] h-10 flex items-center'>
						<div className='flex w-full p-2  flex-row justify-between items-center bg-[#F8F8FA]'>
							<h3 className='text-left font-serif w-full'>Title</h3>
							<p className='cursor-pointer' onClick={handleCancelFormSubmit}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='17'
									height='17'
									viewBox='0 0 17 17'
									fill='none'
								>
									<g clip-path='url(#clip0_429_152)'>
										<path
											d='M16.623 0.392044C16.5038 0.272491 16.3621 0.17764 16.2061 0.112922C16.0501 0.0482048 15.8829 0.0148926 15.714 0.0148926C15.5452 0.0148926 15.3779 0.0482048 15.222 0.112922C15.066 0.17764 14.9243 0.272491 14.805 0.392044L8.50504 6.68404L2.20504 0.384043C1.96242 0.155747 1.64068 0.0305081 1.30757 0.0347004C0.974461 0.0388927 0.655974 0.172189 0.419182 0.406518C0.18239 0.640848 0.0457711 0.957924 0.0380969 1.29097C0.0304226 1.62402 0.152291 1.94706 0.378039 2.19204L6.67804 8.49204L0.378039 14.792C0.135366 15.0327 -0.00175638 15.36 -0.0031629 15.7017C-0.00456942 16.0435 0.129855 16.3719 0.370539 16.6145C0.611223 16.8572 0.938451 16.9943 1.28024 16.9957C1.62202 16.9972 1.95037 16.8627 2.19304 16.622L8.49304 10.322L14.793 16.622C15.0363 16.8524 15.3598 16.9787 15.6948 16.9741C16.0297 16.9695 16.3497 16.8344 16.5865 16.5975C16.8234 16.3607 16.9585 16.0407 16.9631 15.7058C16.9677 15.3708 16.8414 15.0473 16.611 14.804L10.311 8.50404L16.611 2.20404C16.8503 1.96397 16.9857 1.63946 16.9879 1.3005C16.9902 0.961537 16.8591 0.635269 16.623 0.392044Z'
											fill='#323338'
										/>
									</g>
									<defs>
										<clipPath id='clip0_429_152'>
											<rect width='17' height='17' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</p>
						</div>
					</div>
					<div className='flex flex-col w-full p-5 bg-white'>
						<p className='flex gap-2'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
								>
									<g clip-path='url(#clip0_404_170)'>
										<path
											d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 15C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V10C9 9.73478 9.10536 9.48043 9.2929 9.29289C9.48043 9.10536 9.73479 9 10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15ZM11 7H9V5H11V7Z'
											fill='#1264A3'
										/>
									</g>
									<defs>
										<clipPath id='clip0_404_170'>
											<rect width='20' height='20' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</span>
							<span>
								Informative piece of text that can be used regarding this modal
							</span>
						</p>
						<div className='flex flex-col  py-2'>
							<label htmlFor='text' className='px-2'>
								Name
							</label>
							<input
								type='text'
								value={jobName}
								onChange={(e) => setJobName(e.target.value)}
								placeholder='Type the JobeSite Name'
								className={` ${nameError? 'border-2 border-red-500' : 'border-2'} px-3 rounded-[0.3125rem] h-[2rem] w-full bg-[#F8F8FA] focus-visible:outline-none text-sm placeholder-gray-300 `}
							/>
                                    {nameError && <p className='text-red-500 font-serif text-sm'>{nameError}</p>}

						</div>

						<div className='flex flex-row bg-white w-full justify-between py-4 gap-3'>
							<div className='w-full flex-1'>
								<label htmlFor='Category' className='px-2'>
									Category Included
								</label>
								<div className='p-1 w-full   '>
                                    
									<div className='flex flex-col  w-full '>
										<select
											className={`px-4 py-2 border  rounded-md w-full bg-[#F8F8FA]  text-gray-300 ${categoryError? 'border-red-500 border-2' : ''}`}
											value={selectedCategory}
											onChange={handleCategoryChange}
										>
											<option className='bg-gray-300' value='' disabled hidden>
												Select
											</option>
											{categories.map((category, index) => (
												<option key={index} value={category}>
												<span></span>	{category}
												</option>
											))}
										</select>
                                        {categoryError && <p className='text-red-500 font-serif text-sm'>{categoryError}</p>}

									</div>
									<div className='mt-2'>
										<ul className='flex flex-row gap-2'>
											{selectedCategories.map((category, index) => (
												<li
													key={index}
													className='mb-1  flex justify-start items-center'
												>
													{category}
													<svg
														className='cursor-pointer'
														onClick={() => handleRemoveCategory(category)}
														xmlns='http://www.w3.org/2000/svg'
														width='18'
														height='18'
														viewBox='0 0 18 18'
														fill='none'
													>
														<rect
															width='18'
															height='18'
															rx='2'
															fill='#FE4C4A'
														/>
														<path
															d='M13.7782 4.2297C13.7081 4.15906 13.6246 4.10299 13.5327 4.06473C13.4408 4.02646 13.3423 4.00677 13.2427 4.00677C13.1432 4.00677 13.0446 4.02646 12.9527 4.06473C12.8608 4.10299 12.7774 4.15906 12.7073 4.2297L8.99964 7.92954L5.29275 4.22185C5.15073 4.0798 4.95811 4 4.75727 4C4.55643 4 4.36382 4.0798 4.2218 4.22185C4.07978 4.36389 4 4.55655 4 4.75743C4 4.95832 4.07978 5.15098 4.2218 5.29302L7.9287 9.00071L4.22394 12.707C4.08193 12.849 4.00214 13.0417 4.00214 13.2426C4.00214 13.4434 4.08193 13.6361 4.22394 13.7782C4.36596 13.9202 4.55857 14 4.75941 14C4.96026 14 5.15287 13.9202 5.29489 13.7782L8.99964 10.0647L12.7073 13.7782C12.8493 13.9202 13.0419 14 13.2427 14C13.4436 14 13.6362 13.9202 13.7782 13.7782C13.9202 13.6361 14 13.4434 14 13.2426C14 13.0417 13.9202 12.849 13.7782 12.707L10.0656 8.99857L13.7782 5.29088C13.9166 5.14896 13.9941 4.95855 13.9941 4.76029C13.9941 4.56203 13.9166 4.37162 13.7782 4.2297Z'
															fill='white'
														/>
													</svg>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className='flex w-[30%] flex-col gap-1'>
								<label htmlFor='Status' className='px-2'>
									{' '}
									Status
								</label>

								<div className='flex'>
                                <select 
  className={`px-4 py-2 border rounded-md w-full focus:outline-none bg-[#F8F8FA] focus:bg-[#F8F8FA] active:bg-[#F8F8FA] 
    ${status === 'completed' ? 'bg-green-400' : status === 'inProgress' ? 'bg-yellow-200' : status === 'onHold' ? 'bg-red-300' : ''}`}
  value={status}
  onChange={handleStatusChange}
>
  <option value='completed' className='hover:bg-green-200'>
    Completed
  </option>
  <option value='inProgress' className='hover:bg-yellow-200'>
    In Progress
  </option>
  <option value='onHold' className='hover:bg-red-200'>
    On Hold
  </option>
</select>


                                    
								</div>
							</div>
						</div>
						<div className='w-full flex justify-end items-end gap-4 h-[32px]  mt-[10%]'>
							<div className='px-1 w-fit md:w-[170px] flex flex-row h-[32px]'>
								<ChangesButton text='Cancel Changes' onClick={handleCancelFormSubmit} cancelIcon={true}  className='bg-[#EB4345]' />
                                
							</div>
                            <div className='px-1 w-fit md:w-[150px] flex flex-row  h-[32px]'>
								<ChangesButton text='Save Changes' onClick={handleSubmit} cancelIcon={false} className='bg-[#68C142]' />
                                
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JobForm;
