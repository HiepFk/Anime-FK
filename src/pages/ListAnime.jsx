import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import TopTrailer from "../components/TopTrailer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageAnime } from "../api/anime";
import Loading from "../components/Loading";
import { SetPage } from "../redux/animeSlice";

function ListAnime() {
  const dispatch = useDispatch();
  const { loading, animes, page } = useSelector((state) => state.anime);
  const [text, setText] = useState("");

  const handeSearch = (e) => {
    e.preventDefault();
    dispatch(SetPage(1));
    getPageAnime(dispatch, page, text);
  };

  const handePage = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(SetPage(e));
  };

  useEffect(() => {
    getPageAnime(dispatch, page, text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  if (loading || !animes?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List
          title={text ? `Search by ${text}` : "ALL AINIME"}
          data={animes?.data}
          handeSearch={handeSearch}
          setText={setText}
          type="anime"
        />
        <Pagination
          handePage={handePage}
          page={page}
          maxPage={animes?.pagination?.last_visible_page}
        />
      </div>
      <div className="right content">
        <TopTrailer
          link="https://api.jikan.moe/v4/top/anime?limit=10"
          title="anime"
        />
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
