import React, { Component } from "react";
import data from "../Data/Data.json";
import { Link } from "react-router-dom";
import "../App.css";
const logo = data.logo.map(({ alt, src }) => (
  <div>
    <img className="logo" src={src} alt={alt} />
  </div>
));
const images = data.images.map(({ alt, src }) => (
  <div>
    <img className="header-images" src={src} alt={alt} />
  </div>
));

export default class Nav extends Component {
  render() {
    const {
      about: { telephone, slogan, serviceOne, serviceTwo },
    } = data;

    return (
      <div className="nav-all">
        <div className="logo-box">
          <div className="logo">{logo}</div>
        </div>
        <div className="navbox">
          <section className="navgate">
            <div className="nav">
              <div>
                <Link className="about" to="/">
                  About
                </Link>
                <Link className="service" to="/ServiceOne">
                  {serviceOne}
                </Link>
                <Link className="service" to="/ServiceTwo">
                  {serviceTwo}
                </Link>
                <Link className="contact" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="num">
                <div>Call</div>
                <a className="phone" href="tel:651-500-1758">
                  {telephone}
                </a>
                <div>for a free estimate</div>
              </div>
            </div>
          </section>
          <div className="fpics">{images}</div>;
          <div className="slogan">{slogan}</div>
        </div>
      </div>
    );
  }
}
