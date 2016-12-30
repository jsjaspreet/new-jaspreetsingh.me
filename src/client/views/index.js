import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Nav from '../components/Nav'
import Index from './Index'
import Contact from './Contact'
import About from './About'
import Blog from './Blog'
import BlogPost from './BlogPost'
import styles from './styles.css'
import ReactGA from 'react-ga'
class App extends Component {

  componentWillMount() {
    this.props.getBlogpostLinks()
    this.props.getBlogpostThumbnails()
    ReactGA.initialize('UA-54725110-1')
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.containerStyle}>
          <Nav/>
          <Match exactly pattern="/" component={Index}/>
          <Match pattern="/contact" component={Contact}/>
          <Match pattern="/about" component={About}/>
          <Match pattern="/blog" exactly component={Blog}/>
          <Match pattern="/blog/:id" component={BlogPost}/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ blogPosts }) {
  return { blogPosts }
}

export default connect(mapStateToProps, actions)(App)