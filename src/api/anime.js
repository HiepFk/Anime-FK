import axios from "axios";
import {
  GetAnimesStart,
  GetAnimesSuccess,
  GetAnimesError,
  GetAnimeStart,
  GetAnimeSuccess,
  GetAnimeError,
} from "../redux/animeSlice";

// axios.defaults.withCredentials = true;
// const api = `https://api.jikan.moe/v4/anime?page=1&q=`;

export const getAnimeHomePage = async (dispatch) => {
  let link = `https://api.jikan.moe/v4/anime?limit=9`;
  dispatch(GetAnimesStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetAnimesSuccess(data));
  } catch (error) {
    dispatch(GetAnimesError());
  }
};

export const getPageAnime = async (dispatch, page) => {
  let link = `https://api.jikan.moe/v4/anime?page=${page}`;
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
    const res = await axios.get(link);
    dispatch(GetAnimeSuccess(res.data));
  } catch (error) {
    dispatch(GetAnimeError());
  }
};

export const GetAnimeBySearch = async (dispatch, text) => {
  let link = `https://api.jikan.moe/v4/anime?page=1&q=${text}`;
  dispatch(GetAnimesStart());
  try {
    const res = await axios.get(link);
    dispatch(GetAnimesSuccess(res.data));
  } catch (error) {
    dispatch(GetAnimesError());
  }
};
