import {
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} from "../redux/homeSlice";

export const getHomePage = async (dispatch, type) => {
  let link = `https://api.jikan.moe/v4/${type}?limit=12`;
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
