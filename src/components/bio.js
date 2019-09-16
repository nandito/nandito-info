import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (

    <div
      className="
        container max-w-5xl mx-auto bg-white
        border-t-4 border-dashed border-gray-200
        flex w-full items-center font-sans p-8 md:py-20 md:px-24
      "
    >
      <Image
        alt={author}
        className="w-10 h-10 rounded-full mr-4"
        fixed={data.avatar.childImageSharp.fixed}
      />

      <div className="flex-1">
        <p className="text-base font-bold text-base md:text-xl leading-none">
          {author}
        </p>

        <p className="text-grey-dark text-xs md:text-base">
          who lives and works in San Francisco building useful things.
          {' '}
          <a
            className="text-grey-darkest hover:text-teal no-underline border-b-2 border-teal"
            href={`https://twitter.com/${social.twitter}`}
          >
              You should follow him on Twitter
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
