import React from "react";
import Head from "../components/head";

export default function Home() {
  return (
    <div className="website">
      <section id="home">
        <div className="home-content">
          <div className="home-content-left">
            <h1 className="lead">
              Hi,
              <br></br>
              I'm Sean,
              <br></br>
              Web Deveoper,
              <br></br>
              from Nottingham
              <br></br>
            </h1>
            <p className="subtitle">Front-end Developer / Programmer / Paid Marketer</p>
            <button className="btn-primary"><div className="btn-text">GET IN TOUCH</div></button>
          </div>
          <div className="home-content-right">
            <div className="headshot-container">
              <img className="headshot" src={"../../img/sean-bradbury-headshot.jpg"} alt="Sean Bradbury" srcset="../../img/sean-bradbury-headshot.jpg"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
  
    
}
