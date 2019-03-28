import React from "react"

import Heading from "../core/Heading"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "../core/Container"
import SubmitForm from "../components/SubmitForm"
import { Column, ColumnContainer } from "../core/Columns"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <Heading>Submit you question</Heading>
      <ColumnContainer>
        <Column>
          <SubmitForm />
        </Column>
        <Column>
        
        </Column>
      </ColumnContainer>
    </Container>
  </Layout>
)

export default SecondPage
