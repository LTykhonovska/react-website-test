import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import user1 from './../../images/people/user1.jpeg';
import user2 from '../../images/people/user2.jpeg';
import user3 from '../../images/people/user3.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import styles from './Feedbacks.module.css';

const feedbacksData = [
  {
    id: 1,
    img: user1,
    name: 'Samantha Brown',
    role: 'Regular client',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fugit labore nihil non odio quod tempore tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fugit labore nihil non odio quod tempore tenetur! '
  },
  {
    id: 2,
    img: user2,
    name: 'Greg Green',
    role: 'Regular client',
    text: 'Expedita fugit labore nihil non odio quod tempore tenetur! Expedita fugit labore nihil non odio quod tempore tenetur!Expedita fugit labore nihil non odio quod tempore tenetur!'
  },
  {
    id: 3,
    img: user3,
    name: 'Olivia White',
    role: 'Regular client',
    text: 'Architecto assumenda blanditiis cupiditate eos eum, eveniet ex facilis id, rem, repellat temporibus.'
  },
];

function Feedbacks(props) {
  return (
    <section className={styles.feedbacks}>
      <div className={styles.container}>
        <h2>What People Say</h2>
        <div className={styles.feedbacksWrapper}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {feedbacksData.map(({ id, img, name, role, text }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={styles.feedback}>
                    <img className={styles.feedbackImg} src={img} alt="user"/>
                    <p className={styles.feedbackText}>
                      <FontAwesomeIcon icon={faQuoteLeft}/>
                      {text}
                      <FontAwesomeIcon icon={faQuoteRight}/>
                    </p>
                    <span className={styles.feedbackName}>{name}</span>
                    <span className={styles.feedbackRole}>{role}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;