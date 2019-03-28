import React from "react"
import styled, { withTheme } from "styled-components"
import ReactSelect from "react-select"

export const Select = withTheme(
  ({ theme, ...props }) => (
    <ReactSelect {...props} styles={{
      option: (provided) => ({
        ...provided,
        borderRadius: theme.size.borderRadius,
        padding: "10px 20px"
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: theme.color.text.primary,
      }),
      control: (provided) => ({
        ...provided,
        color: theme.color.text.primary,
        borderStyle: "solid",
        borderWidth: theme.size.border.base,
        borderRadius: theme.size.borderRadius,
        borderColor: theme.color.elements.border,
        backgroundColor: theme.color.background.secondary,
        padding: "2px 10px"
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: theme.color.background.secondary,
        borderRadius: theme.size.borderRadius,
      }),
    }} />
  )
)

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`
