import axios from 'axios'
import { GET_BLOGPOST_LINKS, GET_BLOGPOST_THUMBNAILS } from './types'

export function getBlogpostLinks() {
  const promise = axios.get(`/api/blogposts`)
  return {
    type: GET_BLOGPOST_LINKS,
    payload: promise
  }
}

export function getBlogpostThumbnails() {
  const promise = axios.get(`/api/thumbnails`)
  return {
    type: GET_BLOGPOST_THUMBNAILS,
    payload: promise
  }
}
