import axios from "axios";
import {
  GetCharactersStart,
  GetCharactersSuccess,
  GetCharactersError,
  GetCharacterStart,
  GetCharacterSuccess,
  GetCharacterError,
} from "../redux/characterSlice";

export const getPageCharacter = async (dispatch, page) => {
  let link = `https://api.jikan.moe/v4/characters?page=${page}`;
  dispatch(GetCharactersStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetCharactersSuccess(data));
  } catch (error) {
    dispatch(GetCharactersError());
  }
};

export const getDetailAnime = async (dispatch, id) => {
  let link = `https://api.jikan.moe/v4/characters/${id}/full`;
  dispatch(GetCharacterStart());
  try {
    const res = await axios.get(link);
    dispatch(GetCharacterSuccess(res.data));
  } catch (error) {
    dispatch(GetCharacterError());
  }
};

export const GetAnimeBySearch = async (dispatch, text) => {
  let link = `https://api.jikan.moe/v4/characters?page=1&q=${text}`;
  dispatch(GetCharactersStart());
  try {
    const res = await axios.get(link);
    dispatch(GetCharactersSuccess(res.data));
  } catch (error) {
    dispatch(GetCharactersError());
  }
};
