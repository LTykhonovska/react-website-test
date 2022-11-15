import React from 'react';
import tour1 from './../../images/tour1-ballons.jpg';
import tour2 from './../../images/tour2-mountains.jpg';
import tour3 from './../../images/tour3-beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';
import styles from './Tours.module.css';

const toursData = [
  {
    id: 1,
    img: tour1,
    title: 'Balloon Flights'
  },
  {
    id: 2,
    img: tour2,
    title: 'Mountain Holiday'
  },
  {
    id: 3,
    img: tour3,
    title: 'Beach Rest'
  },
]

function Tours(props) {
  return (
    <section className={styles.toursSection}>
      <div className={styles.container}>
        <Slide bottom cascade duration={1800} delay={800}>
          <div className={styles.cardsWrapper}>
            {toursData.map(({ img, title }, id) => {
              return (
                <div key={id} className={styles.cardItem}>
                  <img src={img} alt={title}/>
                  <h6>{title}</h6>
                </div>
              );
            })}
          </div>
        </Slide>
        <button className={styles.toursBtn}>Other tours
          <FontAwesomeIcon icon={faArrowRightLong}/>
        </button>
      </div>
    </section>
  );
}

export default Tours;