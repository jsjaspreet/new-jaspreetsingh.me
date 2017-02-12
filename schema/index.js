import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql'

import storeType from './types/store'
import AddWorkoutMutation from './mutations/add-workout'


const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddWorkout: AddWorkoutMutation
  })
})


const RootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      store: {
        type: storeType,
        resolve: () => ({})
      }
    })
  }),
  mutation: RootMutationType
})

export default RootSchema