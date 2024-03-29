import React from "react"
import Head from "../shared/HeadShared"
import Nav from "../components/NavComponent"
import ButtonPrimary from "../components/ButtonPrimary"
import NextPageLink from "../components/NextPageLink"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"

export default function Home() {
  return (
    <div>
      <Nav />
      <Head
        title="Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
      <Fade delay={400}>
        <section id="home">
          <Slide top delay={500}>
            <div className="home-content">
              <div className="home-content-left">
                <h1 className="lead">
                  Hi,
                  <br></br>
                  I'm Sean,
                  <br></br>
                  Web Developer,
                  <br></br>
                  from Nottingham
                  <br></br>
                </h1>
                <div className="headshot-container">
                  <img
                    className="headshot"
                    src={"../../img/sean-bradbury-headshot.jpg"}
                    alt="Sean Bradbury"
                    srcSet="../../img/sean-bradbury-headshot.jpg"
                  />
                </div>
                <p className="subtitle">Front End Developer</p>
                <ButtonPrimary text="GET IN TOUCH" link="/contact/" />
              </div>
              <div className="home-content-right">
                <div className="headshot-container">
                  <img
                    className="headshot"
                    src={"../../img/sean-bradbury-headshot.jpg"}
                    alt="Sean Bradbury"
                    srcSet="../../img/sean-bradbury-headshot.jpg"
                  />
                </div>
              </div>
            </div>

            <Fade delay={4000}>
              <NextPageLink linkText="about" linkLocation="/about/" />
            </Fade>
          </Slide>
        </section>
      </Fade>
    </div>
  )
}
