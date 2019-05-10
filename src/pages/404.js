import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "../core/Containers"
import { InnerContainer } from "../core/Containers"
import Heading from "../core/Heading"
import Button from "../core/Button"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <InnerContainer>
        <Heading>404<br />Not all things go as planned...</Heading>
        <p>
          We sincerely apologize.
          The page you are looking for is no longer here. 
          Maybe it was never here in the first place. 
          In any case, we are sorry you were sent on this wild goose chase, and have already taken steps to have the person responsible fired.
        </p>
        <Button as={Link} to="/" primary>Return home</Button>
      </InnerContainer>
    </Container>
  </Layout>
)

export default NotFoundPage
