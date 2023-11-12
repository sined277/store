import {configureStore} from "@reduxjs/toolkit"
import productsSlice from "./slices/productsSlice"
import { productsApi } from "./slices/productsApi"
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
    },
})