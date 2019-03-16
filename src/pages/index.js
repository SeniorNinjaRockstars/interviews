import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/Layout"
import SEO from "../containers/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
      <h1>How well do you know your C++?</h1>
      <p>Inteit lets you browse thousends of technical IT questions</p>
      <Link to="browse">Browse questions</Link>
    </main>
  </Layout>
)

export default IndexPage
