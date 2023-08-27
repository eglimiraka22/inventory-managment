import { createSlice } from '@reduxjs/toolkit';
import { categoriesData } from '../../data/categoriesData';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('Jobs');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

// Save Data to  LocalStorage

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('Jobs', serializedState);
	} catch (err) {
		//errors to handle
	}
};

const initialState = {
	jobs: loadState()?.jobs || [],
	categories: categoriesData,
};

const JobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		addJobForm: (state, action) => {
			const { jobName, categories, status } = action.payload;

			state.jobs.push({
				id: Date.now(),
				jobName,
				categories,
				status,
			});
			console.log(action.payload);
			saveState(state);
		},
		updateCategoryItem: (state, action) => {
			const { categoryId, updatedItem } = action.payload;
			const categoryToUpdate = state.categories.find(
				(cate) => cate.id === categoryId
			);

			if (categoryToUpdate) {
				console.log('Pass');
				const existingItemIndex = categoryToUpdate.items.findIndex(
					(items) => items.nr === updatedItem.nr
				);

				if (existingItemIndex !== -1) {
					// Update existing item's content
					categoryToUpdate.items[existingItemIndex] = updatedItem;
				}
			}

			console.log('Test', updatedItem);
		},
		reorderJobs: (state, action) => {
			const { sourceIndex, destinationIndex } = action.payload;
			console.log(action.payload);
			const updatedJobs = [...state.jobs];

			const [movedJob] = updatedJobs.splice(sourceIndex, 1); //On the Index Source remove 1 item(Item itself)
			updatedJobs.splice(destinationIndex, 0, movedJob); // On the Destination Index don't remove any Item (0) But add The Dragged Item from sourceIndex and push the others

			state.jobs = updatedJobs;
			saveState(state);
		},
	},
});

export const { addJobForm, updateCategoryItem, reorderJobs } =
	JobsSlice.actions;

export default JobsSlice.reducer;
