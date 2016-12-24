import React from 'react'
import { linkStyle } from './styles.css'

const NavLink = (props) => {
  const { title, to } = props
  return (
    <div className={linkStyle}>
      {title}
    </div>
  )
}

export default NavLink