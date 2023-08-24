import { createSlice } from '@reduxjs/toolkit';
import { categoriesData } from '../../data/categoriesData';

const loadState = ()=>{
	try {
		const serializedState = localStorage.getItem('Jobs')
		if (serializedState===null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
		
	}
}

// Save Data to  LocalStorage

const saveState = state =>{
	try {
		const serializedState=JSON.stringify(state)
		localStorage.setItem('Jobs' , serializedState)
	} catch (err) {
		//errors to handle
	}
}

const initialState =  {
    jobs: loadState()?.jobs || [
        
    ],
    categories: categoriesData,

    

}


const JobsSlice = createSlice({

    name: 'jobs',
    initialState,
    reducers: {

        addJobForm: (state, action) => {
            const {jobName,categories,status} = action.payload

            state.jobs.push({
                id:Date.now(),
                jobName,
                categories,
                status
            })
            console.log(action.payload)
            saveState(state)

        }
    }
})


export const {
    addJobForm
  } = JobsSlice.actions; 

export default JobsSlice.reducer;