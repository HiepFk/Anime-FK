import {
  GetDatasStart,
  GetDatasSuccess,
  GetDatasError,
  GetDataStart,
  GetDataSuccess,
  GetDataError,
} from "../redux/dataSlice";
const localLink = process.env.REACT_APP_API_LINK;

export const getPageData = async (dispatch, page, text = "", type) => {
  let link = `${localLink}/${type}?page=${page}&q=${text}`;
  dispatch(GetDatasStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetDatasSuccess(data));
  } catch (error) {
    dispatch(GetDatasError());
  }
};

export const getDetailData = async (dispatch, id, type) => {
  let link = `${localLink}/${type}/${id}/full`;
  dispatch(GetDataStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetDataSuccess(data));
  } catch (error) {
    dispatch(GetDataError());
  }
};
