import {createSlice} from "@reduxjs/toolkit";
import {personalProjects, schoolProjects} from "../data/projectData";

const initialState = {
    schoolProjects,
    personalProjects
}


export const projectSlice = createSlice({
    name: "Projects",
    initialState,
    reducers:{}
})

export const projectReducer = projectSlice.reducer;