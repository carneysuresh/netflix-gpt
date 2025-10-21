import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies: null,
    },
    reducers :{
        addNowPlayingMovies:(state,action) =>{
            state.NowPlayingMovies =action.payload;
        }

    }
})

export const {addNowPlayingMovies} = movieslice.actions; 
export default movieslice.reducer;