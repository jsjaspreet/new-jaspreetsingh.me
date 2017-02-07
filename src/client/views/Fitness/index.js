import React, { Component } from 'react'
import Relay from 'react-relay'
import ReactGA from 'react-ga'
import styles from './styles.css'
import WorkoutCard from '../../components/WorkoutCard'

class FitnessRoute extends Relay.Route {
  static routeName = 'Fitness'
  static queries = {
    store: (Component) => Relay.QL`
                query MainQuery {
                 store { ${Component.getFragment('store')} }
                 }
               `
  }
}


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
            {
              this.props.store.workouts.map((workout) => <WorkoutCard id={workout.id} workout={workout}/>)
            }
          </div>
        </div>
      </div>
    )
  }
}

const FitnessContainer = Relay.createContainer(Fitness, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
          workouts {
            id
            ${WorkoutCard.getFragment('workout')}
          }
      }
    `
  }
})


export {
  FitnessContainer,
  FitnessRoute
}

