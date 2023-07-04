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
      product,
    } = data;

    return (
      <div className="home-flex">
        <h1 className="slogan">{slogan}</h1>
        <div className="home-image">{homeImage}</div>
        <section className="home-product">
          <div>{product}</div>
        </section>
      </div>
    );
  }
}
