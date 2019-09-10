import React from 'react'
import { Link } from "gatsby"

const Header = ({ title, subtitle }) => {
  return (
    <div className="w-full m-0 p-0 bg-cover bg-bottom bg-indigo-600">
      <div
        className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal"
        style={{
          height: '60vh',
          maxHeight: '460px',
        }}
      >
        <Link className="text-white font-extrabold text-3xl md:text-5xl" to={`/`}>
          {title}
        </Link>

        {subtitle && <p className="text-xl md:text-2xl text-gray-500">{subtitle}</p>}
      </div>
    </div>
  )
}

export default Header
