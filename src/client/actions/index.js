import axios from 'axios'
import { GET_BLOGPOST_LINKS } from './types'

export function getBlogpostLinks() {
  let promise;
  if (window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/blogposts`)
  }
  else {
    promise = axios.get(`https://www.topkekkle.com:5050/api/memes`)
  }
  return {
    type: GET_BLOGPOST_LINKS,
    payload: promise
  }
}