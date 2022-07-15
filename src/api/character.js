import axios from "axios";
import {
  GetCharactersStart,
  GetCharactersSuccess,
  GetCharactersError,
  GetCharacterStart,
  GetCharacterSuccess,
  GetCharacterError,
} from "../redux/characterSlice";
const localLink = process.env.REACT_APP_API_LINK;

export const getCharacter = async (dispatch, id, type) => {
  let link = `${localLink}/${type}/${id}/characters`;
  dispatch(GetCharactersStart());
  try {
    const data = await fetch(link).then((res) => res.json());
    dispatch(GetCharactersSuccess(data));
  } catch (error) {
    dispatch(GetCharactersError());
  }
};

export const getDetailCharacter = async (dispatch, id) => {
  let link = `${localLink}/characters/${id}/full`;
  dispatch(GetCharacterStart());
  try {
    const res = await axios.get(link);
    dispatch(GetCharacterSuccess(res.data));
  } catch (error) {
    dispatch(GetCharacterError());
  }
};
