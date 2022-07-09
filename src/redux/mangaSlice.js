import { createSlice } from "@reduxjs/toolkit";

export const mangaSlice = createSlice({
  name: "manga",
  initialState: {
    manga: {},
    mangas: [],
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
    GetMangaStart: (state) => {
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
  SetPage,
  GetMangasStart,
  GetMangasSuccess,
  GetMangasError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} = mangaSlice.actions;
export default mangaSlice.reducer;
