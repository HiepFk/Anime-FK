import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetHeader } from "../redux/topSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { menu } from "../utils/link";
import { RiContactsFill } from "react-icons/ri";

function Header() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.top.header);
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
              className={header === item.id ? "item active" : "item"}
              key={item.id}
              onClick={() => dispatch(SetHeader(item.id))}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <a href="https://fk-porfolio.netlify.app/">
        <RiContactsFill className="icon" />
      </a>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #070720;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 12rem;
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
  .icon {
    font-size: 1.5rem;
    color: white;
  }
`;
export default Header;
