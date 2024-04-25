import { createSlice } from "@reduxjs/toolkit";

export const naikTurunSlide = createSlice({
    name: "CounterNaikTurun",
    initialState: {
        totalCounter: 0 // counter untuk menghitung naik/turun
    },
    reducers: {
        tambahCounter(state) {
            state.totalCounter += 1;
        }, kurangCounter(state) {
            state.totalCounter -= 1;
        }
    },
});

export const { tambahCounter, kurangCounter } = naikTurunSlide.actions;
export default naikTurunSlide.reducer;