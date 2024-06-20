import { configureStore } from "@reduxjs/toolkit";
import getFilmSlice from "./getFilmSlice";

export const store = configureStore({
    reducer:getFilmSlice
})