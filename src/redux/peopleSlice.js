import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: {},
    peoples: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetPeopleStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetPeopleError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetPeopleSuccess: (state, action) => {
      return {
        ...state,
        people: action.payload,
        loading: false,
        error: true,
      };
    },
    GetPeoplesStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetPeoplesError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetPeoplesSuccess: (state, action) => {
      return {
        ...state,
        peoples: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  GetPeoplesStart,
  GetPeoplesSuccess,
  GetPeoplesError,
  GetPeopleStart,
  GetPeopleSuccess,
  GetPeopleError,
} = peopleSlice.actions;
export default peopleSlice.reducer;
