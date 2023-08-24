import React, { useEffect, useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import CategoryList from './CategoryList';
const CategoryLayoutForm = () => {

    const [categorySelected,setCategorySelected] = useState(null)
    const [categoryDetails,setCategoryDetails] = useState(null)

const jobData =useSelector((state)=>state.jobData.jobs.find(job=>job.id === state.ui.selectedJobId))

const categoriesData = useSelector(state => state.jobData.categories);

const filteredCategories = categoriesData.filter(category =>
    jobData.categories.includes(category.name)
  );

console.log(filteredCategories)

console.log(jobData)


const handleCategoryData =(categoryId)=>{

setCategorySelected(categoryId);
const categoryDetailsData= filteredCategories.filter(category=>category.id === categorySelected)
console.log(categoryDetailsData)


}







const categoriesSelected=filteredCategories.map(category=>{
    return(
        <CategoryList key={category.id} id={category.id} name={category.name} handleCategory={handleCategoryData} />
    )
})


  return (
    <>
    <div className='border-2 h-[100vh] w-full flex relative flex-row bg-gray-100'>
        <div className='border-2 border-black w-full h-[60%] flex justify-center gap-3 p-3  '>
        <div className='flex w-[20%] rounded-md bg-white'><ul className='w-full flex flex-col items-center p-1 '>{categoriesSelected}</ul></div>
        <div className='flex-1 rounded-md  bg-white'> <ul>
            <li></li></ul></div>
        </div>
        </div></>
  )
}

export default CategoryLayoutForm