import React from "react"
// import { Formik, Form, Field, ErrorMessage } from 'formik'
import "../styles/components/contact-form/contact-form.css"

// const encode = (data) => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }


export default () => ( 
  
    <form id="form" className="form" name="portfolio-form" method="POST" data-netlify={true}>
        <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name"/>
        </div>

        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email"/>
        </div>

        <div className="form-group">
            <label htmlFor="message">Message:  </label>
            <textarea name="message" rows="4"></textarea>
        </div>

        <input type="hidden" name="portfolio-form" value="contact"></input>

      <button className="btn-primary" type="submit">Send Message</button>
    </form>
  )

  // <Formik
  //   initialValues={{
  //     name: '',
  //     email: '',
  //     message: '',
  //   }}
  //   onSubmit={
  //     (values, actions) => {
  //       fetch("/", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: encode({ "form-name": "contact-demo", ...values })
  //       })
  //       .then(() => {
  //         alert('Success');
  //         actions.resetForm()
  //       })
  //       .catch(() => {
  //         alert('Error');
  //       })
  //       .finally(() => actions.setSubmitting(false))
  //     }
  //   }
  //   validate={values => {
  //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //     const errors = {};
  //     if(!values.name) {
  //       errors.name = 'Name Required'
  //     }
  //     if(!values.email || !emailRegex.test(values.email)) {
  //       errors.email = 'Valid Email Required'
  //     }
  //     if(!values.message) {
  //       errors.message = 'Message Required'
  //     }
  //     return errors;
  //   }}
  // >
  // {() => (
  //   <Form name="portfolio-form" data-netlify={true}>
  //       <div className="form-group">
  //           <label htmlFor="name">Name: </label>
  //           <Field name="name" />
  //           <div className="error">
  //               <ErrorMessage name="name" />
  //           </div>
  //       </div>

  //       <div className="form-group">
  //           <label htmlFor="email">Email: </label>
  //           <Field name="email" />
  //           <div className="error">
  //               <ErrorMessage name="email" />
  //           </div>
  //       </div>

  //       <div className="form-group">
  //           <label htmlFor="message">Message: </label>
  //           <Field name="message" component="textarea" rows="4"/>
  //           <div className="error">
  //               <ErrorMessage name="message" />
  //           </div>
  //       </div>

  //     <button className="btn-primary" type="submit">Send Message</button>
  //   </Form>
  // )}
  // </Formik>