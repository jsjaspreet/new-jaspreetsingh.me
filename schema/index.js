import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import WorkoutType from './types/workout'
import pgdbCreator from '../database/pgdb'
import AddWorkoutMutation from './mutations/add-workout'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    workouts: {
      type: new GraphQLList(WorkoutType),
      args: {
        date: { type: GraphQLString }
      },
      resolve: (obj, { date }, { loaders, pgPool }) => {
        const pgdb = pgdbCreator(pgPool)
        return date ? pgdb.getWorkoutsByDate(date) : pgdb.getWorkouts()
      }
    }
  }
})

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddWorkout: AddWorkoutMutation
  })
})


const RootSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

export default RootSchema