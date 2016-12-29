// third party imports
import { combineReducers } from "redux"
import blogPostsReducer from './reducer_blogpost_links'
import blogThumbnailsReducer from './reducer_blogpost_thumbnails'

// combine and export the reducers
export default combineReducers({
  blogPosts: blogPostsReducer,
  thumbnails: blogThumbnailsReducer
})
