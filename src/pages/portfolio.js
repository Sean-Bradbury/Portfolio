import React from "react";
import Head from "../shared/Head";
import Nav from "../components/nav";
import NextPageLink from "../components/Next-page-link";
import Portfolio from "../components/portfolio-item";
import Fade from "react-reveal/Fade";
import PortfolioData from "../data/portfolio-data";

export default function Home() {
  function createPortfolioItem(item){
    return (
        <Portfolio
          title={item.title}
          tech={item.tech}
          viewSiteLink={item.viewSiteLink}
          viewSiteCode={item.viewSiteCode}
          image={item.image}
        />
    )
  }

  return (
    <div>
      <Nav />
      <Head 
        title="Sean Bradbury | Portfolio | Web Development"
        metaDesc="Portfolio of Web Development including work built with various technologies including HTML5, SCSS, Javascript, React & more."
      />
        <section id="portfolio">
          <Fade>
              <div className="portfolio-content"> 
                <h1 className="heading-green">
                  Portfolio
                </h1>
                <div className="portfolio-items">
                  {PortfolioData.map(createPortfolioItem)}
                </div>
              </div>
              </Fade> 
              <NextPageLink 
                linkText="contact"
                linkLocation="/contact/"
              />
        </section>
        
    </div>
  )
  
    
}
