import { configureStore } from '@reduxjs/toolkit';
import JobsSlice from './slices/jobsSlice.js'
import uiSlice from './slices/uiSlice.js';


 //Combine Reducers
const store = configureStore({
    reducer:{
        jobData:JobsSlice,
        ui:uiSlice
    }
})

export default store ;