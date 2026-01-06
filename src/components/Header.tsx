import React from "react";
import "./Header.css";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Yun-Chia Hsu</h1>
        <nav className="nav">
          {/* <a href="#about">About</a> */}
         
          <a href="#tprojects">Typecript projects</a>
          <br/>
          <a href="#cprojects">C and C++ projects</a>
          <br/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
