import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const homeImage = data.homeImage.map(({ alt, src }) => (
  <div>
    <img className="home-image" src={src} alt={alt} />
  </div>
));

export default class Home extends Component {
  render() {
    const {
      about: { slogan },
    } = data;

    return (
      <div>
        <div className="slogan">{slogan}</div>
        <div>{homeImage}</div>
      </div>
    );
  }
}
