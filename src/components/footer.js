import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ locale }) => (
  <div className="footer">
    <div className="wrap">
      <Link to="/">{locale}</Link>
    </div>
  </div>
)

export default Footer
