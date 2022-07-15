import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getHomePage } from "../../api/home";
import Item from "../Item";

function List({ title, link, type }) {
  const dispatch = useDispatch();
  const anime = useSelector((state) => state.home?.anime?.data?.data);
  const manga = useSelector((state) => state.home?.manga?.data?.data);

  useEffect(() => {
    getHomePage(dispatch, type);
  }, [dispatch, type]);
  return (
    <Wrapper>
      <div className="title">
        <div className="left">
          <div className="pillar"></div>
          <div className="desc">{title}</div>
        </div>
        <Link to={`${link}`} className="right">
          <div className="all">View all</div>
          <BsArrowRight className="icon" />
        </Link>
      </div>
      <div className="wrapper">
        {type === "anime" ? (
          <>
            {anime?.map((item, index) => {
              return (
                <Item
                  key={index}
                  image={item?.images?.jpg?.image_url}
                  name={item?.title}
                  type={type}
                  id={item?.mal_id}
                />
              );
            })}
          </>
        ) : (
          <>
            {manga?.map((item, index) => {
              return (
                <Item
                  key={index}
                  image={item?.images?.jpg?.image_url}
                  name={item?.title}
                  type={type}
                  id={item?.mal_id}
                />
              );
            })}
          </>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 5rem;
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .pillar {
    width: 0.25rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 2rem;
    color: white;
    font-weight: 600;
  }
  .all {
    color: white;
    font-size: 1rem;
    letter-spacing: 2px;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 2rem;
  }
  @media (max-width: 600px) {
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 992px) and (min-width: 600px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export default List;
