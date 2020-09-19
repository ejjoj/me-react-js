import React from "react";

const SocialItem = (props) => {
  return (
    <li className="col-lg-6 header-socials__item">
      <a href={props.path} className="header-socials__link">
        <i className={props.class}></i>
      </a>
    </li>
  );
};

export default SocialItem;
