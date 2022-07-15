import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTop } from "../api/top";
import styled from "styled-components";
import Card from "./Card";
import Loading from "./Loading";

function Top({ type, title }) {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.top);

  useEffect(() => {
    getTop(dispatch, type);
  }, [dispatch, type]);

  if (loading || !data?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Top {title}</div>
      </div>
      <Card data={data?.data} title={title} type={type} />;
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .pillar {
    width: 0.175rem;
    height: 1.75rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.25rem;
    color: white;
    font-weight: 600;
  }
`;
export default Top;
