import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const phoneLogo = data.phoneLogo.map(({ alt, src }) => (
  <div>
    <img className="contact-image" src={src} alt={alt} />
  </div>
));
const emailLogo = data.emailLogo.map(({ alt, src }) => (
  <div>
    <img className="contact-image" src={src} alt={alt} />
  </div>
));

export default class Contact extends Component {
  render() {
    const {
      about: { introContact },
    } = data;

    return (
      <div>
        <article className="contact-flex">
          <section className="intro-contact"><h3>{introContact}</h3></section>
          <section className="contact-phone">
            <a className="phone contactImage" href="tel:651-500-1758">
              {phoneLogo}
            </a>
            <div>Phone</div>
          </section>
          <section className="contact-email contactImage">
            <a className="email" href="mailto:davesnewlookservices@gmail.com">
              {emailLogo}
            </a>
            <div>Email</div>
          </section>
        </article>
      </div>
    );
  }
}
