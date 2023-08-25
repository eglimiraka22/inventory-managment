import React from 'react'

const CategoryList = ({id,name,handleCategory,items}) => {

  const selectCategoryHandler=() =>{

    handleCategory(id)
    console.log(id)
  }  
  return (
<<<<<<< HEAD
    <li onClick={selectCategoryHandler}>{name}     <p></p>
    </li>
=======
    <li className='w-full text-center p-1 border-2' onClick={selectCategoryHandler}>{name}</li>
>>>>>>> aac0ee7c0d344398d0ce1de32a03263625e8521b
  )
}

export default CategoryList