import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css"
export default class Contact extends Component {
    render() {
      const {
        about: {  telephone, email },
      } = data;
  
    
    return (
        <div>
         <a className="phone" href="tel:651-500-1758">
                {telephone}
              </a>
              <a className="email" href="mailto:davesnewlookservices@gmail.com">
                {email}
              </a> 
        </div>
    )
}
}