import React from 'react';
import About from "../../sections/About/About";
import Experience from "../../sections/Experience/Experience";
import CountUpSection from "../../sections/CountUpSection/CountUpSection";
import Feedbacks from "../../sections/Feedbacks/Feedbacks";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from './AboutPage.module.css';

function AboutPage(props) {
  return (
    <ParallaxProvider>
      <div className={styles.aboutPage}>
        <About/>
        <Experience/>
        <CountUpSection/>
        <Feedbacks/>
      </div>
    </ParallaxProvider>
  );
}

export default AboutPage;