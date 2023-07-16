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
      product: { product1, product2, product3, product4, product5, product6 },
    } = data;

    return (
      <div>
        <h1 className="slogan">{slogan}</h1>
        <div className="home-flex">
          <section className="home-product">
            <div className="service">{product1}</div>
            <div className="service">{product2}</div>
            <div className="service">{product3}</div>
          </section>
          <section className="home-center">
            <div className="home-image">{homeImage}</div>
          </section>
          <section className="home-product">
            <div className="service">{product4}</div>
            <div className="service">{product5}</div>
            <div className="service">{product6}</div>
          </section>
          
        </div>
       
      </div>
    );
  }
}
