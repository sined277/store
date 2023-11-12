import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalPrice: 0,
    productsQuantity: 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            const findItem = state.cartItems.find((product) => product.id === itemToAdd.id);

            if (!findItem) {
                // If the item is not already in the cart, add it with a count of 1
                state.cartItems.push({ ...itemToAdd, count: 1 });
                toast.success("Products was added to cart", {
                    position: "bottom-right"
                })
            } else {
                // If the item is already in the cart, increment its count
                findItem.count++;
                toast.info("Products quantity was incremented", {
                    position: "bottom-right"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            state.totalPrice = state.cartItems.reduce((sum, phone) => {
                return sum + (phone.price * phone.count)
            }, 0)

            state.productsQuantity = state.cartItems.length
        },

        removeProduct: (state, action) => {
            const itemToDelete = action.payload
            const findItem = state.cartItems.find((product) => {
                return product.id === itemToDelete
            })

            state.cartItems = state.cartItems.filter((product) => {
                return product.id !== findItem.id
            })

            state.totalPrice = state.cartItems.reduce((sum, phone) => {
                return sum + (phone.price * phone.count)
            }, 0)

            state.productsQuantity = state.cartItems.length
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        clearCart: (state) => {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            state.totalPrice = 0
            state.productsQuantity = 0
        },

        plusCount: (state, action) => {
            const item = state.cartItems.find((product) => {
                return product.id === action.payload
            })

            if (item) {
                item.count++
            }

            state.totalPrice = state.cartItems.reduce((sum, phone) => {
                return sum + (phone.price * phone.count)
            }, 0)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        minusCount: (state, action) => {
            const item = state.cartItems.find((product) => {
                return product.id === action.payload
            })

            if (item && item.count > 1) {
                item.count--
            } else {
                state.cartItems = state.cartItems.filter((product) => {
                    return product.id !== item.id
                })
            }

            state.totalPrice = state.cartItems.reduce((sum, phone) => {
                return sum + (phone.price * phone.count)
            }, 0)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.productsQuantity = state.cartItems.length
        },
    },
})

export const { addToCart, clearCart, removeProduct, plusCount, minusCount } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectProductsQuantity = (state) => state.cart.productsQuantity;

export default cartSlice.reducer