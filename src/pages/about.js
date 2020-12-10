import React from "react";
import Head from "../shared/Head";
import Nav from "../components/Nav";
import NextPageLink from "../components/NextPageLink";
import TimelineSection from "../components/TimelineSection";
import TimeLineData from "../data/timeline-data";
import Tabs from "../components/Tabs";
import Fade from "react-reveal/Fade";

export default function Home() {

  function createTimelineItem(item) {
    return (
      <TimelineSection 
        key= {item.id}
        dateFrom= {item.dateFrom}
        dateTo= {item.dateTo}
        contentText= {item.contentText}
      />
    );
  }

  return (
    <div className="website">
      <Nav />
      <Head 
        title="Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
        <section id="about">
          <Fade>
              <div className="about-content">                       
                <div className="about-content-left">
                  <h1 className="heading-green">
                    About
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
                <div className="about-content-right">
                  <div className="experience-container">
                  <Tabs> 
                    <div label="Personal"> 
                      <p>Personal</p>
                      <div className="personal-item">
                        <div className="personal-item-content">
                          <p>The Complete 2020 Web Development Bootcamp - Course (55hrs)</p>
                        </div>
                        <div className="personal-item-links">
                          <button className="btn-primary"><a href="\pdf\The-Web-Development-Bootcamp.pdf">Certificate</a></button>
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank">Course Link</a></button>
                        </div>
                      </div>
                      <div className="personal-item">
                        <div className="personal-item-content">
                          <p>Modern HTML & CSS From The Beginning - Course (21hrs)</p>
                        </div>
                        <div className="personal-item-links">
                          <button className="btn-primary"><a href="\pdf\Modern-HTML&CSS-From-The-Begining.pdf">Certificate</a></button>
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/" target="_blank">Course Link</a></button>
                        </div>
                      </div>
                      <div className="personal-item">
                        <div className="personal-item-content">
                          <p>Web Design For Web Developers - Course (3hrs)</p>
                        </div>
                        <div className="personal-item-links">
                          <button className="btn-primary"><a href="\pdf\Web-Design-For-Web-Developers.pdf">Certificate</a></button>
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/web-design-secrets/" target="_blank">Course Link</a></button>
                        </div>
                      </div>
                      
                    </div> 
                    <div label="Work"> 
                      <p>Experience</p>
                      <div className="timeline-container">
                        {TimeLineData.map(createTimelineItem)}
                      </div>
                    </div>
                  </Tabs> 
                  </div>
                </div>
              </div>
              <Fade delay={4000}>  
                <NextPageLink 
                  linkText="skills"
                  linkLocation="/skills/"
                />
              </Fade>
            </Fade> 
        </section>
    </div>
  )
  
    
}
