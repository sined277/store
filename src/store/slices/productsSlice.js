import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:5000/products")
            return response?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    }
)

const initialState = {
    products: [],
    status: "loading"
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state, action) => {
            state.products = []
            state.status = "loading"
        })

        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = "success"
        })

        builder.addCase(productsFetch.rejected, (state) => {
            state.products = []
            state.status = "error"
        })
    }
})

export default productsSlice.reducer