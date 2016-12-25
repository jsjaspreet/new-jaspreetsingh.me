import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import ProfilePic from '../../components/ProfilePic'

const About = () => {
  return (
    <div className={styles.aboutBody}>
      <div className={styles.aboutContent}>
        <ProfilePic/>
        <div className={styles.mainText}>
          I graduated from UC Berkeley with a degree in Electrical Engineering
          and Computer Science and am now working as a
          software engineer at <a className={styles.link} href="https://www.datascience.com"
                                  target="_blank">DataScience</a> in Culver City, California. I'm a huge believer
          in life-long learning and continual self-improvement; in my free time I enjoy
          taking online courses, working out, playing with my cat Pani, posting dank memes,
          and learning more about the tech industry.
        </div>
        <div className={styles.mainText}>
          Feel free to <Link className={styles.link} to="/contact">contact me here.</Link>
        </div>
      </div>
    </div>
  )
}

export default About