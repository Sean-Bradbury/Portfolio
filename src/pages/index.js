import React from "react";
import Head from "../shared/head";
import Nav from "../components/nav";
import ButtonPrimary from "../components/button-primary";
import NextPageLink from "../components/next-page-link";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className="website">
      <Nav />
      <Head 
        title="Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
      <Fade delay={1200}>
        <section id="home">
            <Slide top delay={1400}>
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
                  <p className="subtitle">Full Stack Developer / Paid Marketer</p>
                  <ButtonPrimary 
                    text="GET IN TOUCH"
                    link="/contact/"
                  />
                </div>
                <div className="home-content-right">
                  <div className="headshot-container">
                    <img className="headshot" src={"../../img/sean-bradbury-headshot.jpg"} alt="Sean Bradbury" srcset="../../img/sean-bradbury-headshot.jpg"/>
                  </div>
                </div>
              </div>

              <Fade delay={5000}>              
                <NextPageLink 
                  linkText="about"
                  linkLocation="/about/"
                />
              </Fade>

            </Slide>   
        </section>
      </Fade>
    </div>
  )
  
    
}