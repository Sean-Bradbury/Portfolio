import React from "react";
import Head from "../shared/HeadShared";
import Nav from "../components/NavComponent";
import NextPageLink from "../components/NextPageLink";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";

export default function Home() {

  return (
    <div>
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
                    I have a growth mindset and love to learn new things. The programs and technologies on the right are just some that I am familiar with.   
                    <br />
                    <br />
                    I intend to keep expanding my knowledge, keeping up to date with the web industry, and increasing my skill set to provide the right solutions for the clients that I work with.
                    <br />
                    <br />
                    If you’re interested in working with me and would like to talk, feel free to <Link className="copy-link" to="/contact/">get in touch</Link>. 
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
              </Fade> 
              <div className="skills-next-page-link-container"> 
                <Fade delay={4000}>  
                  <NextPageLink 
                    linkText="portfolio"
                    linkLocation="/portfolio/"
                  />
                </Fade>
              </div>
        </section>
    </div>
  )
  
    
}
