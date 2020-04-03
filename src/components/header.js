import React from 'react'
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <Link
            className="flex text-white text-base no-underline hover:text-white hover:no-underline"
            to="/"
          >
            {title}
          </Link>
        </div>

        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link
                className="inline-block py-2 px-2 text-white no-underline"
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
