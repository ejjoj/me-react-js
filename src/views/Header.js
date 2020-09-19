import React from "react";

import "../styles/Header.scss";

import NavList from "../components/NavList";
import SocialList from "../components/SocialList";

const Header = () => {
  return (
    <header className="col-lg-12 header">
      <a href="/" className="col-lg-3 header-logo">
        <h1 className="header-logo__title">Szymański</h1>
        <h2 className="header-logo__title-sub">Bartosz</h2>
      </a>
      <NavList />
      <SocialList />
    </header>
  );
};

export default Header;
