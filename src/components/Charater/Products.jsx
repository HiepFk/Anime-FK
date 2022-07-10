import React from "react";
import styled from "styled-components";
import Item from "../Item";
function Products({ title, data, type }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">{title}</div>
      </div>
      <div className="products">
        {data?.map((item, index) => {
          return (
            <div>
              {type === "anime" ? (
                <>
                  <Item
                    key={index}
                    image={item?.anime?.images?.jpg?.image_url}
                    name={item?.anime?.title}
                    type={type}
                    id={item?.anime?.mal_id}
                  />
                </>
              ) : (
                <>
                  <Item
                    key={index}
                    image={item?.manga?.images?.jpg?.image_url}
                    name={item?.manga?.title}
                    type={type}
                    id={item?.manga?.mal_id}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: white;
  margin-top: 2rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .pillar {
    width: 0.2rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1.25rem;
  }
  @media (max-width: 600px) {
    .products {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 1080px) and (min-width: 600px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export default Products;
