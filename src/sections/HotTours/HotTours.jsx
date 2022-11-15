import React from 'react';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ButtonFactory from "../../components/Button/Button";
import ReactStars from "react-rating-stars-component";
import hotTour1 from '../../images/hotTour1-spain.jpg';
import hotTour2 from '../../images/hotTour2-africa.jpg';
import { Slide } from 'react-reveal';
import styles from './HotTours.module.css';

const hotToursData = [
  {
    id: 1,
    img: hotTour1,
    title: 'Benidorm, Spain',
    text: 'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...',
    price: 790,
    review: 4
  },
  {
    id: 2,
    img: hotTour2,
    title: 'Mauritius Island, Africa',
    text: 'The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...',
    price: 890,
    review: 5
  }
]


function HotTours(props) {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section className={styles.hotTours}>
      <SectionHeading heading='Hot Tours'/>
      <div className={styles.hotToursWrapper}>
        {hotToursData.map(({ id, img, title, text, price, review }) => {
          return (
            <Slide bottom duration={1200} delay={500}>
            <div className={styles.card} key={id}>
              <div className={styles.cardImg}>
                <img src={img} alt={title}/>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardPrice}>${price}</span>
                <h5 className={styles.cardTitle}>{title}</h5>
                <div className={styles.cardReview}>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    activeColor="#ffd700"
                    color="#b7b7b7"
                    isHalf={true}
                  />
                  <span>{review} customer reviews</span>
                </div>
                <p className={styles.cardText}>{text}</p>
                <ButtonFactory text={'Buy this tour'} type={'green'}/>
              </div>
            </div>
          </Slide>
          );
        })}
      </div>
    </section>
  );
}

export default HotTours;