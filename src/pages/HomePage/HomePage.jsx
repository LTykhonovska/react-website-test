import React from 'react';
import Hero from "../../sections/Hero/Hero";
import Tours from "../../sections/Tours/Tours";
import OurServices from "../../sections/OurServices/OurServices";
import TabsSection from "../../sections/TabsSection/TabsSection";
import HotTours from "../../sections/HotTours/HotTours";
import Team from "../../sections/Team/Team";
import CtaParallax from "../../sections/CtaParallax/CtaParallax";
import Gallery from "../../sections/Gallery/Gallery";
import Button from "../../components/Button/Button";
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
          <OurServices/>
          <HotTours/>
          <Team/>
          <Button/>
        </div>
        <CtaParallax/>
        <Gallery/>
      </div>
    </ParallaxProvider>
  );
}

export default HomePage;