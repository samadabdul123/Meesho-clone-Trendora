import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axios.get("https://dummyjson.com/products?limit=500");
        return res.data;
    }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data;
  }
);



const productSlice = createSlice({
    name:'products',
    initialState: {
        items: [],
        categories: [],
        loading: false,
        error: null,
        selectedProduct: null,
        selectedLoading: false,
        selectedError: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending,(state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action) => {
            state.loading = false;
            state.items = action.payload.products;
        })
        .addCase(fetchProducts.rejected,(state) => {
            state.loading = false;
            state.error = "Failed to load Products";
        })
        //single 
        .addCase(fetchProductById.pending,(state) => {
            state.selectedLoading = true;
            state.selectedError = null;
            state.selectedProduct = null;
        })
        .addCase(fetchProductById.fulfilled,(state,action) => {
            state.selectedLoading = false;
            state.selectedProduct = action.payload;
        })
        .addCase(fetchProductById.rejected,(state) => {
            state.selectedLoading = false;
            state.selectedError = "Failed to load product details";
        })
        //category
         .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
    },
});
export default productSlice.reducer;