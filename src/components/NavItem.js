import React from "react";

const NavItem = (props) => {
  return (
    <li className="header-nav__item">
      <a className="header-nav__link" href={props.to}>
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
