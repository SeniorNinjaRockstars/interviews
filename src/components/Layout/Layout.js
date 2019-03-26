import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Firebase, { FirebaseContext } from "../../firebase"

import Header from "../Header"
import Footer from "../Footer"
import theme from "../../core/theme"
import GlobalStyle from "../../core/GlobalStyle"

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
        <FirebaseContext.Provider value={new Firebase()}>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </FirebaseContext.Provider>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
