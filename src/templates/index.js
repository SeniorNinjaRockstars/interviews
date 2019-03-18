import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import dayjs from "dayjs"
import 'dayjs/locale/pl'

dayjs.locale('pl')

const IndexPageTemplate = ({ questions }) => (
  <div>
    <h1>Browse questions</h1>
    {questions.map(question => (
      <>
        <pre>{JSON.stringify(question)}</pre>
        <p>
          {dayjs(question.created_at).locale('pl').format("DD MMMM")}
        </p>
      </>
    ))}
  </div>
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
