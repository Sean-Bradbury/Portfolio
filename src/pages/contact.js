import React from "react";
import Head from "../shared/HeadShared";
import Nav from "../components/NavComponent";
import ContactForm from "../components/ContactForm";
import Fade from "react-reveal/Fade";
import "../styles/components/contact-form/contact-form.css"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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
                    <div className="profile-item"><a className="profile-item-link" href="https://github.com/Sean-Bradbury" target="_blank" rel="noreferrer"><img src="/img/contact/github.png" alt="GitHub" className="profile-logo"/> <div className="profile-text">Github</div></a></div>
                    <div className="profile-item"><a className="profile-item-link" href="https://www.frontendmentor.io/profile/Sean-Bradbury" target="_blank" rel="noreferrer"><img src="/img/contact/fem.png" alt="Front End Mentor" className="profile-logo"/> <div className="profile-text">Front End Mentor</div></a></div>
                  </div>
                </div>
                <div className="contact-content-right">
                  <div className="contact-form-container">

                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      message: '',
                    }}
                    onSubmit={
                      (values, actions) => {
                        fetch("/", {
                          method: "POST",
                          headers: { "Content-Type": "application/x-www-form-urlencoded" },
                          body: encode({ "form-name": "contact-demo", ...values })
                        })
                        .then(() => {
                          alert('Success');
                          actions.resetForm()
                        })
                        .catch(() => {
                          alert('Error');
                        })
                        .finally(() => actions.setSubmitting(false))
                      }
                    }
                    validate={values => {
                      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                      const errors = {};
                      if(!values.name) {
                        errors.name = 'Name Required'
                      }
                      if(!values.email || !emailRegex.test(values.email)) {
                        errors.email = 'Valid Email Required'
                      }
                      if(!values.message) {
                        errors.message = 'Message Required'
                      }
                      return errors;
                    }}
                  >
                  {() => (
                    <Form name="portfolio-form" data-netlify={true}>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <Field name="name" />
                            <div className="error">
                                <ErrorMessage name="name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <Field name="email" />
                            <div className="error">
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message: </label>
                            <Field name="message" component="textarea" rows="4"/>
                            <div className="error">
                                <ErrorMessage name="message" />
                            </div>
                        </div>

                      <button className="btn-primary" type="submit">Send Message</button>
                    </Form>
                  )}
                  </Formik>

                  </div>
                </div>
              </div>
            </Fade> 
        </section>
        <script src="../scripts/validation.js"></script>
    </div>
  )
  
    
}
