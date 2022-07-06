import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./animeSlice";
import mangaReducer from "./mangaSlice";
import peopleReducer from "./peopleSlice";
import characterReducer from "./characterSlice";
export default configureStore({
  reducer: {
    anime: animeReducer,
    manga: mangaReducer,
    people: peopleReducer,
    character: characterReducer,
  },
});
