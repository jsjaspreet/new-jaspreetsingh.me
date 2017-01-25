import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import WorkoutType from './types/workout'
import pgdbCreator from '../database/pgdb'

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
        return date ? [pgdb.getWorkoutByDate(date)] : pgdb.getWorkouts()
      }
    }
  }
})

const RootSchema = new GraphQLSchema({
  query: RootQueryType
})

export default RootSchema