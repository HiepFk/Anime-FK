import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: {},
    datas: [],
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

    GetDataStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetDataError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetDataSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: true,
      };
    },
    GetDatasStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetDatasError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetDatasSuccess: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        datas: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  SetPage,
  GetDatasStart,
  GetDatasSuccess,
  GetDatasError,
  GetDataStart,
  GetDataSuccess,
  GetDataError,
} = dataSlice.actions;
export default dataSlice.reducer;
