import React, { useEffect } from "react";
import ListMini from "./ListMini";
import { useSelector, useDispatch } from "react-redux";
import { getAnimeHomePage } from "../../api/anime";
import Loading from "../Loading";

function Anime() {
  const dispatch = useDispatch();
  const { loading, animes } = useSelector((state) => state.anime);
  useEffect(() => {
    getAnimeHomePage(dispatch);
  }, [dispatch]);

  if (loading || !animes?.data) {
    return <Loading />;
  }
  return (
    <ListMini title={"ANIME"} link="/animes" data={animes?.data} type="anime" />
  );
}

export default Anime;
