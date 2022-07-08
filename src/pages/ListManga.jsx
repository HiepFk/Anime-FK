import React, { useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import TopEpisodes from "../components/TopEpisodes";
import TopTrailer from "../components/TopTrailer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageManga } from "../api/manga";
import Loading from "../components/Loading";
import { SetPage } from "../redux/mangaSlice";

function ListManga() {
  const dispatch = useDispatch();

  const { loading, mangas, page } = useSelector((state) => state.manga);
  useEffect(() => {
    getPageManga(dispatch, page);
  }, [dispatch, page]);

  const handePage = (e) => {
    dispatch(SetPage(e));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading || !mangas?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List title={"ALL MANGA"} data={mangas?.data} />
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
export default ListManga;
