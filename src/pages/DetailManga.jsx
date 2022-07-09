import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailManga } from "../api/manga";
import { getCharacter } from "../api/character";
import { getReviews } from "../api/review";

import Loading from "../components/Loading";
import Info from "../components/Detail/Info";
import Synopsis from "../components/Detail/Synopsis";
import Charater from "../components/Detail/Charater";
import Review from "../components/Detail/Review";

function DetailManga() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, manga } = useSelector((state) => state.manga);
  const { characters } = useSelector((state) => state.character);
  const { reviews } = useSelector((state) => state.review);

  useEffect(() => {
    getDetailManga(dispatch, id);
    getCharacter(dispatch, id, "manga");
    getReviews(dispatch, id, "manga");
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  const mains = characters?.data?.filter((item) => {
    return item.role === "Main";
  });
  return (
    <Wrapper>
      <Info anime={manga?.data} />
      <div className="content">
        <Synopsis synopsis={manga?.data?.synopsis} />
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
`;

export default DetailManga;
