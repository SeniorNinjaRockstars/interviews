import React from "react"
import PropTypes from "prop-types"
import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"
import { withFirebase } from "../../firebase"

const SubmitForm = ({ firebase }) => (
  <Form
    onSubmit={({ category, level, text }) => {
      firebase.createEntry({
        category, level, text,
      })
    }}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <Field name="category" component="select" isRequired>
            <option value="JavaScript">JavaScipt</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </Field>
        </div>

        <div>
          <label>Level</label>
          <Field name="level" component="select" isRequired>
            <option value="junior">Junior</option>
            <option value="regular">Regular</option>
            <option value="senior">Senior</option>
          </Field>
        </div>

        <div>
          <Field
            name="captcha"
            render={({ input }) => (
              <ReCAPTCHA sitekey={process.env.CAPTCHA_PUBLIC} {...input} />
            )}
          />
        </div>

        <div>
          <label>Your question</label>
          <Field
            name="text"
            component="textarea"
            placeholder="Your question"
            isRequired
          />
        </div>
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
