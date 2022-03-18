import {createSlice} from "@reduxjs/toolkit";
import {certificateData} from "../data/certificateData";


const initialState = {
    certificates: [...certificateData],
    filtered: null
}


export const certificateSlice = createSlice(
    {
        name: "certificates",
        initialState,
        reducers: {
            setData:(state)=>{
                return state.certificates;
            },


            filterByCategory: (state, {payload}) => {
                if (payload === 'all') {
                    return   state.certificates;
                } else {
                    state.filtered = [state.certificates?.filter(s => s.category === payload)];


                }
            }
        }
    }
)

export const certificateReducer = certificateSlice.reducer;
export const {filterByCategory,setData} = certificateSlice.actions