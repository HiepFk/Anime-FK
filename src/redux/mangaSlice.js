import { createSlice } from "@reduxjs/toolkit";

export const mangaSlice = createSlice({
  name: "manga",
  initialState: {
    manga: {},
    mangas: [],
    loading: false,
    error: false,
  },
  reducers: {
    MangaStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetMangaError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetMangaSuccess: (state, action) => {
      return {
        ...state,
        manga: action.payload,
        loading: false,
        error: true,
      };
    },
    GetMangasStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetMangasError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetMangasSuccess: (state, action) => {
      return {
        ...state,
        mangas: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  GetMangasStart,
  GetMangasSuccess,
  GetMangasError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} = mangaSlice.actions;
export default mangaSlice.reducer;
