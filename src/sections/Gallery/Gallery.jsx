import React from 'react';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ButtonFactory from "../../components/Button/Button";
import gallery1 from '../../images/gallery/gallery12.jpg';
import gallery2 from '../../images/gallery/gallery2.jpg';
import gallery3 from '../../images/gallery/gallery15.jpg';
import gallery4 from '../../images/gallery/gallery4.jpg';
import gallery5 from '../../images/gallery/gallery5.jpg';
import gallery6 from '../../images/gallery/gallery6.jpg';
import gallery7 from '../../images/gallery/gallery17.jpg';
import gallery8 from '../../images/gallery/gallery18.jpg';
import gallery9 from '../../images/gallery/gallery9.jpg';
import gallery10 from '../../images/gallery/gallery10.jpg';
import styles from './Gallery.module.css';

function Gallery(props) {
  return (
    <section className={styles.gallery}>
      <SectionHeading heading='Instagram Gallery'/>
      <div className={styles.galleryWrapper}>
          <img src={gallery1} alt='instagram gallery' />
          <img src={gallery2} alt='instagram gallery' />
          <img src={gallery3} alt='instagram gallery' />
          <img src={gallery4} alt='instagram gallery' />
          <img src={gallery5} alt='instagram gallery' />
          <img src={gallery6} alt='instagram gallery' />
          <img src={gallery7} alt='instagram gallery' />
          <img src={gallery8} alt='instagram gallery' />
          <img src={gallery9} alt='instagram gallery' />
          <img src={gallery10} alt='instagram gallery' />
      </div>
      <ButtonFactory text={'Go to Instagram'} type={'green'}/>
    </section>
  );
}

export default Gallery;