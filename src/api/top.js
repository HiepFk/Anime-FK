import { GetTopStart, GetTopSuccess, GetTopError } from "../redux/topSlice";
const localLink = process.env.REACT_APP_API_LINK;
export const getTop = async (dispatch, type) => {
  const link = `${localLink}/top/${type}?limit=10`;
  dispatch(GetTopStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetTopSuccess(data));
  } catch (error) {
    dispatch(GetTopError());
  }
};
