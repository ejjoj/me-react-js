import React from "react";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        Hi, I am <span className="header-title__special"> Bartosz!</span>
      </h1>
    </header>
  );
};

export default Header;
