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
    todaysDate: new Date(),
  };

  calcMyAge() {
    const { todaysDate } = this.state;
    const myBirthDay = new Date(1999, 2, 17, 12, 30, 0);
    const diff = (todaysDate - myBirthDay) / 1000 / 60 / 60 / 24 / 365;

    return Math.floor(diff);
  }

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
          <h3 className="start-text__heading">Kim jestem?</h3>
          <p className="start-desc">
            Nazywam się Bartosz Szymański. Mieszkam w Krakowie. Mam{" "}
            {this.calcMyAge()} lat, jestem{" "}
            <span>Junior Fullstack Developerem</span>. Profesjonalnie pracuję w
            technologiach takich jak:
          </p>
          <ul className="start-tech">{technologies}</ul>
          <p className="start-desc">
            Używam ich w silnikach takich jak Wordpress i PrestaShop. Poza pracą
            zajmuję się rozwijaniem swojej pasji - programowaniem, a także
            studiuję zaocznie w
            <strong> Wyższej Szkole Zarządzania i Bankowości w Krakowie</strong>
            .
          </p>
          <div className="row start-text__container">
            <button className="start-text__button">Zjedź niżej!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
