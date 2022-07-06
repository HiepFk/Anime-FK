import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ListAnime, ListManga, DetailAnime, DetailManga } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="animes" element={<ListAnime />} />
        <Route exact path="animes/:id" element={<DetailAnime />} />
        <Route exact path="mangas" element={<ListManga />} />
        <Route exact path="mangas/:id" element={<DetailManga />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
