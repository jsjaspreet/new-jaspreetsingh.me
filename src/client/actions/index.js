import axios from 'axios'
import { GET_BLOGPOST_LINKS, GET_BLOGPOST_THUMBNAILS } from './types'

export function getBlogpostLinks() {
  let promise;
  if (window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/blogposts`)
  }
  else {
    promise = axios.get(`http://www.jaspreetsingh.me:5050/api/blogposts`)
  }
  return {
    type: GET_BLOGPOST_LINKS,
    payload: promise
  }
}

export function getBlogpostThumbnails() {
  let promise;
  if (window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/thumbnails`)
  }
  else {
    promise = axios.get(`http://www.jaspreetsingh.me:5050/api/thumbnails`)
  }
  return {
    type: GET_BLOGPOST_THUMBNAILS,
    payload: promise
  }
}
