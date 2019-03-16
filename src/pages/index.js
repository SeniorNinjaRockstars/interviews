import React from "react"
import { Link } from "gatsby"

import Button from "../atoms/Button"
import HeroCarousel from "../components/HeroCarousel"
import Layout from "../containers/Layout"
import SEO from "../containers/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
      <HeroCarousel
        staticContent={(
          <>
            <h1>How well do you know your C++?</h1>
            <p>Inteit lets you browse thousends of technical IT questions</p>
            <Button as={Link} to="browse" primary>Browse questions</Button>
          </>
        )}
      />
    </main>
  </Layout>
)

export default IndexPage
