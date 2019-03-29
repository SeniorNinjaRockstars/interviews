import React from "react"
import PropTypes from "prop-types"
import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"
import { withFirebase } from "../../firebase"

import Label from "../../core/Label"
import Textarea from "../../core/Textarea"
import Button from "../../core/Button"

import { Select, FieldWrapper } from "./SubmitForm.styled"

const SubmitForm = ({ firebase }) => (
  <Form
    onSubmit={({ category, level, text }) => {
      console.log(category, level, text)
      // firebase.createEntry({
      //   category, level, text,
      // })
    }}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <FieldWrapper>
          <Label>Category</Label>
          <Field
            name="category"
            required
            render={({ input, meta }) => (
              <Select {...input} placeholder="Choose category..." options={[
                { value: "JavaScript", label: "JavaScript" },
                { value: "Python", label: "Python" },
                { value: "C++", label: "C++" }
              ]} />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Level</Label>
          <Field
            name="level"
            required
            render={({ input, meta }) => (
              <Select {...input} placeholder="Choose level..." options={[
                { value: "junior", label: "Junior" },
                { value: "regular", label: "Regular" },
                { value: "senior", label: "Senior" }
              ]} />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Field
            name="captcha"
            render={({ input }) => (
              <ReCAPTCHA sitekey={process.env.CAPTCHA_PUBLIC} {...input} />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Your question</Label>
          <Field
            name="text"
            component={Textarea}
            placeholder="Your question..."
            required
            rows={4}
          />
        </FieldWrapper>
        <Button as="button" type="submit" disabled={pristine || invalid}>
          Submit
        </Button>
      </form>
    )}
  />
)

SubmitForm.propTypes = {
  firebase: PropTypes.object.isRequired,
}

export default withFirebase(SubmitForm)
