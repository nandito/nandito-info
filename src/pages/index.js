import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <div className="flex flex-wrap justify-between pt-12 -mx-6">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <article
                className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
                key={node.fields.slug}
              >
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <Link
                    className="flex flex-wrap no-underline hover:no-underline"
                    to={node.fields.slug}
                  >
                    <img
                      alt={node.frontmatter.title}
                      className="h-64 w-full rounded-t pb-6"
                      src="https://source.unsplash.com/collection/225/800x600"
                    />

                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      {node.frontmatter.date}
                    </p>

                    <header className="w-full">
                      <h3 className="w-full font-bold text-xl text-gray-900 px-6">
                        {title}
                      </h3>
                    </header>

                    <p
                      className="text-gray-800 font-serif text-base px-6 mb-5"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Link>
                </div>

                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                    <p className="text-gray-600 text-xs md:text-sm">{node.timeToRead} MIN READ</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
