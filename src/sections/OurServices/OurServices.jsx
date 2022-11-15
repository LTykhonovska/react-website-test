import React from 'react';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWallet,
  faFireFlameCurved,
  faHeadphones,
  faSliders,
  faEarth,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import styles from './OurServices.module.css';

const servicesData = [
  {
    id: 1,
    icon: faSliders,
    title: 'Personalized Matching',
    text: 'Our unique matching system lets you find just the tour you want for your next holiday.'
  },
  {
    id: 2,
    icon: faEarth,
    title: 'Wide Variety of Tours',
    text: 'We offer a wide variety of personally picked tours with destinations all over the globe.'
  },
  {
    id: 3,
    icon: faStar,
    title: 'Highly Qualified Service',
    text: 'Our tour managers are qualified, skilled, and friendly to bring you the best service.'
  },
  {
    id: 4,
    icon: faHeadphones,
    title: '24/7 Support',
    text: 'You can always get professional support from our staff 24/7 and ask any question you have.'
  },
  {
    id: 5,
    icon: faFireFlameCurved,
    title: 'Handpicked Hotels',
    text: 'Our people offers only the best selection of affordable and luxury hotels to our clients.'
  },
  {
    id: 6,
    icon: faWallet,
    title: 'Best Price Guarantee',
    text: 'If you find tours that are cheaper than ours, we will compensate the difference.'
  },
]

function OurServices(props) {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeading heading='Our Services'/>
        <div className={styles.servicesWrapper}>
          {servicesData.map(({ icon, title, text }, id) => {
            return (
              <div className={styles.serviceItem} key={id}>
                <div className={styles.serviceIcon}>
                  <FontAwesomeIcon icon={icon}/>
                </div>
                <div className={styles.serviceDescr}>
                  <h5>{title}</h5>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurServices;