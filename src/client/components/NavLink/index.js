import React from 'react'
import { Link } from 'react-router'
import { linkStyle } from './styles.css'

const NavLink = (props) => {
  const { title, to } = props
  return (
    <Link to={to} className={linkStyle}>
        {title}
    </Link>
  )
}

export default NavLink