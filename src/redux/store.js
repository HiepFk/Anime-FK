import { configureStore, combineReducers } from "@reduxjs/toolkit";
import animeReducer from "./animeSlice";
import mangaReducer from "./mangaSlice";
import peopleReducer from "./peopleSlice";
import characterReducer from "./characterSlice";
import reviewReducer from "./reviewSlice";
import topReducer from "./topSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  anime: animeReducer,
  manga: mangaReducer,
  people: peopleReducer,
  character: characterReducer,
  review: reviewReducer,
  top: topReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import animeReducer from "./animeSlice";
// import mangaReducer from "./mangaSlice";
// import peopleReducer from "./peopleSlice";
// import characterReducer from "./characterSlice";
// export default configureStore({
//   reducer: {
//     anime: animeReducer,
//     manga: mangaReducer,
//     people: peopleReducer,
//     character: characterReducer,
//   },
// });
