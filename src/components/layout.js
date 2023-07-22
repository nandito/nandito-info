import React from "react"
import { Link } from "gatsby"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children, header } = this.props

    return (
      <div className="flex flex-col min-h-screen">
        {header({ title })}

        <main className="container flex-auto px-4 md:px-0 max-w-6xl mx-auto">
          <div className="mx-0 sm:mx-6">{children}</div>
        </main>

        <footer className="bg-gray-900">
          <div className="container mx-auto flex flex-wrap items-center space-between px-2 py-8">
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <span className="text-base text-gray-200">
                © {new Date().getFullYear()}, Built with{" "}
                <a
                  className="no-underline hover:underline"
                  href="https://www.gatsbyjs.org"
                >
                  Gatsby
                </a>
                {" & "}
                <a
                  className="no-underline hover:underline"
                  href="https://tailwindcss.com/"
                >
                  Tailwind CSS
                </a>
              </span>
            </div>

            <ul className="flex-1 flex justify-center md:justify-end mt-3 md:mt-0">
              <li>
                <Link className="text-white hover:underline mr-4" to="/rss.xml">
                  RSS Feed
                </Link>
              </li>

              <li>
                <Link
                  className="text-white hover:underline"
                  to="/sitemap-index.xml"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.defaultProps = {
  header: (props) => <Header {...props} />,
}

export default Layout
