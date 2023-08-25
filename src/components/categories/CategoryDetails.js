<<<<<<< HEAD
import React from 'react';

const CategoryDetails = ({ category }) => {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold mb-2'>{category.name}</h2>
      <ul>
        {category.items.map((item) => (
          <li key={item.nr}>
            <h3 className='text-md font-medium'>{item.item}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Description: {item.description}</p>
            <p>Notes: {item.notes}</p>
=======
import React, { useState, useEffect } from 'react';
import ItemDetails from './ItemDetails';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';

const CategoryDetails = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const category = useSelector((state) =>
  state.jobData.categories.find((cate) => cate.id === categoryId)
);
  const handleItemClick = (item) => {
    setSelectedItem({ ...item, categoryId: category.id }); // Include categoryId here
    dispatch(uiActions.modifyCategoryForm());
  };

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
    }
  }, [selectedItem]);

  return (
    <div className='p-3'>
      <ul>
        <li className='flex w-full'>
          <p className='flex-1'>Nr</p>
          <p className='flex-1'>Item</p>
          <p className='flex-1'>Quantity</p>
          <p className='flex-1'> Description</p>
          <p className='flex-1'>Notes</p>
          <hr className='my-2' />
        </li>
        {category.items.map((item) => (
          <li
            key={item.nr}
            onClick={() => handleItemClick(item)}
            className={`flex w-full ${
              item.nr % 2 === 0 ? 'bg-white' : 'bg-gray-200'
            } `}
          >
            <p className='flex-1'>{item.nr}</p>
            <p className='flex-1'>{item.item}</p>
            <p className='flex-1'>{item.quantity}</p>
            <p className='flex-1'> {item.description}</p>
            <p className='flex-1'>{item.notes}</p>
>>>>>>> aac0ee7c0d344398d0ce1de32a03263625e8521b
            <hr className='my-2' />
          </li>
        ))}
      </ul>
<<<<<<< HEAD
=======
      {selectedItem && (
        <ItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
>>>>>>> aac0ee7c0d344398d0ce1de32a03263625e8521b
    </div>
  );
};

export default CategoryDetails;
