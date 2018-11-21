import React from 'react'
import Link from 'gatsby-link'

const Header = ({ locale }) => (
  <div className="header">
    <div className="wrap">
      <Link to="/">{locale}</Link>
    </div>
  </div>
)

export default Header
