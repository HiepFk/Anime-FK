import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Pagination from "../components/List/Pagination";
import Top from "../components/Top";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageData } from "../api/data";
import Loading from "../components/Loading";
import { SetPage } from "../redux/dataSlice";

function ListData({ type }) {
  const dispatch = useDispatch();
  const { loading, datas, page } = useSelector((state) => state.data);
  const [text, setText] = useState("");
  const handeSearch = (e) => {
    e.preventDefault();
    dispatch(SetPage(1));
    getPageData(dispatch, page, text, type);
  };

  const handePage = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(SetPage(e));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getPageData(dispatch, page, text, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, type]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="left">
        <List
          title={text ? `Search by ${text}` : `All ${type}`}
          data={datas?.data}
          handeSearch={handeSearch}
          setText={setText}
          type={type}
        />
        <Pagination
          handePage={handePage}
          page={page}
          maxPage={datas?.pagination?.last_visible_page}
        />
      </div>
      <div className="right content">
        <Top type={type} title={type} />
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
export default ListData;
