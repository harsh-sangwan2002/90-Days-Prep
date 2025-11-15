import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
            console.log("Incremented:", state.count);
        },
        decrement: (state) => {
            state.count -= 1;
            console.log("Decremented:", state.count);
        },
        reset: (state) => {
            state.count = 0;
            console.log("Reset:", state.count);
        }
    },
})

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;