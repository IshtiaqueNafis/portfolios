import { configureStore } from '@reduxjs/toolkit'
import {projectReducer} from "./projectSliceReducer";
import {certificateReducer} from "./certificateSliceReducer";

export const store =configureStore({
    reducer:{
        projects:projectReducer,
        certificate:certificateReducer
    }
})