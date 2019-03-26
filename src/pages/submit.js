import React from "react"
import { Link } from "gatsby"

import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"

import Heading from "../core/Heading"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "../core/Container";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <Heading>Submit you question</Heading>
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
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

            {/* <div>
              <Field
                name="captcha"
                render={({ input }) => (
                  <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_PUBLIC} {...input} />
                )}
              />
            </div> */}

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
    </Container>
    
  </Layout>
)

export default SecondPage
