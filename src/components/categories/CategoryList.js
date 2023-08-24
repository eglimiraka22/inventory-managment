import React from 'react'

const CategoryList = ({id,name,handleCategory,items}) => {

  const selectCategoryHandler=() =>{

    handleCategory(id)
    console.log(id)
  }  
  return (
    <li onClick={selectCategoryHandler}>{name}     <p></p>
    </li>
  )
}

export default CategoryList