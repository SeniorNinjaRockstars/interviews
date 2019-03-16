import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "../Header"
import Footer from "../Footer/Footer"
import theme from "../../styles/theme"
import GlobalStyle from '../../styles/GlobalStyle'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
