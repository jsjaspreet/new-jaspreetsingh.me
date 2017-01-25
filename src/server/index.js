import express from 'express'
import path from 'path'
import cors from 'cors'
import pg from 'pg'
import DataLoader from 'dataloader'
import { graphql } from 'graphql'
import graphqlHTTP from 'express-graphql'
import pgdbCreator from '../../database/pgdb'
import pgConfigs from '../../postgres/config'
import compression from 'compression'
import getBlogpostLinks from './requestHandlers/getBlogPostLinks'
import getBlogThumbnails from './requestHandlers/getBlogThumbnails'

// express app
const app = express()
const nodeEnv = process.env.NODE_ENV

// PG setup
const pgConfig = pgConfigs[nodeEnv]
const pgPool = new pg.Pool(pgConfig)
const pgdb = pgdbCreator(pgPool)

const isProd = nodeEnv === 'production'

// compression
app.use(compression())

// cors
app.use(cors())

app.use('/graphql', (req, res) => {
  const loaders = {}
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
    context: {
      pgPool,
      loaders
    }
  })(req, res)
})

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



