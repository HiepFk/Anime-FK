import axios from "axios";
import {
  GetMangasStart,
  GetMangasSuccess,
  GetMangasError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
  NextPage,
  PrePage,
  SetPage,
} from "../redux/mangaSlice";

// axios.defaults.withCredentials = true;
// const api = `https://api.jikan.moe/v4/anime?page=1&q=`;

export const getMangaHomePage = async (dispatch) => {
  let link = `https://api.jikan.moe/v4/manga?limit=9`;
  dispatch(GetMangasStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetMangasSuccess(data));
  } catch (error) {
    dispatch(GetMangasError());
  }
};

export const getPageManga = async (dispatch, page) => {
  let link = `https://api.jikan.moe/v4/manga?page=${page}`;
  dispatch(GetMangasStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetMangasSuccess(data));
  } catch (error) {
    dispatch(GetMangasError());
  }
};

export const getDetailManga = async (dispatch, id) => {
  let link = `https://api.jikan.moe/v4/manga/${id}/full`;
  dispatch(GetMangaStart());
  try {
    const res = await axios.get(link);
    dispatch(GetMangaSuccess(res.data));
  } catch (error) {
    dispatch(GetMangaError());
  }
};

export const GetMangaBySearch = async (dispatch, text) => {
  let link = `https://api.jikan.moe/v4/manga?page=1&q=${text}`;
  dispatch(GetMangasStart());
  try {
    const res = await axios.get(link);
    dispatch(GetMangasSuccess(res.data));
  } catch (error) {
    dispatch(GetMangasError());
  }
};
