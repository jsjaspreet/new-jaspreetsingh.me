import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import { Link } from 'react-router'
import styles from './styles.css'

const MiniBlog = ({ imageLink, root = false }) => {
  const blogPostId = imageLink.split("/")
                              .slice(-1)[0].split(".")[0].split("-")
                                                         .join(" ")
  const additionalStyle = root ? {
    "margin-top": "0px",
    "margin-left": "0px"
  } : {}

  return (<Link to={`/blog/${blogPostId.split(" ")
                                       .join('-')}`}>
      <Card className={styles.cardStyle} style={additionalStyle}>
        <CardMedia
          overlay={<CardTitle title={blogPostId}/>}
        >
          <img src={imageLink}/>
        </CardMedia>
      </Card>
    </Link>
  )
}

export default MiniBlog
