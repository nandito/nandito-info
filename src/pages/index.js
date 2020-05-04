import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { author, title: siteTitle, description } = data.site.siteMetadata
    const posts = data.blog.edges
    const pages = data.pages.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        header={() => (
          <div className="w-full -mb-16">
            <div
              className="container flex justify-center items-center w-full max-w-full relative"
              style={{ height: '45vh' }}
            >
              <div className="absolute inset-0 z-10" style={{
                background: 'linear-gradient(0deg, rgba(0,0,0,0.72) 5%, rgba(1,1,1,0.15) 45%)',
              }}></div>
              <div className="absolute inset-0 z-0">
                <Img
                  className="h-full"
                  fluid={data.headerImage.childImageSharp.fluid}
                />
              </div>

              <div className="text-center">
                <Link
                  className="text-white font-extrabold text-3xl md:text-5xl relative z-20"
                  style={{ textShadow: '1px 1px 2px rgba(1, 1, 1, 0.7)' }}
                  to={`/`}
                >
                  {siteTitle}
                </Link>

                <p
                  className="text-white text-lg md:text-xl relative z-20"
                  style={{ textShadow: '1px 1px 2px rgba(1, 1, 1, 0.7)' }}
                >
                  {description}
                </p>
              </div>
            </div>

            <div className="-mt-32 relative z-30">
              <nav className="w-full">
                <div className="container mx-auto flex items-center">
                  <div className="flex w-1/2 pl-4 text-sm">
                    <ul className="list-reset flex justify-between flex-none items-center">
                      {pages.map(({ node }) => (
                        <li className="mr-2 uppercase" key={node.fields.slug}>
                          <Link
                            className="inline-block py-2 px-2 text-white no-underline hover:underline"
                            to={node.fields.slug}
                          >
                            {node.frontmatter.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex w-1/2 justify-end content-center">
                    <a
                      className="
                        inline-block text-gray-500 no-underline hover:text-white
                        hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar
                      "
                      data-tippy-content="@nandito"
                      href="https://twitter.com/nanditoDev"
                    >
                      <svg className="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="
                            M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0
                            1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063
                            4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0
                            1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25
                            0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125
                            2.688 0 5.063-.875 7.188-2.5-1.25
                            0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125
                            1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673
                            5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228
                            5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938
                            1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579
                            5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625
                            4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313
                            2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      >
        <SEO title="All posts" />

        <div className="flex flex-wrap justify-between pt-12 -mx-6 relative z-20">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <article
                className="w-full p-6 flex flex-col flex-grow flex-shrink"
                key={node.fields.slug}
              >
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <Link
                    className="flex flex-wrap no-underline hover:no-underline"
                    to={node.fields.slug}
                  >
                    {node.frontmatter.cover && (
                      <div className="w-full rounded-t object-cover overflow-hidden">
                        <Img
                          className="h-full"
                          fluid={node.frontmatter.cover.childImageSharp.fluid}
                        />
                      </div>
                    )}

                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 pt-6">
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

                <div className="
                  flex-none mt-auto bg-white rounded-b
                  rounded-t-none overflow-hidden shadow-lg p-6
                ">
                  <div className="flex items-center justify-between">
                    <Img
                      alt={author}
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      fixed={data.avatar.childImageSharp.fixed}
                    />

                    <p className="text-gray-600 text-xs md:text-sm">
                      {node.timeToRead} MIN READ
                    </p>
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
    headerImage: file(absolutePath: { regex: "/farakas.jpg/" }) {
      childImageSharp {
        fluid(
          maxHeight: 460,
          maxWidth: 1920,
          cropFocus: CENTER,
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        title
      }
    }
    pages: allMarkdownRemark(
      filter: { fields: { collection: { eq: "pages" } } }
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
    blog: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            cover {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
