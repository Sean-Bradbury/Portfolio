import React from "react";
import Head from "../shared/HeadShared";
import Nav from "../components/NavComponent";
import NextPageLink from "../components/NextPageLink";
import TimelineSection from "../components/TimelineSection";
import TimeLineData from "../data/timeline-data";
import Tabs from "../components/TabsComponent";
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
    <div>
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
                    Hi, my name’s Sean Bradbury. I have been working at web agencies for the last ten years, working for real businesses to improve their web presence and business gained through online means.
                    <br />
                    <br />
                    I have worked closely with professionals through many disciplines and have picked up a lot of knowledge along the way. I had dabbled with web development throughout this time, and in the last two years, I fell in love with the constant growth available through learning web development on a much deeper level.
                    <br />
                    <br />
                    I have an analytical/logical side that loves getting deep into code and an artistic side loves to create. I revel in the challenges of problem-solving and get excited by learning new technologies and frameworks. 
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
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noreferrer" download="The-Web-Development-Bootcamp.pdf">Course Link</a></button>
                        </div>
                      </div>
                      <div className="personal-item">
                        <div className="personal-item-content">
                          <p>Modern HTML & CSS From The Beginning - Course (21hrs)</p>
                        </div>
                        <div className="personal-item-links">
                          <button className="btn-primary"><a href="\pdf\Modern-HTML&CSS-From-The-Begining.pdf">Certificate</a></button>
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/" target="_blank" rel="noreferrer" download="Modern-HTML&CSS-From-The-Begining.pdf">Course Link</a></button>
                        </div>
                      </div>
                      <div className="personal-item">
                        <div className="personal-item-content">
                          <p>Web Design For Web Developers - Course (3hrs)</p>
                        </div>
                        <div className="personal-item-links">
                          <button className="btn-primary"><a href="\pdf\Web-Design-For-Web-Developers.pdf">Certificate</a></button>
                          <button className="btn-primary ml-1"><a href="https://www.udemy.com/course/web-design-secrets/" target="_blank" rel="noreferrer" download="Web-Design-For-Web-Developers.pdf">Course Link</a></button>
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
              </Fade>               
              <div className="about-next-page-link-container">              
                <Fade delay={4000}>  
                  <NextPageLink 
                    linkText="skills"
                    linkLocation="/skills/"
                  />
                </Fade>
              </div>
            </section>

    </div>
  )
  
    
}
