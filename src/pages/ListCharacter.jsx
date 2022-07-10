import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import TopTrailer from "../components/TopTrailer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getListCharacter } from "../api/character";
import Loading from "../components/Loading";
import { SetPage } from "../redux/characterSlice";

function ListCharacter() {
  const dispatch = useDispatch();
  const { loading, characters, page } = useSelector((state) => state.character);

  const [text, setText] = useState("");

  const handeSearch = (e) => {
    e.preventDefault();
    dispatch(SetPage(1));
    getListCharacter(dispatch, page, text);
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
    getListCharacter(dispatch, page, text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  if (loading || !characters?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List
          title={text ? `Search by ${text}` : "ALL CHARATER"}
          data={characters?.data}
          handeSearch={handeSearch}
          setText={setText}
          type="character"
        />
        <Pagination
          handePage={handePage}
          page={page}
          maxPage={characters?.pagination?.last_visible_page}
        />
      </div>
      <div className="right content">
        <TopTrailer
          link="https://api.jikan.moe/v4/top/characters?limit=10"
          title="character"
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
export default ListCharacter;
