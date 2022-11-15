import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from './SocialsList.module.css';

function SocialsList(props) {
  return (
      <ul className={styles.socials}>
        <li className={styles.socialsItem}>
          <FontAwesomeIcon icon={faFacebookF}/>
        </li>
        <li className={styles.socialsItem}>
          <FontAwesomeIcon icon={faTwitter}/>
        </li>
        <li className={styles.socialsItem}>
          <FontAwesomeIcon icon={faInstagram}/>
        </li>
        <li className={styles.socialsItem}>
          <FontAwesomeIcon icon={faYoutube}/>
        </li>
      </ul>
  );
}

export default SocialsList;