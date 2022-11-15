import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import parallaxImg from '../../images/ctaParallax.jpg';
import ButtonFactory from "../../components/Button/Button";
import { Fade } from 'react-reveal';
import styles from './CtaParallax.module.css';

function CtaParallax(props) {
  return (
    <div className={styles.cta}>
      <ParallaxBanner
        layers={[{ image: parallaxImg, speed: -15 }]}
        className="aspect-[2/1]"
      >
        <Fade bottom cascade duration={1800} delay={1200}>
          <div className={styles.ctaInfo}>
            <h4 className={styles.ctaTitle}>First-class Impressions <br/>
              are Waiting for You!</h4>
            <p className={styles.ctaText}>Our agency offers travelers various tours and excursions with destinations all
              over the world. Browse our website to find your dream tour!</p>
            <ButtonFactory text={'Book a Tour Now'} type={'white'}/>
          </div>
        </Fade>
      </ParallaxBanner>
    </div>
  );
}

export default CtaParallax;