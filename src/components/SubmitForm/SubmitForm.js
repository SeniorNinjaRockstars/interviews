import React from "react"
import PropTypes from "prop-types"
import { Form, Field } from "react-final-form"
import ReCAPTCHA from "react-google-recaptcha"
import { withFirebase } from "../../firebase"

import Label from "../../core/Label"
import Textarea from "../../core/Textarea"
import Button from "../../core/Button"

import { Select, FieldWrapper } from "./SubmitForm.styled"

import { required } from "../../validators"

const SubmitForm = ({ firebase }) => (
  <Form
    onSubmit={({ category, level, text }) => (
      firebase.createEntry({
        category: category.value,
        level: level.value,
        text,
      })
    )}
    render={({ handleSubmit, pristine, invalid, submitting, reset }) => (
      <form onSubmit={(e) => e.preventDefault() || handleSubmit().then(reset)}>
        <FieldWrapper>
          <Label>Category</Label>
          <Field
            name="category"
            validate={required}
            render={({ input, meta }) => (
              <Select
                {...input}
                placeholder="Choose category..."
                error={meta.error && meta.touched}
                options={[
                  { value: "JavaScript", label: "JavaScript" },
                  { value: "Python", label: "Python" },
                  { value: "C++", label: "C++" }
                ]}
              />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Level</Label>
          <Field
            name="level"
            validate={required}
            render={({ input, meta }) => (
              <Select 
                {...input}
                placeholder="Choose level..."
                error={meta.error && meta.touched}
                  options={[
                  { value: "junior", label: "Junior" },
                  { value: "regular", label: "Regular" },
                  { value: "senior", label: "Senior" }
                ]}
              />
            )}
          />
        </FieldWrapper>

        {/* <FieldWrapper>
          <Field
            name="captcha"
            render={({ input }) => (
              <ReCAPTCHA sitekey={process.env.CAPTCHA_PUBLIC} {...input} />
            )}
          />
        </FieldWrapper> */}

        <FieldWrapper>
          <Label>Your question</Label>
          <Field
            name="text"
            validate={required}
            render={({ input, meta }) => (
              <>
                <Textarea
                  {...input}
                  placeholder="Your question..."
                  rows={4}
                  error={meta.error && meta.touched}
                />
              </>
            )}
          />
        </FieldWrapper>
        <Button as="button" type="submit" disabled={pristine || invalid || submitting}>
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
