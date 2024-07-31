import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFruits } from "./fruitService";

const fruitSlice = createSlice({
    name : "fruits",
    initialState:{
        game:[] ,
        isLoading:false,
        isSuccess:false,
        isError:false,
        
    },
    reducers:{

        
    },

    extraReducers:(buider) =>{
    
        buider
        .addCase(getFruits.pending , (state , action)=>{
         state.isLoading  = true
         state.isSuccess =false
         state.isError = false
        })

        .addCase(getFruits.fulfilled , (state , action)=>{
            state.isLoading  = false
            state.isSuccess =true
            state.game = action.payload
            state.isError = false
           })

           .addCase(getFruits.rejected , (state , action)=>{
            state.isLoading  = false
            state.isSuccess =false
            state.isError = true
           })

    },
})


export const { cart} = fruitSlice.actions
export default fruitSlice.reducer


export const getFruits = createAsyncThunk("FETCH/FRUITS" , async()=>{
    try {
        return await fetchFruits()
    } catch (error) {
        
    }
})