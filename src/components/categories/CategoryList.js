import React from 'react'

const CategoryList = ({id,name,handleCategory,isSelected}) => {

  const selectCategoryHandler=() =>{

    handleCategory(id)
    console.log(id)
  }  
  return (
    <>
    <li className={`w-full text-center overflow-x-auto px-2 py-2 border-0 rounded-md cursor-pointer ${!isSelected? 'bg-[#F8F8FA]' : 'bg-[#7AC14D]'}`} onClick={selectCategoryHandler}><span className={`${isSelected? 'text-white' : 'text-black'}`}>{name} </span>  </li>
    
    
    </>
  )
}

export default CategoryList