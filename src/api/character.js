import axios from "axios";
import {
  GetCharactersStart,
  GetCharactersSuccess,
  GetCharactersError,
  GetCharacterStart,
  GetCharacterSuccess,
  GetCharacterError,
} from "../redux/characterSlice";

export const getListCharacter = async (dispatch, page, text) => {
  let link = `https://api.jikan.moe/v4/characters?page=${page}&q=${text} `;
  dispatch(GetCharactersStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetCharactersSuccess(data));
  } catch (error) {
    dispatch(GetCharactersError());
  }
};
export const getCharacter = async (dispatch, id, type) => {
  let link = `https://api.jikan.moe/v4/${type}/${id}/characters`;
  dispatch(GetCharactersStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetCharactersSuccess(data));
  } catch (error) {
    dispatch(GetCharactersError());
  }
};

export const getDetailCharacter = async (dispatch, id) => {
  let link = `https://api.jikan.moe/v4/characters/${id}/full`;
  dispatch(GetCharacterStart());
  try {
    const res = await axios.get(link);
    dispatch(GetCharacterSuccess(res.data));
  } catch (error) {
    dispatch(GetCharacterError());
  }
};
