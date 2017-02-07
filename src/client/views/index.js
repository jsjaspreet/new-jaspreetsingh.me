import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { getBlogpostLinks, getBlogpostThumbnails } from '../actions'
import store from '../store'
import Relay from 'react-relay'
import Nav from '../components/Nav'
import Index from './Index'
import Contact from './Contact'
import About from './About'
import Blog from './Blog'
import BlogPost from './BlogPost'
import { FitnessContainer, FitnessRoute } from './Fitness'
import styles from './styles.css'
import ReactGA from 'react-ga'

class App extends Component {

  componentWillMount() {
    store.dispatch(getBlogpostLinks())
    store.dispatch(getBlogpostThumbnails())
    ReactGA.initialize('UA-54725110-1')
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.containerStyle}>
          <Nav/>
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/fitness" children={({ match }) => {
            return match ?
              <Relay.RootContainer
                Component={FitnessContainer}
                route={new FitnessRoute()}
              /> : null
          }}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blog/:id" component={BlogPost}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
