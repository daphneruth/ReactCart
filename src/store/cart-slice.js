import { createSlice } from "@reduxjs/toolkit";
createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0,
    },
    reducers: {
       addItemToCart(state, action){

        const newItem =action.payload;
        const existingItem =state.items.find(item => item.id === newItem.id);
        if(!existingItem){
            state.items.push({
                itemId:newItem.ID,
                price:newItem.id,
                quantity:1,
                totalPrice:newItem.price,
                title:newItem.title
            }) 
        } else {

            }
        

       },
       removeItemToCart(state, action){}
    }
});