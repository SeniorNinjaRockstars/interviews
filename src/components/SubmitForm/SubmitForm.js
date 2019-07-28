import React, { Component } from "react"
import PropTypes from "prop-types"
import { Form, Field } from "react-final-form"
// import ReCAPTCHA from "react-google-recaptcha"
import { withFirebase } from "../../firebase"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import Label from "../../core/Label"
import Button from "../../core/Button"

import { Select, FieldWrapper, MDEWrapper } from "./SubmitForm.styled"

import { required } from "../../validators"

const SubmitForm = ({ firebase }) => (
  <Form
    onSubmit={({ category, level, mde }) => (
      firebase.createEntry({
        category: category.value,
        level: level.value,
        text: mde,
      })
    )}
    render={({ handleSubmit, pristine, invalid, submitting, form }) => (
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
            .then(() => form.reset())
        }}
        noValidate
      >
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
            name="mde"
            validate={required}
            render={({ meta, input: { value, onChange, onBlur } }) => (
              <MDEWrapper error={meta.touched && meta.error}>
                <SimpleMDE
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  placeholder="Your question..."
                  options={{
                    autoDownloadFontAwesome: true,
                    renderingConfig: {
                      codeSyntaxHighlighting: true,
                    },
                    spellChecker: false,
                    status: false,
                    toolbar: ["code", "quote", "unordered-list",  "ordered-list", "|", "preview", "|", "guide"],
                  }}
                />
              </MDEWrapper>
              
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
