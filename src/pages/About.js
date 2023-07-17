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
      about: { about },
      product: { product1, product2, product3, product4, product5, product6 },
    } = data;

    return (
      <div>
        <article className="about-flex">
          <section className="about-story">{about}</section>
          <section className="about-product">
            <div className="about-photo-section">
              <div className="aboutProduct">{product1}</div>
              <div className="aboutProduct-photo1">{product1Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product2}</div>
              <div className="aboutProduct-photo2">{product2Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product3}</div>
              <div className="aboutProduct-photo3">{product3Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product4}</div>
              <div className="aboutProduct-photo4">{product4Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product5}</div>
              <div className="aboutProduct-photo5">{product5Photo}</div>
            </div>
            <div className="about-photo-section">
              <div className="aboutProduct">{product6}</div>
              <div className="aboutProduct-photo6">{product6Photo}</div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
