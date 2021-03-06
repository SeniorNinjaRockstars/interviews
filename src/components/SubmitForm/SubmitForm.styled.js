import React from "react"
import styled, { css, withTheme } from "styled-components"
import ReactSelect from "react-select"

import { styles } from "../../core/CodeStyle";

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
        zIndex: 20,
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

export const MDEWrapper = styled.div`
  .editor-toolbar {
    background: ${({ theme }) => theme.color.background.secondary};
    border-top-left-radius: ${({ theme }) => theme.size.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.size.borderRadius};
    padding: 0 15px;
    border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};
    opacity: 1;
    
    &:hover {
      opacity: 1;
    }

    button {
      color: ${({ theme }) => theme.color.elements.icon} !important;
      transition: color ${({ theme }) => theme.effects.transition.quick};
      border-color: transparent;
      
      &:hover, &.active {
        background: transparent;
        border-color: transparent;
        color: ${({ theme }) => theme.color.text.primary} !important;
      }
    }

    .separator {
      border-color: ${({ theme }) => theme.color.elements.border}
    }

    &.disabled-for-preview {
      button {
        color: ${({ theme }) => theme.color.elements.border} !important;
        background: transparent !important;
        border-color: transparent !important;
        
        &.active.no-disable {
          color: ${({ theme }) => theme.color.text.primary} !important;
        }
      }
    }
  }
  
  .CodeMirror {
    background: ${({ theme }) => theme.color.background.secondary};
    border-bottom-left-radius: ${({ theme }) => theme.size.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.size.borderRadius};
    border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};
    border-top: 0;
    color: ${({ theme }) => theme.color.text.primary};
    padding-left: 18px;

    ${({ theme, error }) => error && css`
      box-shadow: ${theme.effects.outline.error};
    `}
  }

  .CodeMirror-focused {
    outline: 0;
    box-shadow: ${({ theme }) => theme.effects.outline.base};
  }

  .CodeMirror-cursor {
    border-color: ${({ theme }) => theme.color.text.primary};
  }

  .editor-preview {
    background: ${({ theme }) => theme.color.background.secondary};
    padding: 10px 20px;
    
    ${styles}
  }
`
