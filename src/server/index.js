import express from 'express'
import path from 'path'
import compression from 'compression'
import getBlogpostLinks from './requestHandlers/getBlogPostLinks'

// express app
const app = express()

// compression
app.use(compression())

app.use("/build", express.static(path.resolve('./build')))

// Blogpost handlers
app.get('/api/blogposts', getBlogpostLinks)

app.all('*', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'))
})

const port = 8787

app.listen(port, () => console.log(`app listening on port ${port}`))



