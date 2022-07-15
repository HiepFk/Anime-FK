import {
  GetDatasStart,
  GetDatasSuccess,
  GetDatasError,
  GetDataStart,
  GetDataSuccess,
  GetDataError,
} from "../redux/dataSlice";

export const getPageData = async (dispatch, page, text = "", type) => {
  let link = `https://api.jikan.moe/v4/${type}?page=${page}&q=${text}`;
  dispatch(GetDatasStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetDatasSuccess(data));
  } catch (error) {
    dispatch(GetDatasError());
  }
};

export const getDetailData = async (dispatch, id, type) => {
  let link = `https://api.jikan.moe/v4/${type}/${id}/full`;
  dispatch(GetDataStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetDataSuccess(data));
  } catch (error) {
    dispatch(GetDataError());
  }
};
