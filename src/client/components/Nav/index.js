import React from 'react'
import NavLink from '../NavLink'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Logo from '../Logo'
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
      <MenuItem className={styles.menuItem} primaryText="Blog"/>
      <MenuItem className={styles.menuItem} primaryText="About Me"/>
      <MenuItem className={styles.menuItem} primaryText="Contact"/>
    </IconMenu>
  );
  return (
    <div>
      <div className={styles.topNav}>
        <AppBar
          className={styles.appBar}
          showMenuIconButton={false}
          iconElementRight={<RightMenu/>}
        />
      </div>
      <div className={styles.leftNav}>
        <Logo/>
        <div className={styles.leftNavLinks}>
          <NavLink title="Blog"/>
          <NavLink title="About Me"/>
          <NavLink title="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default Nav
