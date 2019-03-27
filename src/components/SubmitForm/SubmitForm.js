import React from "react"
import PropTypes from "prop-types"
import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"
import { withFirebase } from "../../firebase"

const SubmitForm = ({ firebase }) => (
  <Form
    onSubmit={() => {
      console.log("Creating entry")
      firebase.createEntry({
        category: "JavaScript",
        created_at: new Date(),
        level: "Junior",
        published: false,
        text: "Upload przykładowego pytania.",
      })
    }}
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
)

SubmitForm.propTypes = {
  firebase: PropTypes.object.isRequired,
}

export default withFirebase(SubmitForm)
