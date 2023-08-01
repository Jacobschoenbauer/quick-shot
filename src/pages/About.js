import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const homeImage = data.homeImage.map(({ alt, src }) => (
  <div>
    <img className="aboutMain" src={src} alt={alt} />
  </div>
));

export default class About extends Component {
  render() {
    const {
      about: { about },
      product:{product1, product2, product3, product4, product5, product6}
    } = data;

    return (
      <div>
        <article className="about-flex">
          <section className="about-product">
            <div className="about-work">{product1}</div>
            <div className="about-work">{product2}</div>
            <div className="about-work">{product3}</div>
            <div className="about-work">{product4}</div>
            <div className="about-work">{product5}</div>
            <div className="about-work">{product6}</div>
          </section>
          <section className="about-story">{about}</section>
          <section className="about-photo">{homeImage} </section>
        </article>
      </div>
    );
  }
}
