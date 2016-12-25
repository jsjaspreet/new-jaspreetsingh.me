import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router'
import Nav from '../components/Nav'
import Index from './Index'
import Contact from './Contact'
import styles from './styles.css'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={styles.containerStyle}>
          <Nav/>
          <Match exactly pattern="/" component={Index}/>
          <Match pattern="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    )
  }

}

export default App