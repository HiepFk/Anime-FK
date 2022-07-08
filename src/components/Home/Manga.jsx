import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMangaHomePage } from "../../api/manga";
import ListMini from "./ListMini";
import Loading from "../Loading";

function Manga() {
  const dispatch = useDispatch();
  const { loading, mangas } = useSelector((state) => state.manga);
  useEffect(() => {
    getMangaHomePage(dispatch);
  }, [dispatch]);

  if (loading || !mangas?.data) {
    return <Loading />;
  }
  return <ListMini title={"MANGA"} link="mangas" data={mangas?.data} />;
}

export default Manga;
