import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategoryItem } from '../../store/slices/jobsSlice';
import ChangesButton from '../UI/ChangesButton';

const ItemDetails = ({ item, onClose }) => {
	const dispatch = useDispatch();
	const [modifiedItem, setModifiedItem] = useState({
		nr: item.nr,
		item: item.item, // Set initial value based on the item's properties
		quantity: item.quantity,
		description: item.description,
		notes: item.notes,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setModifiedItem((prevItem) => ({ ...prevItem, [name]: value }));
	};

	const handleSave = () => {
		// Dispatch action to update the category item
		dispatch(
			updateCategoryItem({
				categoryId: item.categoryId, // Use the categoryId from the selected item
				updatedItem: modifiedItem,
			})
		);

		// Close the modal
		onClose();
	};
	return (
		<div className='fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity'>
			<div className='fixed w-fit md:w-[54.25rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded shadow flex flex-col '>
				<div className='flex justify-around'>
					<div className='text-lg flex justify-between items-center font-semibold mb-2 w-full border-0 rounded-[0.625rem] bg-[#F8F8FA] p-3'>
						<p>Modify Item</p>{' '}
						<p className='cursor-pointer' onClick={onClose}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='17'
								height='17'
								viewBox='0 0 17 17'
								fill='none'
							>
								<g clipPath='url(#clip0_429_152)'>
									<path
										d='M16.623 0.392044C16.5038 0.272491 16.3621 0.17764 16.2061 0.112922C16.0501 0.0482048 15.8829 0.0148926 15.714 0.0148926C15.5452 0.0148926 15.3779 0.0482048 15.222 0.112922C15.066 0.17764 14.9243 0.272491 14.805 0.392044L8.50504 6.68404L2.20504 0.384043C1.96242 0.155747 1.64068 0.0305081 1.30757 0.0347004C0.974461 0.0388927 0.655974 0.172189 0.419182 0.406518C0.18239 0.640848 0.0457711 0.957924 0.0380969 1.29097C0.0304226 1.62402 0.152291 1.94706 0.378039 2.19204L6.67804 8.49204L0.378039 14.792C0.135366 15.0327 -0.00175638 15.36 -0.0031629 15.7017C-0.00456942 16.0435 0.129855 16.3719 0.370539 16.6145C0.611223 16.8572 0.938451 16.9943 1.28024 16.9957C1.62202 16.9972 1.95037 16.8627 2.19304 16.622L8.49304 10.322L14.793 16.622C15.0363 16.8524 15.3598 16.9787 15.6948 16.9741C16.0297 16.9695 16.3497 16.8344 16.5865 16.5975C16.8234 16.3607 16.9585 16.0407 16.9631 15.7058C16.9677 15.3708 16.8414 15.0473 16.611 14.804L10.311 8.50404L16.611 2.20404C16.8503 1.96397 16.9857 1.63946 16.9879 1.3005C16.9902 0.961537 16.8591 0.635269 16.623 0.392044Z'
										fill='#323338'
									/>
								</g>
								<defs>
									<clipPath id='clip0_429_152'>
										<rect width='17' height='17' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</p>
					</div>
				</div>
				<div className='flex w-full justify-around gap-2 p-4'>
					<div className='mb-2 flex-1'>
						<label className='block text-sm font-medium text-gray-700'>
							Item
						</label>
						<input
							type='text'
							name='item'
							value={modifiedItem.item}
							onChange={handleChange}
							placeholder='Search & Select Item'
							className='mt-1 p-1 border rounded w-full  bg-[#F5F5F7]'
						/>
					</div>
					<div className='mb-2 flex-1'>
						<label className='block text-sm font-medium text-gray-700'>
							Quantity
						</label>
						<input
							type='text'
							name='quantity'
							value={modifiedItem.quantity}
							onChange={handleChange}
							placeholder='Set Quantity'
							inputMode='numeric'
							className='mt-1 p-1 border rounded w-full bg-[#F5F5F7]'
							pattern='[0-9]*' // Only allows numeric input
						/>
					</div>
				</div>
				<div className='mb-2 w-full px-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Description
					</label>
					<textarea
						name='description'
						value={modifiedItem.description}
						onChange={handleChange}
						placeholder='Type the description...'
						className='mt-1 px-1 h-fit  md:h-[9rem] border rounded-lg w-full bg-[#F5F5F7] '
						style={{ resize: 'none' }}
					/>
				</div>
				<div className=' w-full px-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Notes
					</label>
					<textarea
						name='notes'
						value={modifiedItem.notes}
						onChange={handleChange}
						placeholder='Type a note...'
						className='mt-1  px-1 h-fit  md:h-[5rem] border rounded-lg w-full  bg-[#F5F5F7]'
						style={{ resize: 'none' }}
					/>
				</div>
				<div className='flex w-full items-center   justify-end px-4 py-2'>
					<div>
						<ChangesButton
							text='Save Changes'
							className='bg-[#68C142]'
							onClick={handleSave}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
