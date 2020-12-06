import React, { useState } from "react";
import Head from "../shared/Head";
import Nav from "../components/nav";
import ButtonPrimary from "../components/button-primary";
import NextPageLink from "../components/Next-page-link";
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
        <section id="skills">
          <Fade delay={500}>
              <div className="skills-content">                       
                <div className="skills-content-left">
                  <h1 className="heading-green">
                    Skills
                  </h1>
                  <p>
                    Hi my name’s Sean Bradbury, I originally started my career in the web industry 10 years ago. Working a large portion of this as a paid marketer. 
                    <br />
                    <br />
                    I noticed through creating high converting landing pages and wordpress websites for friends & family  that I had a passion for design. A yearning for a more creative work began and I started my web development journey.
                    <br />
                    <br />
                    My analytical/logical side loves to code and my artistic side loves to create. I revel in the challenges of problem solving and I’m excited by the continual growth availble through this profession.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="skills-content-right">
                  <div className="skills-container">
                    <p>
                      Hi my name’s Sean Bradbury, I originally started my career in the web industry 10 years ago. Working a large portion of this as a paid marketer. 
                      <br />
                      <br />
                      I noticed through creating high converting landing pages and wordpress websites for friends & family  that I had a passion for design. A yearning for a more creative work began and I started my web development journey.
                      <br />
                      <br />
                      My analytical/logical side loves to code and my artistic side loves to create. I revel in the challenges of problem solving and I’m excited by the continual growth availble through this profession.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <Fade delay={4000}>  
                <NextPageLink 
                  linkText="portfolio"
                  linkLocation="/portfolio/"
                />
              </Fade>
            </Fade> 
        </section>
    </div>
  )
  
    
}
