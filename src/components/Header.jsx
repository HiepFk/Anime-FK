import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { menu } from "../utils/link";
function Header() {
  const [index, setIndex] = useState(1);
  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="menu">
        {menu.map((item) => {
          return (
            <Link
              to={item.url}
              className={index === item.id ? "item active" : "item"}
              key={item.id}
              onClick={() => setIndex(item.id)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #070720;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12rem;
  padding-right: 10.5rem;
  .menu {
    display: flex;
    align-items: center;
  }
  .item {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 1.5rem;
  }
  .active {
    background-color: #e53637;
  }
`;
export default Header;
