import React, { useState } from "react"
import "../styles/components/contact-form/contact-form.css"
import { Formik } from "formik";

export default () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Thank you for your message - I'll get back to you as soon as possible!"))
      .catch(error => alert(error));

    e.preventDefault();

    setFormState({
      name: "",
      email: "",
      message: ""
    }
    );
  }

  return (  
      <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input required="true" id="name" type="text" onChange={handleChange} value={formState.name} name="name"/>
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required="true" type="email" className="form-control" id="email" type="email" onChange={handleChange} value={formState.email} name="email"/>

        </div>

        <div className="form-group">
            <label htmlFor="message">Message </label>
            <textarea required="true" id="message" onChange={handleChange} value={formState.message} name="message" rows="4"></textarea>
        </div>

      <button className="btn-primary" type="submit">Send Message</button>
    </form>
  )
}