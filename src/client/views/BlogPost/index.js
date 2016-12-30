import React, { Component } from 'react'
import ReactGA from 'react-ga'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';
import Disqus from 'react-disqus-thread'
import ReactMarkdown from 'react-markdown'
import styles from './styles.css'

class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = { blogPost: '' }
  }

  componentWillMount() {
    axios.get(`https://s3-us-west-2.amazonaws.com/jaspreetsingh.me/blogposts/${this.props.params.id}.md`)
         .then(({ data }) => this.setState({ blogPost: data }))
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const post = (
      <div>
        <ReactMarkdown className={styles.blogPost} source={this.state.blogPost}/>
        <Disqus
          className={styles.blogComments}
          shortname="jaspreetsingh-me"
          identifier={`jaspreetsingh-me-${this.props.params.id}`}
          title={this.props.params.id}
        />
      </div>)

    return (
      <div className={styles.blogBody}>
        {
          this.state.blogPost === '' ?
            <CircularProgress className={styles.blogSpinner} size={80} thickness={5}/> :
            post
        }

      </div>
    )
  }
}

export default BlogPost
