import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import { Link } from 'react-router-dom'
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
          overlayContentStyle={{ 'background': 'rgba(0,0,0,0.80)' }}
          overlay={<CardTitle className={styles.cardTitles}
                              title={blogPostId}/>}
        >
          <img src={imageLink}/>
        </CardMedia>
      </Card>
    </Link>
  )
}

export default MiniBlog
