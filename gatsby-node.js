const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

//Using onCreateNode lifecycle method to create slugs for MDX files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `projects${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            parent {
              ... on File {
                absolutePath
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const projects = result.data.allMdx.edges

  //Creating project pages
  projects.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: node.parent.absolutePath,
      // context: { id: node.id },
    })
  })
}