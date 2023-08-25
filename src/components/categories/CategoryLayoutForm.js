import React, { useEffect, useState } from 'react';
<<<<<<< HEAD

import { useSelector, useDispatch } from 'react-redux';
import CategoryList from './CategoryList';
import CategoryDetails from './CategoryDetails';
const CategoryLayoutForm = () => {
	const [categorySelected, setCategorySelected] = useState(null);
    const [selectedCategoryDetails, setSelectedCategoryDetails] = useState(null);

	const jobData = useSelector((state) =>
		state.jobData.jobs.find((job) => job.id === state.ui.selectedJobId)
	);



	const categoriesData = useSelector((state) => state.jobData.categories);

=======
import { useSelector, useDispatch } from 'react-redux';
import CategoryList from './CategoryList';
import CategoryDetails from './CategoryDetails';
import { uiActions } from '../../store/slices/uiSlice';

const CategoryLayoutForm = () => {
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);
	const [selectedCategoryDetails, setSelectedCategoryDetails] = useState(null);
	const categoryForm = useSelector((state) => state.ui.categoryForm);
  const dispatch= useDispatch()
	const jobData = useSelector((state) =>
		state.jobData.jobs.find((job) => job.id === state.ui.selectedJobId)
	);
	const categoriesData = useSelector((state) => state.jobData.categories);

>>>>>>> aac0ee7c0d344398d0ce1de32a03263625e8521b
	const filteredCategories = categoriesData.filter((category) =>
		jobData.categories.includes(category.name)
	);

<<<<<<< HEAD
	console.log(filteredCategories);

	console.log(jobData);

	const handleCategoryData = (categoryId) => {
        const selectedCategory = filteredCategories.find(category => category.id === categoryId);
        setSelectedCategoryDetails(selectedCategory);
      };
      

	const categoryDetailsData = filteredCategories.filter(
		(category) => category.id === categorySelected
	);
	console.log(categoryDetailsData);


 

    



	

	

	const categoriesSelected = filteredCategories.map((category) => {
		return (
			<CategoryList
				key={category.id}
				id={category.id}
				name={category.name}
                items={category.items}
				handleCategory={handleCategoryData}
			/>
		);
	});

	return (
		<>
			<div className='border-2 h-[100vh] w-full flex relative flex-row bg-gray-100'>
				<div className='border-2 border-black w-full h-[60%] flex justify-center gap-3 p-3  '>
					<div className='flex w-[20%] rounded-md bg-white'>
						<ul className='w-full flex flex-col items-center p-1 '>
							{categoriesSelected}
						</ul>
					</div>
					<div className='flex-1 rounded-md  bg-white'>
					</div>
                    <div className='flex-1 rounded-md bg-white'>
  {selectedCategoryDetails && (
    <CategoryDetails category={selectedCategoryDetails} />
  )}
</div>

=======
	const handleCategoryData = (categoryId) => {
		setSelectedCategoryId(categoryId);
	};

	useEffect(() => {
		const selectedCategory = filteredCategories.find(
			(category) => category.id === selectedCategoryId
		);
		setSelectedCategoryDetails(selectedCategory);
	}, [selectedCategoryId, filteredCategories]);

  const onCloseButtonHandler =() =>{
    dispatch(uiActions.toggleCategoryForm());

  }
	const categoriesSelected = filteredCategories.map((category) => (
		<CategoryList
			key={category.id}
			id={category.id}
			name={category.name}
			handleCategory={handleCategoryData}
		/>
	));

	return (
		<>
			<div className='border-2 rounded-[0.625rem] bg-[#F4F5F6] h-[100vh] w-full flex relative flex-row '>
				<div className='border-2 shadow-sm border-black w-full h-[60%] flex justify-center gap-3 p-3  '>
					<div className='flex flex-col justify-between shadow-md w-fit md:w-[21.6875rem] rounded-md bg-white'>
						<div>
            <p className=' p-1 bg-[#F4F5F6] font-serif text-[#323338]'>
							262 3rd Avenue, New York
						</p>
						<ul className='w-full gap-2 flex flex-col items-center p-1 '>
							{categoriesSelected}
						</ul>
            </div>
            <button onClick={onCloseButtonHandler}>Back</button>
					</div>
					<div className='flex-1 shadow-md rounded-md  bg-white'>
						<div className='flex-1 shadow-md rounded-md bg-white'>
							{selectedCategoryDetails && (
								<CategoryDetails categoryId={selectedCategoryId} />
							)}
						</div>
					</div>
>>>>>>> aac0ee7c0d344398d0ce1de32a03263625e8521b
				</div>
			</div>
		</>
	);
};

export default CategoryLayoutForm;
