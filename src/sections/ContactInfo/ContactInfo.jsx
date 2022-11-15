import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faHouse, faComments } from "@fortawesome/free-solid-svg-icons";
import { Slide } from 'react-reveal';
import styles from './ContactInfo.module.css';

function ContactInfo(props) {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <Slide bottom cascade duration={1200} delay={500}>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faMobile}/>
              <span/>
              <a href="tel:+123456789">+123456789</a>
              <a href="tel:+987654321">+987654321</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faHouse}/>
              <span/>
              <a href="tel:+123456789">4730 Crystal Springs Dr,<br/> Los Angeles, CA 90027</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faComments}/>
              <span/>
              <a href="mailto:react@gmail.com">react@gmail.com</a>
              <a href="mailto:reactwebsite@gmail.com">reactwebsite@gmail.com</a>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default ContactInfo;