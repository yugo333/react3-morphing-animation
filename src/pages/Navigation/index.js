import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <header>
      <div className="header-inner">
        <Link className="link" to="/">
          <div className="logo">OBJ HACK LINKS.</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/pageSample">Second</Link>
            </li>
            <li>
              <Link to="/pageSample2">Third</Link>
            </li>
            <li>
              <Link to="/pageSample3">Four</Link>
            </li>
            <li>
              <Link to="/pageSample4">Five</Link>
            </li>
            {/* <li>
              <a href="/">products</a>
            </li>
            <li>
              <a href="/">solutions</a>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className="btn">
              <a href="/">order</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
