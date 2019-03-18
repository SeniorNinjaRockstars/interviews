import React from "react"
import { Link } from "gatsby"

import Button from "../atoms/Button"
import HeroCarousel from "../components/HeroCarousel"
import Layout from "../containers/Layout"
import SEO from "../containers/SEO"

import ImageJS from "../images/js.svg"
import ImagePython from "../images/python.svg"
import ImageCPlusPlus from "../images/cplusplus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
      <HeroCarousel
        dynamicList={[
          {
            title: "How well do you know your JavaScript?",
            image: ImageJS
          },
          {
            title: "How well do you know your Python?",
            image: ImagePython
          },
          {
            title: "How well do you know your C++?",
            image: ImageCPlusPlus
          }
        ]}
        duration={8000}
      >
        <p>Interit lets you browse thousands of technical IT questions knowledge of will help you land the job you've always been dreaming of.</p>
        <Button as={Link} to="browse" primary>Browse questions</Button>
      </HeroCarousel>
    </main>
  </Layout>
)

export default IndexPage
