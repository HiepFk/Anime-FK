import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetReviewStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetReviewError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetReviewSuccess: (state, action) => {
      return {
        ...state,
        review: action.payload,
        loading: false,
        error: true,
      };
    },
    GetReviewsStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GetReviewsError: (state) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    GetReviewsSuccess: (state, action) => {
      return {
        ...state,
        reviews: action.payload,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  GetReviewStart,
  GetReviewSuccess,
  GetReviewError,
  GetReviewsStart,
  GetReviewsSuccess,
  GetReviewsError,
} = reviewSlice.actions;
export default reviewSlice.reducer;
