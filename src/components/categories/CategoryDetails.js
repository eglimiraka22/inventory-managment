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
            <hr className='my-2' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetails;
