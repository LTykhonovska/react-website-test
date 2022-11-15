import React from 'react';
import CountUp from 'react-countup';
import { ParallaxBanner } from "react-scroll-parallax";
import bgImg from '../../images/countUpParallax.jpg';
import { Slide } from "react-reveal";
import styles from './CountUpSection.module.css';

function CountUpSection(props) {
  return (
    <section className={styles.countUpSection}>
      <ParallaxBanner
        layers={[{ image: bgImg, speed: -15 }]}
        className="aspect-[2/1]"
      >
        <Slide top cascade duration={2000}>
        <div className={styles.countUpSectionWrapper}>
          <div className={styles.countUpSectionItem}>
            <CountUp end={12}
                     duration={3}
            />
            <h6 className={styles.countUpSectionItemTitle}>Awards</h6>
          </div>
          <div className={styles.countUpSectionItem}>
            <CountUp end={194}
                     duration={3}
            />
            <h6 className={styles.countUpSectionItemTitle}>Tours</h6>
          </div>
          <div className={styles.countUpSectionItem}>
            <CountUp end={2000}
                     duration={3}
            />
            <h6 className={styles.countUpSectionItemTitle}>Travellers</h6>
          </div>
          <div className={styles.countUpSectionItem}>
            <CountUp end={25} duration={3}
            />
            <h6 className={styles.countUpSectionItemTitle}>Team Members</h6>
          </div>
        </div>
        </Slide>
      </ParallaxBanner>
    </section>
  );
}

export default CountUpSection;