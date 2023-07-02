import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const images = data.images.map(({ alt, src }) => (
  <div>
    <img className="header-images" src={src} alt={alt} />
  </div>
));

export default class Header extends Component {
  render() {
    return <div className="fpics">{images}</div>;
  }
}
