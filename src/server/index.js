import express from 'express'
import fs from 'fs'
import path from 'path'
import cors from 'cors'
import 'babel-core/register'
import 'babel-polyfill'
import { graphql } from 'graphql'
import { introspectionQuery } from 'graphql/utilities'
import graphqlHTTP from 'express-graphql'
import compression from 'compression'
import getBlogpostLinks from './requestHandlers/getBlogPostLinks'
import getBlogThumbnails from './requestHandlers/getBlogThumbnails'
import rootSchema from '../../schema'
import pgPool from './pgPool'

// express app
const app = express()
const nodeEnv = process.env.NODE_ENV || "development"

console.log(`Running in ${nodeEnv}`)


const isProd = nodeEnv === 'production'

// compression
app.use(compression())

// cors
app.use(cors())

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
    context: {
      pgPool
    }
  })(req, res)
})
 //
 //graphql(rootSchema, introspectionQuery).then((data) => {
 //  console.log('writing data')
 //  fs.writeFile('/home/jsjaspreet/dev/projects/new-js.me/fitnessSchema.json', JSON.stringify(data, null, 2), err => {
 //    if(err) throw err
 //    console.log("Wrote json schema")
 //  })
 //})

// static
const maxAge = isProd ? 1000 * 60 * 60 * 24 * 30 : 0
app.use("/build", express.static(path.resolve('./build'), { maxAge }))

// Blogpost handlers
app.get('/api/blogposts', getBlogpostLinks)
app.get('/api/thumbnails', getBlogThumbnails)

app.all('*', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'))
})

const port = 5050

app.listen(port, () => console.log(`
app listening on port ${port}
Production? ${isProd}
`))



