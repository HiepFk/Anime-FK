import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
  name: "alert",
  initialState: {
    anime: {},
    animes: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetAnimeStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetAnimeError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetAnimeSuccess: (state, action) => {
      return {
        ...state,
        anime: action.payload,
        loading: false,
        error: true,
      };
    },
    GetAnimesStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetAnimesError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetAnimesSuccess: (state, action) => {
      return {
        ...state,
        animes: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  GetAnimesStart,
  GetAnimesSuccess,
  GetAnimesError,
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
} = animeSlice.actions;
export default animeSlice.reducer;
