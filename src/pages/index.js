import React from "react";
import Head from "../shared/head";
import Nav from "../components/nav";
import ButtonPrimary from "../components/button-primary";
import Helmet from "react-helmet";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className="website">
    <Slide left delay={1400}>
      <Nav />
    </Slide>
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
                  />
                </div>
                <div className="home-content-right">
                  <div className="headshot-container">
                    <img className="headshot" src={"../../img/sean-bradbury-headshot.jpg"} alt="Sean Bradbury" srcset="../../img/sean-bradbury-headshot.jpg"/>
                  </div>
                </div>
              </div>
              <div className="next-page-link">About <img className="next-page-link-arrow" src={"../../img/nav-icons/Arrow.png"} alt="Arrow" srcset="../../img/nav-icons/Arrow.png"/></div>
            </Slide>   
        </section>
      </Fade>
    </div>
  )
  
    
}
