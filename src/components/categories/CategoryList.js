import React from 'react'

const CategoryList = ({id,name,handleCategory,items}) => {

  const selectCategoryHandler=() =>{

    handleCategory(id)
    console.log(id)
  }  
  return (
    <li className='w-full text-center p-1 border-2' onClick={selectCategoryHandler}>{name}</li>
  )
}

export default CategoryList