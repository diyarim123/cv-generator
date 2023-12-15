//import the configure store
import { configureStore } from '@reduxjs/toolkit';


//import the reducers
import containerSliceReducer from "./containerSlice";


const store = configureStore({
    reducer: {
        data_container : containerSliceReducer,
    }
})

export default store;