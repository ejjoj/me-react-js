import React from "react";

import SocialItem from "./SocialItem";

const socialList = [
  {
    id: 1,
    classIcon: "fab fa-github-square",
    path: "https://github.com/ejjoj/",
  },
  {
    id: 2,
    classIcon: "fab fa-linkedin",
    path: "https://www.linkedin.com/in/bartosz-szyma%C5%84ski-a6b418169/",
  },
  {
    id: 3,
    classIcon: "fab fa-facebook-square",
    path: "https://www.facebook.com/bartosz.szymaski/",
  },
  {
    id: 4,
    classIcon: "fab fa-instagram-square",
    path: "https://www.instagram.com/bartek.szymaski/",
  },
];

const SocialList = () => {
  const socials = socialList.map((item) => (
    <SocialItem key={item.id} class={item.classIcon} path={item.path} />
  ));
  return <ul className="col-lg-2 header-socials">{socials}</ul>;
};

export default SocialList;
