const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// TODO: add filter and sorting option
// TODO: replace allMarkdownRemark queries when the 1st todo is done

/**
 * Filters the files by source instance name
 * @param {array} files that we need to filter
 * @param {string} sourceInstanceName the "name" in the `gatsby-source-filesystem` config
 * @returns the array of files with the given source instance
 */
const filterBySourceInstanceName = (files, sourceInstanceName) => (
  files.filter(
    file => {
      const isMarkdown = file.internal.mediaType === 'text/markdown'
      const isMatch = file.sourceInstanceName === sourceInstanceName

      return isMarkdown && isMatch
    }
  )
)

/**
 * Gets all files' MarkdownRemark type equivalent by the file's absoulte path.
 * @param {array} files where we need to replace `File` types by `MarkdownRemark`
 * @param {array} markdowns the source of all MarkdownRemark content
 * @returns the array of markdown remark content
 */
const getMarkdownsByFiles = (files, markdowns) => (
  files.map(
    file => markdowns.find(md => md.fileAbsolutePath === file.absolutePath)
  )
)

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allPages: {
        type: [`MarkdownRemark`],
        resolve: (source, args, context, info) => {
          const allFile = context.nodeModel.getAllNodes({ type: `File` })
          const allMarkdown = context.nodeModel.getAllNodes({ type: `MarkdownRemark` })
          const pageFiles = filterBySourceInstanceName(allFile, 'pages')
          const pageMarkdowns = getMarkdownsByFiles(pageFiles, allMarkdown)

          return pageMarkdowns
        }
      },
      allPosts: {
        type: [`MarkdownRemark`],
        resolve: (source, args, context, info) => {
          const allFile = context.nodeModel.getAllNodes({ type: `File` })
          const allMarkdown = context.nodeModel.getAllNodes({ type: `MarkdownRemark` })
          const blogFiles = filterBySourceInstanceName(allFile, 'blog')
          const blogMarkdowns = getMarkdownsByFiles(blogFiles, allMarkdown)

          return blogMarkdowns
        }
      }
    }
  }
  createResolvers(resolvers)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
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

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
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
  }
}
