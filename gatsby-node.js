/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  createPage({
    path: "browse",
    component: path.resolve(`src/templates/index.js`),
  })

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

    const levels = ["JUNIOR", "REGULAR", "SENIOR"]
    const technologies = ["JavaScript", "Python", "C++"]

    const pagination = 2

    function generatePagination(pagePath, data) {
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/index.js`),
        context: {
          data: data.filter((e, i) => i < pagination),
          next: data.length > pagination ? `${pagePath}/1` : "",
          prev: "",
        },
      })
      const dataLength = data.length
      if(dataLength < pagination) return;
      for (let i = 1; i <= dataLength / pagination; i++) {
        data = data.slice(pagination)
        createPage({
          path: `${pagePath}/${i}`,
          component: path.resolve(`src/templates/index.js`),
          context: {
            data: data.filter((e, i) => i < pagination),
            next: data.length > pagination ? `${pagePath}/${i + 1}` : "",
            prev: i === 1 ? pagePath : `${pagePath}/${i - 1}`,
          },
        })
      }
    }

    technologies.forEach(category => {
      generatePagination(
        `browse/${category.toLowerCase()}`,
        result.data.allQuestions.edges.filter(
          edge => edge.node.category === category
        )
      )

      levels.forEach(level => {
        generatePagination(
          `browse/${category.toLowerCase()}/${level.toLowerCase()}`,
          result.data.allQuestions.edges.filter(
            edge => edge.node.category === category && edge.node.level.toUpperCase() === level
          )
        )
      })
    })

    // Create blog post pages.
    // result.data.allQuestions.edges.forEach((edge, index, array) => {
    //   createPage({
    //     // Path for this page — required
    //     path: `slug`,
    //     component: path.resolve(`src/templates/index.js`),
    // context: {
    //   data: array.filter()
    // },
    //   })
    // })
  })
}
