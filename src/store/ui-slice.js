import {createSlice} from '@reduxjs/toolkit';

 const uiSlice =createSlice({
    name:'ui',
    initialState:{cartVisible : false},
    reducers: {
        toggle(state){
            state.cartVisible =!state.cartVisible;
        }
    }
});
export const uiActions = createSlice.actions ;

export default uiSlice;