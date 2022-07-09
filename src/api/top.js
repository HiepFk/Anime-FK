import { GetTopStart, GetTopSuccess, GetTopError } from "../redux/topSlice";

export const getTop = async (dispatch, link) => {
  dispatch(GetTopStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetTopSuccess(data));
  } catch (error) {
    dispatch(GetTopError());
  }
};
