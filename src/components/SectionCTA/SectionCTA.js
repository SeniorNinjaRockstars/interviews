import React from "react"
import { Link } from "gatsby"

import Button from "../../core/Button"
import Container from "../../core/Container"

import { SectionWrapper, HeadingCTA } from './SectionCTA.styled'

const SectionCTA = () => (
  <Container>
    <SectionWrapper>
      <HeadingCTA as="h2">
        Got a great question?<br />Let us know!
      </HeadingCTA>
      <Button as={Link} to="/submit" primary>Submit a question</Button>
    </SectionWrapper>
  </Container>
)

export default SectionCTA
