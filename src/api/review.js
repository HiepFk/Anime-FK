import {
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
