import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailAnime } from "../api/anime";
import { getCharacter } from "../api/character";
import { getReviews } from "../api/review";
import Loading from "../components/Loading";
import Info from "../components/Detail/Info";
import Synopsis from "../components/Detail/Synopsis";
import Charater from "../components/Detail/Charater";
import Review from "../components/Detail/Review";

function DetailAnime() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, anime } = useSelector((state) => state.anime);
  const { characters } = useSelector((state) => state.character);
  const { reviews } = useSelector((state) => state.review);
  useEffect(() => {
    getDetailAnime(dispatch, id);
    getCharacter(dispatch, id, "anime");
    getReviews(dispatch, id, "anime");
  }, [dispatch, id]);

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
      <Info anime={anime?.data} />
      <div className="content">
        <Synopsis synopsis={anime?.data?.synopsis} />
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
export default DetailAnime;
