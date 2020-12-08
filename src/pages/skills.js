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
          <Fade>
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
                    <div className="skills-row">
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\affinity.png" alt="Affinity"/>
                        <p className="skills-text">Affinity</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\figma.png" alt="Figma"/>
                        <p className="skills-text">Figma</p>
                      </div>
                    </div>
                    <div className="skills-row">
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\vsc.png" alt="Visual Studio Code"/>
                        <p className="skills-text">VSC</p>
                      </div>
                    </div>
                    <div className="skills-row">
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\cpanel.png" alt="Cpanel"/>
                        <p className="skills-text">Cpanel</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\filezilla.png" alt="Filezilla"/>
                        <p className="skills-text">Filezilla</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\github.png" alt="Github"/>
                        <p className="skills-text">Github</p>
                      </div>
                    </div>
                    <div className="skills-row">
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\html5.png" alt="HTML5"/>
                        <p className="skills-text">HTML 5</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\scss.png" alt="SCSS"/>
                        <p className="skills-text">SCSS</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\bootstrap.png" alt="Bootstrap"/>
                        <p className="skills-text">Bootstrap</p>
                      </div>
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\wordpress.png" alt="Wordpress"/>
                        <p className="skills-text">Wordpress</p>
                      </div>
                    </div>
                    <div className="skills-row">
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\js.png" alt="Javascript"/>
                        <p className="skills-text">Javascript</p>
                      </div>                    
                      <div className="skills-row-item">
                        <img className="skills-logo" src="\img\skills-logos\react.png" alt="React"/>
                        <p className="skills-text">React</p>
                      </div>                    
                    </div>
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
