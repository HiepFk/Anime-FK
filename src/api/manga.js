import axios from "axios";
import {
  GetMangasStart,
  GetMangasSuccess,
  GetMangasError,
  GetMangaStart,
  GetMangaSuccess,
  GetMangaError,
} from "../redux/mangaSlice";

export const getMangaHomePage = async (dispatch) => {
  let link = `https://api.jikan.moe/v4/manga?limit=12`;
  dispatch(GetMangasStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetMangasSuccess(data));
  } catch (error) {
    dispatch(GetMangasError());
  }
};

export const getPageManga = async (dispatch, page, text = "") => {
  let link = `https://api.jikan.moe/v4/manga?page=${page}&q=${text}`;
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
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetMangaSuccess(data));
  } catch (error) {
    dispatch(GetMangaError());
  }
};
