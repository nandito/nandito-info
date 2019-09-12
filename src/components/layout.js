import React from "react"
import Header from './header'
import '../styles/global.css'

class Layout extends React.Component {
  render() {
    const { title, children, header } = this.props

    return (
      <div className="flex flex-col min-h-screen">
        {header({ title })}

        <main className="container flex-auto px-4 md:px-0 max-w-6xl mx-auto">
          <div className="mx-0 sm:mx-6">
            {children}
          </div>
        </main>

        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a
                  className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                  href="https://www.gatsbyjs.org"
                >
                  <span className="text-base text-gray-200">
                    © {new Date().getFullYear()}, Built with Gatsby
                  </span>
                </a>
              </div>
            </div>
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
