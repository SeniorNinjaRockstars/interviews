import React from "react"
import { Link } from "gatsby"

import Button from "../atoms/Button"
import HeroCarousel from "../components/HeroCarousel"
import Layout from "../containers/Layout"
import SEO from "../containers/SEO"

import imageJS from "../images/js.svg"
import imagePython from "../images/python.svg"
import imageCPlusPlus from "../images/cplusplus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
      <HeroCarousel
        dynamicList={[
          {
            title: "How well do you know your JavaScript?",
            image: imageJS
          },
          {
            title: "How well do you know your Python?",
            image: imagePython
          },
          {
            title: "How well do you know your C++?",
            image: imageCPlusPlus
          }
        ]}
      >
        <p>Interit lets you browse thousands of technical IT questions knowledge of will help you land the job you've always been dreaming of.</p>
        <Button as={Link} to="browse" primary>Browse questions</Button>
      </HeroCarousel>
    </main>
  </Layout>
)

export default IndexPage
