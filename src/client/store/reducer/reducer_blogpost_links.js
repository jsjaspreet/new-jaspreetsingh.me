import { GET_BLOGPOST_LINKS } from '../../actions/types'

export default function(state = [], { type, payload }) {
  switch (type) {
  case GET_BLOGPOST_LINKS:
    return payload.data
  default:
    return state
  }
}
