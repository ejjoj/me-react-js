import React from "react";

const socialList = [
  {
    id: 1,
    iconClass: "fab fa-github",
    link: "https://github.com/ejjoj",
    text: "GitHub",
  },
  {
    id: 2,
    iconClass: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/bartosz-szyma%C5%84ski-a6b418169/",
    text: "LinkedIn",
  },
  {
    id: 3,
    iconClass: "fab fa-facebook-f",
    link: "https://www.facebook.com/bartosz.szymaski/",
    text: "Facebook",
  },
  {
    id: 4,
    iconClass: "fab fa-instagram",
    link: "https://www.instagram.com/bartek.szymaski/",
    text: "Instagram",
  },
];

const LeftAside = () => {
  return (
    <div className="column column-left">
      <div className="container">
        <h2 className="text-title">About me:</h2>
        <p className="text">
          I work as <span className="text-bold">Fullstack developer</span> in GQ
          Group, located in Cracow.
        </p>
        <p className="text">
          I am student of extramural studies of{" "}
          <span className="text-bold">Informatics</span> in Wyższa Szkoła
          Zarządzania i Bankowości also in Cracow.
        </p>
        <p className="text">
          As a specialist I am able to provide best solutions for projects and
          clients.
        </p>
        <p className="text">
          I have managed to take part in projects built on{" "}
          <span className="text-bold">WordPress</span> or{" "}
          <span className="text-bold">PrestaShop</span>.
        </p>
        <ul className="social">
          {socialList.map((item) => (
            <li key={item.id} className="social-item">
              <a className="social-link" href={item.link}>
                <i className={item.iconClass}></i>
                <p className="social-text">{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftAside;
