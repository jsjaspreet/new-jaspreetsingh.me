// third party imports
import { combineReducers } from "redux"
import blogPostsReducer from './reducer_blogpost_links'

// combine and export the reducers
export default combineReducers({
  blogPosts: blogPostsReducer
})
