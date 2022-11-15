import React from 'react';
import Hero from "../../sections/Hero/Hero";
import Tours from "../../sections/Tours/Tours";
import TabsSection from "../../sections/TabsSection/TabsSection";
import CtaParallax from "../../sections/CtaParallax/CtaParallax";
import Gallery from "../../sections/Gallery/Gallery";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from './HomePage.module.css';

function HomePage(props) {
  return (
    <ParallaxProvider>
      <div className={styles.homePage}>
        <Hero/>
        <Tours/>
        <div className={styles.container}>
          <TabsSection/>
        </div>
        <CtaParallax/>
        <Gallery/>
      </div>
    </ParallaxProvider>
  );
}

export default HomePage;