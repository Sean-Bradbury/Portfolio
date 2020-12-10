import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Styles from "../styles/components/contact-form/contact-form.css"

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
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
    <Form>
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
            <Field name="message" component="textarea"/>
            <div className="error">
                <ErrorMessage name="message" />
            </div>
        </div>

      <button className="btn-primary" type="submit">Send Message</button>
    </Form>
  )}
  </Formik>
)