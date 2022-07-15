import {
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} from "../redux/homeSlice";
const localLink = process.env.REACT_APP_API_LINK;

export const getHomePage = async (dispatch, type) => {
  let link = `${localLink}/${type}?limit=12`;
  if (type === "anime") {
    dispatch(GetAnimeStart());
    try {
      const data = await fetch(link).then((res) => res.json());
      dispatch(GetAnimeSuccess(data));
    } catch (error) {
      dispatch(GetAnimeError());
    }
  } else {
    dispatch(GetMangaStart());
    try {
      const data = await fetch(link).then((res) => res.json());
      dispatch(GetMangaSuccess(data));
    } catch (error) {
      dispatch(GetMangaError());
    }
  }
};
