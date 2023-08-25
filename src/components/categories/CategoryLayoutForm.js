import React, { useState, useEffect } from 'react';
import ItemDetails from './ItemDetails';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';
import CategoryDetails from './CategoryDetails';
import CategoryList from './CategoryList';
import { AiOutlineSearch,AiOutlineArrowLeft } from 'react-icons/ai'; // Import the search icon

const CategoryLayoutForm = (props) => {
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);
	const [selectedCategoryDetails, setSelectedCategoryDetails] = useState(null);
	const [filterValue, setFilterValue] = useState(''); // Add filter state
	const handleFilterChange = (e) => {
		setFilterValue(e.target.value); 
		console.log(filterValue)//GET FILTERED VALUE FROM FILTER INPUT
	};
	const dispatch = useDispatch();
	const jobData = useSelector((state) =>
		state.jobData.jobs.find((job) => job.id === state.ui.selectedJobId)
	);
	const categoriesData = useSelector((state) => state.jobData.categories);

	const filteredCategories = categoriesData.filter((category) =>
		jobData.categories.includes(category.name)
	);

	const handleCategoryData = (categoryId) => {
		setSelectedCategoryId(categoryId);
	};

	useEffect(() => {
		const selectedCategory = filteredCategories.find(
			(category) => category.id === selectedCategoryId
		);
		setSelectedCategoryDetails(selectedCategory);
	}, [selectedCategoryId, filteredCategories]);

	const onCloseButtonHandler = () => {
		dispatch(uiActions.toggleCategoryForm());
	};
	const categoriesSelected = filteredCategories.map((category) => (
		<CategoryList
			key={category.id}
			id={category.id}
			name={category.name}
			handleCategory={handleCategoryData}
			isSelected={selectedCategoryId === category.id}
		/>
	));

	return (
		<>
			<div className='border-2 rounded-[0.625rem] bg-[#F4F5F6] h-[100vh] w-full flex relative flex-row '>
				<div className='border-2   w-full h-[60%] flex  flex-col xl:flex-row  items-center md:items-stretch justify-center gap-3 p-3  '>
					<div className='flex flex-col justify-between shadow-md w-fit md:w-[21.6875rem] rounded-md bg-white'>
						<div>
							<p className=' p-1 bg-[#F4F5F6] font-serif text-[#323338]'>
								262 3rd Avenue, New York
							</p>
							<ul className='w-full gap-2 flex flex-col items-center p-1 '>
								{categoriesSelected}
							</ul>
						</div>
						<div className='flex  justify-center items-center p-2'>
						<button className='w-[150px] border-0 rounded-md flex justify-center gap-1 items-center bg-[#0F5C97] p-1 text-white ' onClick={onCloseButtonHandler}><span className='flex-1 border-r border-gray-300'>Back</span>						<AiOutlineArrowLeft />
 </button>


						</div>
					</div>
					<div className='flex-1 shadow-md rounded-md  bg-white'>
						<div className='flex-1 shadow-md rounded-md bg-white'>
							<div className=' p-1 flex justify-between items-center bg-[#F4F5F6] font-serif text-[#323338]'>
								<p>Data Grid</p>
								<div className='flex justify-normal  w-fit xl:w-[492px] bg-white items-center gap-3 px-4 border-[1px] rounded-md border-[#EAEAEA]'>
									<AiOutlineSearch className='search-icon text-gray-300' />
									<input
										type='text'
										placeholder='Search Items...'
										className='search-input flex-1 p-1 focus-visible:outline-none  border-gray-300'
										value={filterValue}
										onChange={handleFilterChange}
									/>
								</div>
							</div>
							
							{selectedCategoryDetails && (
								<CategoryDetails filteredItems={filterValue} categoryId={selectedCategoryId} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CategoryLayoutForm;
