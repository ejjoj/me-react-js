import React, { Component } from "react";

import SingleTechnology from "../components/SingleTechnology";

import "../styles/Start.scss";

import me from "../images/ja.jpg";

class Start extends Component {
  state = {
    technologies: [
      { id: 1, name: "PHP," },
      { id: 2, name: "JavaScript," },
      { id: 3, name: "jQuery," },
      { id: 4, name: "SASS/SCSS," },
      { id: 5, name: "MySQL." },
    ],
  };

  render() {
    const technologies = this.state.technologies.map((technology) => (
      <SingleTechnology key={technology.id} name={technology.name} />
    ));

    return (
      <div className="col-lg-12 start">
        <div className="col-lg-6 start-container">
          <img className="start-photo" src={me} alt="Bartosz Szymański" />
        </div>
        <div className="col-lg-6 start-text">
          <strong>Kim jestem?</strong>
          <p className="start-desc">
            Nazywam się Bartosz Szymański. Mieszkam w Krakowie. Mam 21 lat,
            jestem <span>Junior Fullstack Developerem</span>. Profesjonalnie
            pracuję w technologiach takich jak:
          </p>
          <ul className="start-tech">{technologies}</ul>
          <p className="start-desc">
            Używam ich w silnikach takich jak Wordpress i PrestaShop. Poza pracą
            zajmuję się rozwijaniem swojej pasji, a także studiuję zaocznie w
            <strong> Wyższej Szkole Zarządzania i Bankowości w Krakowie</strong>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Start;
