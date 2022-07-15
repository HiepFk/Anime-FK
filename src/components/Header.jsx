import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { menu } from "../utils/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SetPage } from "../redux/dataSlice";

function Header() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(1);

  const pathname = window.location.pathname;
  useEffect(() => {
    if (pathname === "/") {
      setIndex(1);
    }
    if (pathname.includes("/anime")) {
      setIndex(2);
    }
    if (pathname.includes("/manga")) {
      setIndex(3);
    }
    if (pathname.includes("/character")) {
      setIndex(4);
    }
  }, [pathname]);
  return (
    <Wrapper>
      <Link to={"/"} onClick={() => setIndex(1)}>
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="fixed">
        <div className={active ? "menu menu_active" : "menu"}>
          {menu.map((item) => {
            return (
              <Link
                to={item.url}
                className={index === item.id ? "item active" : "item"}
                key={item.id}
                onClick={() => {
                  setIndex(item.id);
                  dispatch(SetPage(1));
                }}
              >
                {item.title}
              </Link>
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
