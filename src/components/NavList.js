import React from "react";

import NavItem from "./NavItem";

const views = [
  { id: 1, name: "Start", to: "#start" },
  { id: 2, name: "O mnie", to: "#o-mnie" },
  { id: 3, name: "Co zrobiłem?", to: "#co-zrobilem" },
  { id: 4, name: "Kontakt", to: "#kontakt" },
];

const NavList = () => {
  const list = views.map((view) => (
    <NavItem key={view.id} name={view.name} to={view.to} />
  ));
  return <ul className="col-lg-7 header-nav">{list}</ul>;
};

export default NavList;
