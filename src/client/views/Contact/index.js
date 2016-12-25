import React from 'react'
import ContactComponent from '../../components/Contact'
import styles from './styles.css'

const Contact = () => {
  return (
    <div className={styles.contactBody}>
      <ContactComponent page/>
    </div>
  )
}

export default Contact