import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		jobForm: false,
        categoryForm: false,
        modifyCategoriesForm: false,
        selectedJobId: null
	},

	reducers: {
		toggleJobForm: (state) => {
			state.jobForm = !state.jobForm;
		},
        toggleCategoryForm: (state) => {
			state.categoryForm = !state.categoryForm;
		},
        modifyCategoryForm: (state) => {
			state.modifyCategoriesForm = !state.modifyCategoriesForm;
		},
        setSelectedJob: (state, action) => {
            state.selectedJobId = action.payload;

            console.log(action.payload);
          }
		
		
	},
});
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;