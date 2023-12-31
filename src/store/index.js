import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./features/TodoSlice";

export const store = configureStore({
    reducer:{
        todo:TodoSlice,
    }
})