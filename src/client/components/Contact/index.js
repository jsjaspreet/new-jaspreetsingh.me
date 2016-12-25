import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './styles.css'

const Contact = ({ page = false }) => {
  return (
    <div className={page ? styles.section3Page : styles.section3}>
      <h1>
        <a className={styles.email} href="mailto:jaspreet_xps@yahoo.com">
          jaspreet_xps@yahoo.com
        </a>
      </h1>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/jsjaspreet" target="_blank">
          <FontAwesome
            className={styles.socialIcon}
            name='linkedin'
            size='4x'
          />
        </a>
        <a href="https://www.github.com/jsjaspreet" target="_blank">
          <FontAwesome
            className={styles.socialIcon}
            name='github'
            size='4x'
          />
        </a>
        <a href="mailto:jaspreet_xps@yahoo.com" target="_blank">
          <FontAwesome
            className={styles.socialIcon}
            name='envelope'
            size='4x'
          />
        </a>
      </div>
    </div>
  )
}

export default Contact
