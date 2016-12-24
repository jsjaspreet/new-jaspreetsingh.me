import axios from 'axios'
import 'babel-polyfill'

async function getStuff() {
  try {
    return await axios.get('https://jfdssonplaceholder.typicode.com/posts/1')
                      .then(({ data }) => data)
  } catch (err) {
    console.log("balogney")
    console.log(err)
  }
}

async function run() {
  try {
    const x = await getStuff()
    return x
  } catch (err) {
    console.log("dimsum")
  }
}

run()