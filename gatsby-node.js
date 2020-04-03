const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPosts = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "blog" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (blogPosts.errors) {
    throw blogPosts.errors
  }

  // Create blog posts pages.
  const postEdges = blogPosts.data.allMarkdownRemark.edges

  postEdges.forEach((post, index) => {
    const previous = index ===postEdges.length - 1 ? null :postEdges[index + 1].node
    const next = index === 0 ? null :postEdges[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const staticPageTemplate = path.resolve(`./src/templates/static-page.js`)
  const pages = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "pages" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (pages.errors) {
    throw pages.errors
  }

  // Create pages.
  const pageEdges = pages.data.allMarkdownRemark.edges

  pageEdges.forEach((page) => {
    createPage({
      path: page.node.fields.slug,
      component: staticPageTemplate,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
}
