import React from 'react';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ButtonFactory from "../../components/Button/Button";
import gallery1 from '../../images/hotTour2-africa.jpg';
import gallery2 from '../../images/countUpParallax.jpg';
import gallery3 from '../../images/ctaParallax.jpg';
import gallery4 from '../../images/heroSlider3.jpg';
import gallery5 from '../../images/heroSlider1.jpg';
import gallery6 from '../../images/heroSlider2.jpg';
import gallery7 from '../../images/homeTabsImg.jpg';
import gallery8 from '../../images/hotTour1-spain.jpg';
import gallery9 from '../../images/hotTour2-africa.jpg';
import gallery10 from '../../images/countUpParallax.jpg';
import { Slide } from "react-reveal";
import styles from './Gallery.module.css';

function Gallery(props) {
  return (
    <section className={styles.gallery}>
      <SectionHeading heading='Instagram Gallery'/>
      <Slide left cascade duration={1800} delay={300}>
        <div className={styles.galleryWrapper}>
          <img src={gallery1} alt='instagram gallery'/>
          <img src={gallery2} alt='instagram gallery'/>
          <img src={gallery3} alt='instagram gallery'/>
          <img src={gallery4} alt='instagram gallery'/>
          <img src={gallery5} alt='instagram gallery'/>
          <img src={gallery6} alt='instagram gallery'/>
          <img src={gallery7} alt='instagram gallery'/>
          <img src={gallery8} alt='instagram gallery'/>
          <img src={gallery9} alt='instagram gallery'/>
          <img src={gallery10} alt='instagram gallery'/>
        </div>
      </Slide>
      <ButtonFactory text={'Go to Instagram'} type={'green'}/>
    </section>
  );
}

export default Gallery;