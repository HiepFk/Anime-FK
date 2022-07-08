import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
    characters: [],
    page: 1,

    loading: false,
    error: false,
  },
  reducers: {
    NextPage: (state) => {
      return {
        ...state,
        page: state.page + 1,
      };
    },
    PrePage: (state) => {
      return {
        ...state,
        page: state.page - 1,
      };
    },
    SetPage: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },
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
  NextPage,
  PrePage,
  SetPage,
  GetCharactersStart,
  GetCharactersSuccess,
  GetCharactersError,
  GetCharacterStart,
  GetCharacterSuccess,
  GetCharacterError,
} = characterSlice.actions;
export default characterSlice.reducer;
