import { createSlice } from "@reduxjs/toolkit";

export const topSlice = createSlice({
  name: "top",
  initialState: {
    data: [],
    loading: false,
    error: false,
    header: 1,
  },
  reducers: {
    SetHeader: (state, action) => {
      return { ...state, header: action.payload };
    },
    GetTopStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetTopError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetTopSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const { GetTopStart, GetTopSuccess, GetTopError, SetHeader } =
  topSlice.actions;
export default topSlice.reducer;
