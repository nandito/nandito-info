import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StaticPageTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { excerpt, frontmatter, html } = data.markdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />

      <article>
        <header className="text-center mb-8 pt-12 md:pt-20">
          <p className="text-sm md:text-base text-teal-500 font-bold">
            {frontmatter.date}
          </p>

          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            {frontmatter.title}
          </h1>
        </header>

        {frontmatter.cover && (
          <div className="mb-4 md:-mb-32 md:-mx-6">
            <Img
              className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded z-0"
              fluid={frontmatter.cover.childImageSharp.fluid}
            />
          </div>
        )}

        <div className="container max-w-5xl mx-auto relative">
          <section
            className="markdown-content bg-white w-full p-8 md:p-24 text-gray-800 leading-normal"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default StaticPageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
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
