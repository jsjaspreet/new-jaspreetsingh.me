import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'
import * as actions from '../../actions'
import styles from './styles.css'
import MiniBlog from '../../components/MiniBlog'

class Blog extends Component {
  componentWillMount() {
    this.props.getBlogpostThumbnails()
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const { thumbnails } = this.props
    return (
      <div className={styles.blogBody}>
        <div className={styles.blogContent}>
          {
            thumbnails.map(thumbnail => <MiniBlog imageLink={thumbnail}/>)
          }
        </div>
      </div>
    )
  }


}

function mapStateToProps({ thumbnails }) {
  return ({ thumbnails })
}

export default connect(mapStateToProps, actions)(Blog)