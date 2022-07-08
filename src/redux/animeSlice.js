import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    anime: {},
    animes: [],
    page: 1,
    loading: false,
    error: false,
  },
  reducers: {
    SetPage: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },

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
  SetPage,
  GetAnimesStart,
  GetAnimesSuccess,
  GetAnimesError,
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
} = animeSlice.actions;
export default animeSlice.reducer;
