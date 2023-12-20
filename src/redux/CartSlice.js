import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers:{
        addToCart:(state,action) => {
            const itemPresent=state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent){
                itemPresent.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart:(state,action) =>{
            const removeItem=state.cart.filter((item) => item.id !== action.payload.id);
            state.cart=removeItem;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        incrementQuantity:(state,action)=>{
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity===1){
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            }else{
                itemPresent.quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }

    }
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer