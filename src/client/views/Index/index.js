import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import ProfilePic from '../../components/ProfilePic'
import Contact from '../../components/Contact'

class Index extends Component {

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.section1}>
          <div className={styles.section1Content}>
            <ProfilePic root/>
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
            <Link to="/blog" className={styles.blogLink}>
              Blog
            </Link>
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}

export default Index