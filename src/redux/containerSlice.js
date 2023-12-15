import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    personal_data : {},
    experience_data: {},
    project_data: {},
    education_data: {},
    miscellaneous_data: {},
    color_data: ""
}

const containerSlice = createSlice({
    name : "personal_data",
    initialState : initialState,
    reducers : {
        setPersonalData : (state, action) => {
            state.personal_data = action.payload;
        },
        setExperienceData : (state, action) => {
            state.experience_data = action.payload;
        },
        setProjectData : (state, action) => {
            state.project_data = action.payload
        },
        setEducationData : (state, action) => {
            state.education_data = action.payload
        },
        setMiscellaneousData: (state, action) => {
            state.miscellaneous_data = action.payload
        },
        setColorData : (state, action) => {
            state.color_data = action.payload
        }
    }
})


export const { setPersonalData, setExperienceData, setProjectData, setEducationData, setMiscellaneousData, setColorData } = containerSlice.actions;
export default containerSlice.reducer;