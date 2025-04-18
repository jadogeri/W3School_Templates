import React from 'react'

const Header = ({
    name
}) => {
  return (
    <header className="w3-container w3-center w3-padding-32">
    <h1>
      <b>MY BLOG</b>
    </h1>
    <p>
      Welcome to the blog of <span className="w3-tag">{name}</span>
    </p>
  </header>
  )
}

export default Header