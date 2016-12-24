import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './styles.css'
import Nav from '../../components/Nav'
import ProfilePic from '../../components/ProfilePic'

class App extends Component {

  render() {
    return (
      <div className={styles.containerStyle}>
        <Nav/>
        <div className={styles.body}>
          <div className={styles.section1}>
            <div className={styles.section1Content}>
              <ProfilePic/>
              <div className={styles.introText}>
                <h1 className={styles.name}>
                  Jaspreet Singh
                </h1>
                <h1 className={styles.tagLine}>
                  I craft <span className={styles.DOPE}>DOPE</span> software
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.blogContainer}>
              <div className={styles.blogRowItem}>
                Blog 1
              </div>
              <div className={styles.blogRowItem}>
                Blog 2
              </div>

              <div className={styles.blogRowItem}>
                Blog 3
              </div>
              <div className={styles.blogRowItem}>
                Blog 4
              </div>
            </div>
            <div className={styles.blogLink}>
              Blog
            </div>
          </div>
          <div className={styles.section3}>

            <h1>
              <a className={styles.email} href="mailto:jaspreet_xps@yahoo.com">
                jaspreet_xps@yahoo.com
              </a>
            </h1>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/jsjaspreet">
                <FontAwesome
                  className={styles.socialIcon}
                  name='linkedin'
                  size='4x'
                />
              </a>
              <a href="https://www.github.com/jsjaspreet">
                <FontAwesome
                  className={styles.socialIcon}
                  name='github'
                  size='4x'
                />
              </a>
              <a href="mailto:jaspreet_xps@yahoo.com">
                <FontAwesome
                  className={styles.socialIcon}
                  name='envelope'
                  size='4x'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App