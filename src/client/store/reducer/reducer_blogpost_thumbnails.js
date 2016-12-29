import { GET_BLOGPOST_THUMBNAILS } from '../../actions/types'

export default function(state = [], { type, payload }) {
  switch (type) {
  case GET_BLOGPOST_THUMBNAILS:
    return payload.data
  default:
    return state
  }
}
