import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ListData, Detail, DetailCharacter } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Video from "./components/Detail/Video";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="animes" element={<ListData type="anime" />} />
        <Route exact path="animes/:id" element={<Detail type="anime" />} />
        <Route exact path="animes/:id/video" element={<Video />} />
        <Route exact path="mangas" element={<ListData type="manga" />} />
        <Route exact path="mangas/:id" element={<Detail type="manga" />} />
        <Route
          exact
          path="characters"
          element={<ListData type="characters" />}
        />
        <Route exact path="characters/:id" element={<DetailCharacter />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
