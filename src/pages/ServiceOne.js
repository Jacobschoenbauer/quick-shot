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
      service: { serviceOne },
      product: { product1, product2, product3},
    } = data;

    return (
      <div>
        <article className="servive-flex">
          <section className="service-story">{serviceOne}</section>
          <section className="service-product">
            <div className="service-photo-section">
              <div className="serviveProduct">{product1}</div>
              <div className="serviveProduct-photo1">{product1Photo}</div>
            </div>
            <div className="service-photo-section">
              <div className="serviveProduct">{product2}</div>
              <div className="serviveProduct-photo2">{product2Photo}</div>
            </div>
            <div className="service-photo-section">
              <div className="serviveProduct">{product3}</div>
              <div className="serviveProduct-photo3">{product3Photo}</div>
            </div>
           
          </section>
        </article>
      </div>
    );
  }
}