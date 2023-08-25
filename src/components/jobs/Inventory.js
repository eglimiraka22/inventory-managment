import React from 'react';
import Header from '../Layout/Header';
import JobList from './JobList';
import { useSelector, useDispatch } from 'react-redux';
import JobForm from './JobForm';
import CategoryLayoutForm from '../categories/CategoryLayoutForm';

const Inventory = () => {
	const jobForm = useSelector((state) => state.ui.jobForm);
	const categoryForm = useSelector((state) => state.ui.categoryForm);
	return (
		<React.Fragment>
			{!categoryForm && (
				<div className='h-[100vh] w-full flex flex-col'>
					<Header />
                
					<JobList />
					{jobForm && <JobForm />}
				</div>
			)}

			{categoryForm && (
				<div className='h-[70vh] w-full flex'>
					<CategoryLayoutForm />
				</div>
			)}
		</React.Fragment>
	);
};

export default Inventory;
