import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
    characters: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetCharacterStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetCharacterError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetCharacterSuccess: (state, action) => {
      return {
        ...state,
        character: action.payload,
        loading: false,
        error: true,
      };
    },
    GetCharactersStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetCharactersError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetCharactersSuccess: (state, action) => {
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  GetCharactersStart,
  GetCharactersSuccess,
  GetCharactersError,
  GetCharacterStart,
  GetCharacterSuccess,
  GetCharacterError,
} = characterSlice.actions;
export default characterSlice.reducer;
