import React, { useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import TopEpisodes from "../components/TopEpisodes";
import TopTrailer from "../components/TopTrailer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageAnime } from "../api/anime";
import Loading from "../components/Loading";
import { SetPage } from "../redux/animeSlice";

function ListAnime() {
  const dispatch = useDispatch();
  const { loading, animes, page } = useSelector((state) => state.anime);
  useEffect(() => {
    getPageAnime(dispatch, page);
  }, [dispatch, page]);

  const handePage = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(SetPage(e));
  };

  if (loading || !animes?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List title={"ALL AINIME"} data={animes?.data} />
        <Pagination handePage={handePage} page={page} />
      </div>
      <div className="right content">
        <TopEpisodes />
        <TopTrailer />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
  display: flex;

  .left {
    width: calc(100% - 25rem);
  }
  .right {
    margin-left: 3.5rem;
    height: 100%;
  }
`;
export default ListAnime;
