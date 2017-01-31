import React, { Component } from 'react'
import ReactGA from 'react-ga'
import styles from './styles.css'
import WorkoutCard from '../../components/WorkoutCard'

class Fitness extends Component {

  componentWillMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className={styles.fitnessBody}>
        <div className={styles.fitnessContent}>
          <div className={styles.mainText}>
            Hello World
            <WorkoutCard/>
          </div>
        </div>
      </div>
    )
  }
}

export default Fitness