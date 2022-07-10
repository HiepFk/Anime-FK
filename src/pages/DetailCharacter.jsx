import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { getDetailCharacter } from "../api/character";
import { split } from "../utils/function";
import Info from "../components/Charater/Info";
import Voice from "../components/Charater/Voice";
import Products from "../components/Charater/Products";
import About from "../components/Charater/About";
import styled from "styled-components";

function DetailCharacter() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character, loading } = useSelector((state) => state.character);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getDetailCharacter(dispatch, id);
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  let arr1 = [];
  let arr2 = [];
  split(character?.data?.about, arr1, arr2);

  return (
    <Wrapper>
      <Info data={character?.data} arr1={arr1} />
      <About arr2={arr2} />
      <Voice data={character?.data?.voices} />
      <Products title="ANIME" data={character?.data?.anime} type="anime" />
      <Products title="MANGA" data={character?.data?.manga} type="manga" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
`;
export default DetailCharacter;
