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
}
