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
import Fitness from './Fitness'
import styles from './styles.css'
import ReactGA from 'react-ga'

class App extends Component {

  componentWillMount() {
    store.dispatch(getBlogpostLinks())
    store.dispatch(getBlogpostThumbnails())
    ReactGA.initialize('UA-54725110-1')
  }

  componentDidMount() {
    console.log("after mount")
    setTimeout(() => console.log(store.getState()), 5000)
  }

  render() {
    console.log(this.props)
    console.log(store.getState())
    return (
      <BrowserRouter>
        <div className={styles.containerStyle}>
          <Nav/>
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/fitness" component={Fitness}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blog/:id" component={BlogPost}/>
        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  getBlogpostLinks: PropTypes.function,
  getBlogpostThumbnails: PropTypes.function
}

const relayApp = Relay.createContainer(App, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
          workouts {
            id
            workout
            workoutDate
            calories
            duration {
              minutes
              seconds
              hours
            }
            fatBurnTime {
              minutes
              seconds
              hours
            }
            fitnessTime {
              minutes
              seconds
              hours
            }
            avgHeartRate
            maxHeartRate
            workoutType
          }
    }
    `
  }
})

export default relayApp
