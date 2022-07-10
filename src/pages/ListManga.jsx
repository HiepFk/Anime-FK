import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import TopTrailer from "../components/TopTrailer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageManga } from "../api/manga";
import Loading from "../components/Loading";
import { SetPage } from "../redux/mangaSlice";

function ListManga() {
  const dispatch = useDispatch();
  const { loading, mangas, page } = useSelector((state) => state.manga);

  const [text, setText] = useState("");

  const handeSearch = (e) => {
    e.preventDefault();
    dispatch(SetPage(1));
    getPageManga(dispatch, page, text);
  };

  const handePage = (e) => {
    dispatch(SetPage(e));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getPageManga(dispatch, page, text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  if (loading || !mangas?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List
          title={text ? `Search by ${text}` : "ALL MANGA"}
          data={mangas?.data}
          handeSearch={handeSearch}
          setText={setText}
          type="manga"
        />
        <Pagination
          handePage={handePage}
          page={page}
          maxPage={mangas?.pagination?.last_visible_page}
        />
      </div>
      <div className="right content">
        <TopTrailer
          link="https://api.jikan.moe/v4/top/manga?limit=10"
          title="manga"
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
  @media (max-width: 600px) {
    padding: 1rem;
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    .left,
    .right {
      width: 100%;
    }
    .right {
      margin-left: 0rem;
    }
  }
`;
export default ListManga;
