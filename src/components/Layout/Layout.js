import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { getFirebase, FirebaseContext } from "../../firebase"

import Header from "../Header"
import Footer from "../Footer"
import theme from "../../core/theme"
import GlobalStyle from "../../core/GlobalStyle"

class Layout extends Component {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const app = import('firebase/app')
    const firestore = import('firebase/firestore')

    Promise
      .all([app, firestore])
      .then(([app]) => {
        const firebase = getFirebase(app)
        this.setState({ firebase })
      });
  }

  render() {
    const { children } = this.props;

    return (
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
            <FirebaseContext.Provider value={this.state.firebase}>
              <GlobalStyle />
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
              <Footer />
            </FirebaseContext.Provider>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
