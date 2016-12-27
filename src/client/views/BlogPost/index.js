import React, { Component } from 'react'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux'
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
  }

  render() {
    return (
      <div className={styles.blogBody}>
        {
          this.state.blogPost === '' ?
            <CircularProgress className={styles.blogSpinner} size={80} thickness={5}/> :
            <ReactMarkdown className={styles.blogPost} source={this.state.blogPost}/>
        }
      </div>
    )
  }
}

export default BlogPost
