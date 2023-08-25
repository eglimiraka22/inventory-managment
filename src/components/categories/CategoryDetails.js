
import React, { useState, useEffect } from 'react';
import ItemDetails from './ItemDetails';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';

const CategoryDetails = ({ categoryId ,filteredItems}) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
	const [filtered, setFiltered] = useState([]);


  const category = useSelector((state) =>
  state.jobData.categories.find((cate) => cate.id === categoryId)
);

  
useEffect(() => {
  const filteredItem = category.items.filter((item) =>
    item.item.toLowerCase().includes(filteredItems.toLowerCase())
  );
  setFiltered(filteredItem);
}, [category.items, filteredItems]);

  const handleItemClick = (item) => {
    setSelectedItem({ ...item, categoryId: category.id }); // Include categoryId here
    dispatch(uiActions.modifyCategoryForm());
  };

console.log(filtered)

  return (
    <div className='py-2  '>
      <ul className='font-serif flex flex-col justify-start items-start'>
        <li className='flex w-full h-fit md:h-[2.5rem] justify-center items-center p-6 xl:p-1 '>
          <p className='flex w-[10%]'>Nr</p>
          <p className='flex w-[10%]'>Item</p>
          <p className='flex w-[10%] justify-center'>Quantity</p>
          <p className='flex-1 px-2'> Description</p>
          <p className='flex-1'>Notes</p>
          <hr className='my-2' />
        </li>
      
        {filteredItems? filtered.map((item) => (
          <li
            key={item.nr}
            
            className={`flex w-full h-fit  xl:h-[2rem]  justify-center items-center p-6 xl:p-1 ${
              item.nr % 2 === 0 ? 'bg-white' : 'bg-gray-200'
            } `}
          >
            <p className='flex w-[10%] ' >{item.nr} </p>
            <p className='flex w-[10%] cursor-pointer   ' onClick={() => handleItemClick(item)}>{item.item} </p>
            <p className='flex w-[10%] justify-center'>{item.quantity}</p>
            <p className='flex-1 px-2'> {item.description}</p>
            <p className='flex-1'>{item.notes}</p>
            <hr className='my-2' />
          </li>
        )): category.items.map((item) => (
          <li
            key={item.nr}
            
            className={`flex w-full h-fit  xl:h-[2.5rem] font-sans text-[16px] font-medium  justify-center items-center p-6 xl:p-1 ${
              item.nr % 2 === 0 ? 'bg-white' : 'bg-gray-200'
            } `}
          >
            <p className='flex w-[10%] ' >{item.nr} </p>
            <p className='flex w-[10%] cursor-pointer   ' onClick={() => handleItemClick(item)}>{item.item} </p>
            <p className='flex w-[10%] justify-center'>{item.quantity}</p>
            <p className='flex-1 px-2'> {item.description}</p>
            <p className='flex-1'>{item.notes}</p>
            <hr className='my-2' />
          </li>
        ))}
      </ul>
      {selectedItem && (
        <ItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default CategoryDetails;
