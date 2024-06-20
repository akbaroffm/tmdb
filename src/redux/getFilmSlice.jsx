import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: []
}

const GetFilmSlice = createSlice({
    name:'Movies',
    initialState,
    reducers:{
        getNowPlayingFilm(state, action){
            return{
                films:[...action.payload]
            }
        }
    }

})

export const {getNowPlayingFilm} = GetFilmSlice.actions

export default GetFilmSlice.reducer;