module.exports = {
  siteMetadata: {
    title: `Nandito.info`,
    author: `Nandor Biro`,
    description: `JavaScript, React, GraphQL, testing, etc. blog`,
    siteUrl: `https://nandito.info/`,
    social: {
      twitter: `nanditoDev`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: 'ef111b93-bd18-4a2a-bf23-5ceb2e0ad33f',
        server: 'https://ackee.nandito.info',
        ignoreLocalhost: true,
        detailed: false
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { collection: { eq: "blog" } } },
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Nandito.info's RSS Feed",
          }
        ],
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nandito Blog`,
        short_name: `Nandito`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C53030`,
        display: `minimal-ui`,
        icon: `content/assets/mirage-message-sent.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}
