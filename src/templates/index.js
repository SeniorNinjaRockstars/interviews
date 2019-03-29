import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import dayjs from "dayjs"
import 'dayjs/locale/pl'

import Heading from "../core/Heading"
import Container from "../core/Container"
import Grid from "../core/Grid"
import Box from "../core/Box"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Tabs from "../components/Tabs"
import QuestionCard from "../components/QuestionCard"
import Tag from "../components/Tag"
import SectionCTA from "../components/SectionCTA"

dayjs.locale('pl')

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const IndexPageTemplate = ({ questions }) => (
  <Layout>
    <SEO title="Questions" />
    <main>
      <Container>
        <Heading>Browse questions</Heading>
        <Tabs />
      </Container>
      <Box light>
        <Container>
          <Grid cols={2}>
            {questions.map(({ text, category, level, created_at }) => (
              <QuestionCard
                text={text}
                category={<Tag name={category} />}
                level={capitalize(level)}
                date={dayjs(created_at).locale('pl').format("DD MMMM YYYY")}
              />
            ))}
          </Grid>
        </Container>
      </Box>
      <SectionCTA />
    </main>
  </Layout>
)

const IndexPage = ({ data }) => {
  const questions = data.allQuestions.edges.map(edge => edge.node)

  return (
    <div>
      <IndexPageTemplate questions={questions} />
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allQuestions: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            text: PropTypes.string,
            category: PropTypes.string,
            level: PropTypes.string,
            created_at: PropTypes.number,
            published: PropTypes.bool,
          }),
        })
      ),
    }),
  }),
}

export const questionsQuery = graphql`
  query IndexPage {
    allQuestions {
      edges {
        node {
          text
          category
          level
          created_at
          published
        }
      }
    }
  }
`

export default IndexPage
