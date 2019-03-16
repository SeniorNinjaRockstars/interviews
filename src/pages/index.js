import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tabs from "../components/Tabs"
import Main from "../components/Main"
import Badge from "../components/Badge/Badge"
import Card from "../components/Card/Card"

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
