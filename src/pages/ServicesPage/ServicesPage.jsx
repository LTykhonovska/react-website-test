import React from 'react';
import OurServices from "../../sections/OurServices/OurServices";
import HotTours from "../../sections/HotTours/HotTours";
import Team from "../../sections/Team/Team";
import CountUpSection from "../../sections/CountUpSection/CountUpSection";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from './ServicesPage.module.css';

function ServicesPage(props) {
  return (
    <ParallaxProvider>
      <div className={styles.servicesPage}>
        <CountUpSection/>
        <div className={styles.container}>
          <OurServices/>
          <Team/>
          <HotTours/>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default ServicesPage;