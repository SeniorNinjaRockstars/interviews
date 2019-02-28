import React from "react"
import { Link } from "gatsby"

import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

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
              render={({input}) =><ReCAPTCHA sitekey={process.env.CAPTCHA_PUBLIC} {...input} />
              }
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

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
