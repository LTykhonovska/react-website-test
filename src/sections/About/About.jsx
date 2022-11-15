import React from 'react';
import aboutVideo from './../../images/aboutVideo.mp4';
import styles from './About.module.css';

function About(props) {
  return (
    <section className={styles.about}>
      <video className={styles.bgPosition}
             autoPlay
             loop
             muted>
        <source src={aboutVideo} type='video/mp4' />
      </video>
      <div className={styles.aboutWrapper}>
        <h3>About</h3>
        <ul className={styles.breadcrumbs}>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </section>
  );
}

export default About;