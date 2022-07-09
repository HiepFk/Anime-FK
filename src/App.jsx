import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ListAnime,
  ListManga,
  ListCharacter,
  DetailAnime,
  DetailManga,
  DetailCharacter,
} from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Video from "./components/Video";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="animes" element={<ListAnime />} />
        <Route exact path="animes/:id" element={<DetailAnime />} />
        <Route exact path="animes/:id/video" element={<Video />} />
        <Route exact path="mangas" element={<ListManga />} />
        <Route exact path="mangas/:id" element={<DetailManga />} />
        <Route exact path="characters" element={<ListCharacter />} />
        <Route exact path="characters/:id" element={<DetailCharacter />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
