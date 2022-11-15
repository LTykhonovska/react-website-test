import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../images/heroSlider1.jpg';
import slider2 from '../../images/heroSlider2.jpg';
import slider3 from '../../images/heroSlider3.jpg';
import ButtonFactory from "../../components/Button/Button";
import styles from './Hero.module.css';

const swiperSlidesData = [
  {
    id: 1,
    img: slider1,
    title: 'ENJOY THE BEST DESTINATIONS WITH OUR TRAVEL AGENCY',
    subtitle: 'Explore',
    span: 'The World'
  },
  {
    id: 2,
    img: slider2,
    title: 'A TEAM OF PROFESSIONAL TRAVEL EXPERTS',
    subtitle: 'Trust',
    span: 'Our Experiences'
  },
  {
    id: 3,
    img: slider3,
    title: 'BUILD YOUR NEXT HOLIDAY TRIP WITH US',
    subtitle: 'Create',
    span: 'Your Tour'
  },
];

function Hero(props) {
  return (
    <section>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            direction: 'horizontal'
          },
          1200: {
            direction: 'vertical'
          }
        }}
      >
        {swiperSlidesData.map(({ img, title, subtitle, span, id }) => {
          return (
            <SwiperSlide className={styles.sliderItem} key={id}>
              <img className={styles.sliderImage} src={img} alt={title}/>
              <div className={styles.sliderText}>
                  <h6>
                    {title}
                  </h6>
                <h4>
                  {subtitle}
                  <span>{span}</span>
                </h4>
                <ButtonFactory text={'Get in Touch'} type={'white'}/>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Hero;