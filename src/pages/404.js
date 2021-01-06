import React from "react";
import Head from "../shared/HeadShared";
import Nav from "../components/NavComponent";
import Fade from "react-reveal/Fade";
import "../styles/components/404/404.css"
import { Link } from "gatsby";

export default function Contact() {

  return (
    <div className="error-container">
      <Nav />
      <Head 
        title="404 Error | Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
        <section id="error-section">
          <Fade>
              <div className="error-content">                       
                <div className="error-content-left">
                  <h1 className="heading-green">
                    404 Error
                  </h1>
                  <p>
                    Oops! Unfortunately the page you're looking for has been removed or redacted.
                  </p>
                  <button className="btn-primary">
                    <Link to="/">Go to homepage</Link>
                  </button>
              
                </div>
              </div>
            </Fade> 
        </section>
        <script src="../scripts/validation.js"></script>
    </div>
  )
  
    
}
