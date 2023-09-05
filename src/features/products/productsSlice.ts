import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchProducts } from "./productsAPI"

export interface Product {
  name: string
  price: number
}

export interface CounterState {
  products: Product[]
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  products: [],
  status: "idle",
}

export const fetchAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts()
    return response.data
  },
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.value += action.payload
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

// export const {} = productsSlice.actions

export default productsSlice.reducer
