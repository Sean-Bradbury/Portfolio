import React, { useState } from "react";
import Head from "../shared/Head";
import Nav from "../components/nav";
import ButtonPrimary from "../components/button-primary";
import NextPageLink from "../components/Next-page-link";
import TimelineSection from "../components/timeline-section";
import TimeLineData from "../data/timeline-data";
import Tabs from "../components/Tabs";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Slide from "react-reveal/Slide";
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
    <div className="contact-container">
      <Nav />
      <Head 
        title="Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
        <section id="contact">
          <Fade>
              <div className="contact-content">                       
                <div className="contact-content-left">
                  <h1 className="heading-green">
                    Contact Me
                  </h1>
                  <p>
                    If you’re looking for a passionate web developer to work with you on your project, please get in touch. I’d love to hear from you.
                  </p>
                </div>
                <div className="contact-content-right">
                  <div className="contact-form-container">
                    <form action="" method="post">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5"></textarea>
                      </div>
                      <button className="btn-primary" type="submit">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </Fade> 
        </section>
    </div>
  )
  
    
}
