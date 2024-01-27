import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export const appStore = configureStore({
    reducer:{
        todo:todoSlice
    }
})
