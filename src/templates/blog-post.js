import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article>
          <header className="text-center mb-8 pt-12 md:pt-20">
            <p className="text-sm md:text-base text-teal-500 font-bold">
              {post.frontmatter.date}
            </p>

            <h1 className="font-bold break-normal text-3xl md:text-5xl">
              {post.frontmatter.title}
            </h1>
          </header>

          {post.frontmatter.cover && (
            <div className="mb-4 md:-mb-32 md:-mx-6">
              <Img
                className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded z-0"
                fluid={post.frontmatter.cover.childImageSharp.fluid}
              />
            </div>
          )}

          <div className="container max-w-5xl mx-auto relative">
            <section
              className="markdown-content bg-white w-full p-8 md:p-24 text-gray-800 leading-normal"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            className="container max-w-5xl bg-white flex flex-wrap justify-between mx-auto my-8 p-0"
          >
            <li>
              {previous && (
                <div className="p-8">
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </div>
              )}
            </li>
            <li>
              {next && (
                <div className="p-8 text-right">
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
