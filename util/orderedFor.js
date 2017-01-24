import _ from 'lodash'
import humps from 'humps'

export default (row, collection, field, singleObject = true) => {
  const data = humps.camelizeKeys(rows)
  const inGroupsOfField = _.groupBy(data, field)
  return collection.map(element => {
    const elementArray = inGroupsOfField[element]
    if (elementArray) {
      return singleObject ? elementArray[0] : elementArray
    }
    return singleObject ? {} : []
  })
}