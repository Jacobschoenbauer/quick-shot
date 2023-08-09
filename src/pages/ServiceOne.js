import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const product1Photo = data.product.product1Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product2Photo = data.product.product2Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product3Photo = data.product.product3Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));

export default class ServiceOne extends Component {
  render() {
    const {
      about: { about },
      service: { serviceOne },
      product: { product1, product2, product3 },
    } = data;

    return (
      <div>
        <section className="service-title"><div>{serviceOne}</div></section>
        <article className="service-flex-one ">
          <section className="about-story">
            <div className="actual-story">{about}</div>
          </section>
          <section className="about-service">
            <div className="about-photo-section">
              <div className="aboutProduct">{product1}</div>
              <div className="aboutProduct-photo4">{product1Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product2}</div>
              <div className="aboutProduct-photo5">{product2Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product3}</div>
              <div className="aboutProduct-photo6">{product3Photo}</div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
