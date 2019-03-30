import React from "react"
import styled, { withTheme } from "styled-components"
import ReactSelect from "react-select"

export const Select = withTheme(
  ({ theme, error, ...props }) => (
    <ReactSelect {...props} styles={{
      option: (provided, state) => ({
        ...provided,
        borderRadius: theme.size.borderRadius,
        color: state.isSelected ? theme.color.text.primary : theme.color.text.tertiary,
        padding: "10px 20px",
        background: "transparent",
        '&:hover': {
          background: "inherit",
        },
      }),
      singleValue: (provided) => ({
        ...provided,
        color: theme.color.text.primary,
      }),
      control: (provided, state) => ({
        ...provided,
        color: theme.color.text.primary,
        borderStyle: "solid",
        borderWidth: theme.size.border.base,
        borderRadius: theme.size.borderRadius,
        borderColor: theme.color.elements.border,
        backgroundColor: theme.color.background.secondary,
        boxShadow: (state.isFocused && theme.effects.outline.base) 
          || (error && theme.effects.outline.error),
        padding: "2px 10px",
        '&:hover': {
          borderColor: theme.color.elements.border,
        },
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: theme.color.background.secondary,
        borderRadius: theme.size.borderRadius,
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? theme.color.text.primary : theme.color.text.tertiary,
        "&:hover": {
          color: "inherit",
        },
      })
    }} />
  )
)

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`
