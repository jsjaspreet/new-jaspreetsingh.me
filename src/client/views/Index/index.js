import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './styles.css'
import ProfilePic from '../../components/ProfilePic'
import Contact from '../../components/Contact'
import MiniBlog from '../../components/MiniBlog'

class Index extends Component {

  componentWillMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const { thumbnails } = this.props;
    const displayMiniBlog = thumbnails.length > 0;
    let miniBlogs = [null, null, null, null]
    if (displayMiniBlog) {
      miniBlogs = thumbnails.slice(0, 4)
                            .map(thumbnail => <MiniBlog root imageLink={thumbnail}/>)
    }


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
          {displayMiniBlog ?
            <div className={styles.blogContainer}>
              <div className={styles.blogRowItem}>
                {miniBlogs[0]}
              </div>
              <div className={styles.blogRowItem}>
                {miniBlogs[1]}
              </div>
              <div className={styles.blogRowItem}>
                {miniBlogs[2]}
              </div>
              <div className={styles.blogRowItem}>
                {miniBlogs[3]}
              </div>
            </div> : null
          }
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

function mapStateToProps({ thumbnails }) {
  return ({ thumbnails })
}

export default connect(mapStateToProps)(Index)
