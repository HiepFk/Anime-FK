import {
  GetReviewStart,
  GetReviewSuccess,
  GetReviewError,
  GetReviewsStart,
  GetReviewsSuccess,
  GetReviewsError,
} from "../redux/reviewSlice";
export const getReviews = async (dispatch, id, type) => {
  let link = `https://api.jikan.moe/v4/${type}/${id}/reviews`;
  dispatch(GetReviewsStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetReviewsSuccess(data));
  } catch (error) {
    dispatch(GetReviewsError());
  }
};

// export const getDetailReview = async (dispatch, page, text = "") => {
//   let link = `https://api.jikan.moe/v4/anime?page=${page}&q=${text}`;
//   dispatch(GetReviewStart());
//   try {
//     const data = await fetch(link).then((res) => res.json());
//     dispatch(GetReviewSuccess(data));
//   } catch (error) {
//     dispatch(GetReviewError());
//   }
// };
