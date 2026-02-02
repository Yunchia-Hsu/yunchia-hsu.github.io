import React from "react";
import "./Header.css";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Yun-Chia Hsu</h1>
        <nav className="nav">
          {/* <a href="#about">About</a> */}
         
          <a href="#tprojects">Projects:  TypeScript</a>
          <br/>
          <a href="#jprojects">JavaScript/Python </a>
          <br/>
          <a href="#cprojects">C and C++ </a>
          <br/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
