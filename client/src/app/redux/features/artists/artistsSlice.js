"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    people: [],
    filtered:[],
    
}

export const artistsSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        getArtists: (state, action) => {
            state.people = action.payload
            state.filtered = action.payload
            
        },

        filterArtist:(state,action)=>{
            state.filtered = action.payload
        },
        orderArtist:(state,action)=>{
            switch(action.payload){
                case "asc":
                state.filtered = state.filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
                case "desc":
                state.filtered = state.filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            }
        },
        // orderArtistRating:(state,action)=>{
        //     switch(action.payload){
        //         case "asc":
        //         state.filtered = state.filtered.sort((a, b) => a.name.localeCompare(b.name));
        //         break;
        //         case "desc":
        //         state.filtered = state.filtered.sort((a, b) => b.name.localeCompare(a.name));
        //         break;
        //     }
        // }
    }
})

export const {getArtists, filterArtist, orderArtist, orderArtistRating} = artistsSlice.actions



export default artistsSlice.reducer

