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
      <HeroCarousel>
        <p>Interit lets you browse thousands of technical IT questions knowledge of will help you land the job you've always been dreaming of.</p>
        <Button as={Link} to="browse" primary>Browse questions</Button>
      </HeroCarousel>
    </main>
  </Layout>
)

export default IndexPage
