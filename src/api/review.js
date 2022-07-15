import {
  GetReviewsStart,
  GetReviewsSuccess,
  GetReviewsError,
} from "../redux/reviewSlice";
const localLink = process.env.REACT_APP_API_LINK;

export const getReviews = async (dispatch, id, type) => {
  let link = `${localLink}/${type}/${id}/reviews`;
  dispatch(GetReviewsStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetReviewsSuccess(data));
  } catch (error) {
    dispatch(GetReviewsError());
  }
};
