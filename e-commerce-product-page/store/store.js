import { configureStore } from "@reduxjs/toolkit"

const createStore = (preloadedState) => {
    return configureStore({
        reducer: {
            nextRepo: nextSlice,
        },
        preloadedState,
    })
}