import React, { Component } from 'react'
import ReactGA from 'react-ga'
import ContactComponent from '../../components/Contact'
import styles from './styles.css'

class Contact extends Component {
  componentWillMount()  {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className={styles.contactBody}>
        <ContactComponent page/>
      </div>
    )
  }
}

export default Contact