import React from "react"
import { Link } from "gatsby"

import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Form
      onSubmit={() => fetch("/.netlify/handle")}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <h2>Submit you question</h2>
          <div>
            <label>First Name</label>
            <Field
              name="firstname"
              component="input"
              placeholder="First Name"
            />
          </div>

          <div>
            <label>E-mail address</label>
            <Field name="email" component="input" placeholder="E-mail" />
          </div>

          <div>
            <Field
              name="captcha"
              render={({ input }) => (
                <ReCAPTCHA sitekey={process.env.CAPTCHA_PUBLIC} {...input} />
              )}
            />
          </div>

          <Field
            name="question"
            render={({ input, meta }) => (
              <div>
                <label>Your question</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />

          <button type="submit" disabled={pristine || invalid}>
            Submit
          </button>
        </form>
      )}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
