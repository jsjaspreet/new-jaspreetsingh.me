import React from 'react'
import { profilePic, aboutPic } from './styles.css'
import prof450 from '../../images/profile-pic-height-450.png'
import prof400w from '../../images/profile-pic-400w.png'
import prof360w from '../../images/profile-pic-360w.png'

const ProfilePic = ({ root = false }) => {
  if (root) {
    return (
      <img className={profilePic} src={prof450} alt="Logo"/>
    )
  }
  else {
    return (
      <picture className={aboutPic}>
        <source srcSet={prof360w} media="(max-width: 938px)"/>
        <source srcSet={prof400w} media="(min-width: 939px)"/>
        <img src={prof400w} alt="Profile Picture"/>
      </picture>
    )
  }
}

export default ProfilePic