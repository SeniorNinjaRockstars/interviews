import React from "react"

import Heading from "../core/Heading"
import Card from "../core/Card"
import QuickLink from "../core/QuickLink"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "../core/Containers"
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
          <Card secondary>
            <h2>Thanks for taking your time!</h2>
            <p>Interit lets you browse thousands of technical IT questions knowledge of will help you land the job you've always been dreaming of.</p>
            <QuickLink href="https://facebook.com" target="_blank">Follow us on Facebook</QuickLink>
          </Card>
        </Column>
      </ColumnContainer>
    </Container>
  </Layout>
)

export default SecondPage
