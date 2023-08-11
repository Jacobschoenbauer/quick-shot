import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";

const product4Photo = data.product.product4Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product5Photo = data.product.product5Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product6Photo = data.product.product6Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
export default class About extends Component {
  render() {
    const {
      service: { serviceTwo },
      about: { about },
      product: { product4, product5, product6 },
    } = data;

    return (
      <div className="service-two-background">
        <section className="service-two-title">{serviceTwo}</section>
        <article className="service-one-main">
          <section className="">
            <div className="">
              <div className="">{product4}</div>
              <div className="">{product4Photo}</div>
            </div>
            <div className="">
              <div className="">{product5}</div>
              <div className="">{product5Photo}</div>
            </div>
            <div className="">
              <div className="">{product6}</div>
              <div className="">{product6Photo}</div>
            </div>
          </section>
          <section className="service-one-about">{about}</section>
        </article>
      </div>
    );
  }
}
