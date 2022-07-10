import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetHeader } from "../redux/topSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { menu } from "../utils/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.top?.header);
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="fixed">
        <div className={active ? "menu menu_active" : "menu"}>
          {menu.map((item) => {
            return (
              <>
                {item.id === 5 && (
                  <a href={item.url} className="item">
                    {item.title}
                  </a>
                )}
                {item.id < 5 && (
                  <>
                    <Link
                      to={item.url}
                      className={header === item.id ? "item active" : "item"}
                      key={item.id}
                      onClick={() => dispatch(SetHeader(item.id))}
                    >
                      {item.title}
                    </Link>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="icon" onClick={() => setActive(!active)}>
        {active ? (
          <AiOutlineClose className="toggle" />
        ) : (
          <FaBars className="toggle" />
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 1.5rem 3rem;
  }
  background-color: #070720;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 12rem;
  padding-right: 11rem;
  .menu {
    display: flex;
    align-items: center;
  }
  .item {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 1.5rem 0rem;
    width: 7rem;
    margin-left: 1.5rem;
    text-align: center;
    :hover {
      background-color: #e53637;
      opacity: 0.6;
    }
  }
  .active {
    background-color: #e53637;
  }
  .icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 990px) {
    .item {
      color: black;
      margin-left: 0rem;
      margin-top: 3rem;
    }
    .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-100%);
      transition: transform 0.25s ease-in;
      z-index: 99000;
    }
    .menu_active {
      transform: translateX(0%);
    }
    .icon {
      display: block;
    }
  }
`;
export default Header;
