import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import smallLogo from '../../images/JS-1-small-black.png'
import bigLogo from '../../images/JS-1-black.png'

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <picture>
        <source srcSet={smallLogo} media="(max-width: 941px)"/>
        <source srcSet={bigLogo}/>
        <img className={styles.logo} src={smallLogo} alt="Logo"/>
      </picture>
    </Link>
  )
}

export default Logo
