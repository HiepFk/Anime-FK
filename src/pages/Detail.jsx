import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailData } from "../api/data";
import { getCharacter } from "../api/character";
import { getReviews } from "../api/review";
import Loading from "../components/Loading";
import Info from "../components/Detail/Info";
import Synopsis from "../components/Detail/Synopsis";
import Charater from "../components/Detail/Charater";
import Review from "../components/Detail/Review";

function Detail({ type }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.data);
  const { characters } = useSelector((state) => state.character);
  const { reviews } = useSelector((state) => state.review);
  useEffect(() => {
    getDetailData(dispatch, id, type);
    getCharacter(dispatch, id, type);
    getReviews(dispatch, id, type);
  }, [dispatch, id, type]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const mains = characters?.data?.filter((item) => {
    return item.role === "Main";
  });
  return (
    <Wrapper>
      <Info anime={data?.data} />
      <div className="content">
        <Synopsis synopsis={data?.data?.synopsis} />
        <Charater data={mains} />
        <Review data={reviews?.data} />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
`;
export default Detail;
