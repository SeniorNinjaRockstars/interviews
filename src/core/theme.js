import { css } from "styled-components"

export const breakpoints = {
  tablet: 1040,
  mobile: 640
}

export const mediaQueries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `

  return acc
}, {})

const theme = {
  name: "DEFAULT",
  color: {
    accent: {
      primary: "#09FFBF",
    },
    context: {
      javascript: '#CCA31F',
      python: '#1AEF61',
      cplusplus: '#1A84EF',
    },
    background: {
      primary: "#0A1723",
      secondary: "#121E2A",
      base: "#0A1723",
      dark: "#000",
    },
    text: {
      primary: "#FFF",
      secondary: "rgba(255, 255, 255, 0.75)",
      tertiary: "rgba(255, 255, 255, 0.5)",
      base: "rgba(255, 255, 255, 0.75)",
    },
    elements: {
      menu: '#fff',
    },
    state: {
    }
  },
  font: {
    family: "'Nunito Sans', sans-serif",
    size: {
      base: "16px",
      heading: {
        primary: "4rem",
        secondary: "3rem",
        tertiary: "2rem",
        base: "1rem"
      },
      label: {
        primary: "1.25rem",
        secondary: "0.875rem",
        tertiary: "0.75rem",
        base: "1rem"
      }
    },
    weight: {
      base: "400",
      bold: "700",
      extraBold: "800",
    },
    lineHeight: {
      tiny: "1.15",
      small: "1.3",
      medium: "1.6",
      large: "2.0",
    }
  },
  size: {
    border: {
      base: "2px",
    },
    borderRadius: "24px",
  },
  effects: {
    transition: {
      quick: "0.2s ease-out",
      base: "0.4s ease-out",
      slow: "1s ease-out",
    },
  },
  media: mediaQueries
}

export default theme
