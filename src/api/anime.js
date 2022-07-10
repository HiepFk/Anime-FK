import {
  GetAnimesStart,
  GetAnimesSuccess,
  GetAnimesError,
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
} from "../redux/animeSlice";

export const getAnimeHomePage = async (dispatch) => {
  let link = `https://api.jikan.moe/v4/anime?limit=12`;
  dispatch(GetAnimesStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetAnimesSuccess(data));
  } catch (error) {
    dispatch(GetAnimesError());
  }
};

export const getPageAnime = async (dispatch, page, text = "") => {
  let link = `https://api.jikan.moe/v4/anime?page=${page}&q=${text}`;
  dispatch(GetAnimesStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetAnimesSuccess(data));
  } catch (error) {
    dispatch(GetAnimesError());
  }
};

export const getDetailAnime = async (dispatch, id) => {
  let link = `https://api.jikan.moe/v4/anime/${id}/full`;
  dispatch(GetAnimeStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetAnimeSuccess(data));
  } catch (error) {
    dispatch(GetAnimeError());
  }
};
