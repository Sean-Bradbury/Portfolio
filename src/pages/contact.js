import React from "react";
import Head from "../shared/Head";
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
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
                  <div className="profiles-container">
                    <div className="profile-item"><a className="profile-item-link" href="https://github.com/Sean-Bradbury" target="_blank"><img src="/img/contact/github.png" alt="GitHub" className="profile-logo"/> <div className="profile-text">Github</div></a></div>
                    <div className="profile-item"><a className="profile-item-link" href="https://www.frontendmentor.io/profile/Sean-Bradbury" target="_blank"><img src="/img/contact/fem.png" alt="Front End Mentor" className="profile-logo"/> <div className="profile-text">Front End Mentor</div></a></div>
                  </div>
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
