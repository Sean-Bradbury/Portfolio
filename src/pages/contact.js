import React from "react";
import Head from "../shared/Head";
import Nav from "../components/nav";
import ContactForm from "../components/ContactForm";
import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";

export default function Contact() {

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

                    <ContactForm />

                  </div>
                </div>
              </div>
            </Fade> 
        </section>
        <script src="../scripts/validation.js"></script>
    </div>
  )
  
    
}
