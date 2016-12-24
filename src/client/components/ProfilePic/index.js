import React from 'react'
import { profilePic } from './styles.css'
import prof450 from '../../images/profile-pic-height-450.png'

const ProfilePic = ({ root = true }) => {
  if (root) {
    return (
      <img className={profilePic} src={prof450} alt="Logo"/>
    )
  }
  else {
    <div>
      About Page Porfile pic
    </div>
  }
}

export default ProfilePic