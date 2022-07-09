import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTop } from "../api/top";
import styled from "styled-components";
import Trailer from "./Trailer";
import Loading from "./Loading";

function TopTrailer({ link, title }) {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.top);

  useEffect(() => {
    getTop(dispatch, link);
  }, [dispatch, link]);

  console.log(data);
  if (loading || !data?.data) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Top {title}</div>
      </div>
      <Trailer data={data?.data} />;
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
export default TopTrailer;
