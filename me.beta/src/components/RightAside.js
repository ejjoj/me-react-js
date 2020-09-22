import React from "react";

import php from "../assets/PHP-logo.svg";
import js from "../assets/Unofficial_JavaScript_logo_2.svg";
import ajax from "../assets/AJAX_logo_by_gengns.svg";
import rclogo from "../assets/React-icon.svg";
import mysql from "../assets/mysql-ar21.svg";

const techList = [
  {
    id: 1,
    svg: php,
    alt: "PHP",
  },
  {
    id: 2,
    svg: js,
    alt: "JavaScript",
  },
  {
    id: 3,
    svg: ajax,
    alt: "AJAX",
  },
  {
    id: 4,
    svg: rclogo,
    alt: "React.js",
  },
  {
    id: 5,
    svg: mysql,
    alt: "MySQL",
  },
];

const RightAside = () => {
  return (
    <div className="column column-right">
      <div className="container">
        <h2 className="text-title">My stack:</h2>
        <p className="text">
          I provide <span className="text-bold">solutions</span> in those
          <span className="text-bold"> technologies</span>:
        </p>
        <div className="tech">
          {techList.map((techItem) => (
            <div key={techItem.id} className="tech-item">
              <figure className="tech-item__figure">
                <img
                  src={techItem.svg}
                  alt={techItem.alt}
                  className="tech-item__image"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightAside;
