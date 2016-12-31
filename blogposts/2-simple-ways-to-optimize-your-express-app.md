# 2 Simple Ways to Optimize your Express App

### Compression

Minimizing the number of bytes shipped over the network will help your app's responsiveness. We can do this by enabling [gzip](https://en.wikipedia.org/wiki/Gzip) compression on the server level in your Express app:

```
import compression from 'compression'

import express from 'express'

const app = express()

app.use(compression())
``` 

Here's an example of gzip's effects captured in Chrome's dev tools.

Before gzip: 

![694KB Transferred](https://s3-us-west-2.amazonaws.com/jaspreetsingh.me/images/before-gzip.png)

After gzip:

![291KB Transferred](https://s3-us-west-2.amazonaws.com/jaspreetsingh.me/images/after-gzip.png)

### Cache Static Assets

Caching static assets minimizes the amount of time users spend loading your website. When combined with [webpack](https://webpack.js.org/) and [code-splitting](https://webpack.js.org/guides/code-splitting-libraries/), users only reload app-specific code when necessary. Activate caching through express's static middleware:


```
// maxAge in milliseconds
const maxAge = 1000 * 60 * 60 * 24 
// Add maxAge option to static middleware
app.use("/build",
  express.static(path.resolve('./build'), { maxAge }))

```

Checkout the official [Express guide](https://expressjs.com/en/advanced/best-practice-performance.html) for more info.