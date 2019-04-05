/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const config = require("./gatsby-config")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/index.js`)

  return graphql(`
    {
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
  `).then(result => {
    console.log(result)

    if (result.errors) {
      throw result.errors
    }

    const levels = config.siteMetadata.levels.map(el => el.id)
    const categories = config.siteMetadata.categories.map(el => el.id)

    const pagination = 8

    function generatePagination(pagePath, data) {
      const dataLength = data.length
      for (let i = 0; i <= dataLength / pagination; i++) {
        if(data.length === 0) break;
        createPage({
          path: `${pagePath}/${i === 0 ? "" : i}`,
          component: template,
          context: {
            data: data.filter((e, i) => i < pagination),
            next: data.length > pagination ? `${pagePath}/${i + 1}` : "",
            prev: i === 0 ? "" : `${pagePath}/${i - 1 <= 0 ? "" : i - 1}`,
          },
        })
        data = data.slice(pagination)
      }
    }

    generatePagination("browse", result.data.allQuestions.edges)

    categories.forEach(category => {
      generatePagination(
        `browse/${category.toLowerCase()}`,
        result.data.allQuestions.edges.filter(
          edge => edge.node.category.toLowerCase() === category
        )
      )

      levels.forEach(level => {
        generatePagination(
          `browse/${category.toLowerCase()}/${level.toLowerCase()}`,
          result.data.allQuestions.edges.filter(
            edge =>
              edge.node.category.toLowerCase() === category &&
              edge.node.level.toLowerCase() === level
          )
        )
      })
    })
  })
}
