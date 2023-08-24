import React from 'react'

const CategoryList = ({id,name,handleCategory}) => {

  const selectCategoryHandler=() =>{

    handleCategory(id)
    console.log(id)
  }  
  return (
    <li onClick={selectCategoryHandler}>{name}</li>
  )
}

export default CategoryList