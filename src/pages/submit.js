import React from "react"

import Heading from "../core/Heading"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "../core/Container"
import SubmitForm from "../components/SubmitForm"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <Heading>Submit you question</Heading>
      <SubmitForm />
    </Container>
  </Layout>
)

export default SecondPage
