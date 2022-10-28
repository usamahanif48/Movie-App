import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../components/header/Header.css";
import Main from "../Assets/main.png";

const Header = () => {
  const [addClass, setAddClass] = useState("");
  const [menuClick, setMenuClick] = useState();
  const ok = () => {
    setAddClass(addClass == !true ? "open" : "");
  };
  const menuClicks = () => {
    // setAddClass(addClass == !true ? "open" : "");

    setMenuClick((menuClick = !false ? "ok" : ""));
  };
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="brand">
              <Link to="/">
                {" "}
                <img src={Main} ></img>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
