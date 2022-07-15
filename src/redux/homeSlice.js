import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    anime: {
      data: [],
      loading: false,
      error: false,
    },
    manga: {
      data: [],
      loading: false,
      error: false,
    },
  },
  reducers: {
    GetAnimeStart: (state) => {
      state.anime.loading = true;
      state.anime.error = false;
    },
    GetAnimeError: (state) => {
      state.anime.loading = false;
      state.anime.error = true;
    },
    GetAnimeSuccess: (state, action) => {
      state.anime.loading = false;
      state.anime.error = false;
      state.anime.data = action.payload;
    },
    GetMangaStart: (state) => {
      state.manga.loading = true;
      state.manga.error = false;
    },
    GetMangaError: (state) => {
      state.manga.loading = false;
      state.manga.error = true;
    },
    GetMangaSuccess: (state, action) => {
      state.manga.loading = false;
      state.manga.error = false;
      state.manga.data = action.payload;
    },
  },
});

export const {
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} = homeSlice.actions;
export default homeSlice.reducer;
