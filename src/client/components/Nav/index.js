import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import HomeIcon from 'material-ui/svg-icons/action/home'
import { Link } from 'react-router'
import Logo from '../Logo'
import NavLink from '../NavLink'
import styles from './styles.css'

const Nav = () => {

  const RightMenu = () => (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon className={styles.vertIcon}/></IconButton>
      }
      targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }}
    >

      <Link to="/about" className={styles.menuItem}>
        <MenuItem className={styles.menuItem} primaryText="About Me"/>
      </Link>

      <Link to="/blog" className={styles.menuItem}>
        <MenuItem className={styles.menuItem} primaryText="Blog"/>
      </Link>

      <Link to="/contact" className={styles.menuItem}>
        <MenuItem className={styles.menuItem} primaryText="Contact"/>
      </Link>
    </IconMenu>
  );
  return (
    <div className={styles.minHeight}>
      <div className={styles.topNav}>
        <AppBar
          className={styles.appBar}
          iconElementRight={<RightMenu/>}
          iconElementLeft={<Link to="/"><IconButton><HomeIcon className={styles.homeIcon}/></IconButton></Link>}
        />
      </div>
      <div className={styles.leftNav}>
        <Logo/>
        <div className={styles.leftNavLinks}>
          <NavLink title="About Me" to="/about"/>
          <NavLink title="Blog" to="/blog"/>
          <NavLink title="Contact" to="/contact"/>
        </div>
      </div>
    </div>
  )
}

export default Nav
