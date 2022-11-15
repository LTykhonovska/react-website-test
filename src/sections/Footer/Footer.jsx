import React from 'react';
import ButtonFactory from "../../components/Button/Button";
import SocialsList from "../../components/SocialsList/SocialsList";
import ScrollUpBtn from "../../components/ScrollUpBtn/ScrollUpBtn";
import { faMailForward, faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Footer.module.css';


function Footer(props) {
  return (
    <section>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerWrapper}>
            <div className={styles.contactUs}>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone}/>
                  <a href={`tel:+1 323-913-4688`}>+1 323-913-4688</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMailForward}/>
                  <a href={`mailto:info@demolink.org`}>info@demolink.org</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapLocation}/>
                  <a href='/#'>4730 Crystal Springs Dr, <br/> Los Angeles, CA 90027</a>
                </li>
              </ul>
            </div>
            <div className={styles.popularNews}>
              <h4>Popular News</h4>
              <div className={styles.popularNewsWrapper}>
                <div className={styles.popularNewsItem}>
                  <a href="/#">
                    Your Personal Guide to 5 Best Places to Visit on Earth
                  </a>
                  <span> May 04, 2019</span>
                </div>
                <div className={styles.popularNewsItem}>
                  <a href="/#">
                    Top 10 Hotels: Rating by Wonder Tour Travel Experts
                  </a>
                  <span> May 04, 2019</span>
                </div>
              </div>
            </div>
            <div className={styles.quickLinks}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/home">About Us</a>
                </li>
                <li>
                  <a href="/tours">Our Tours</a>
                </li>
                <li>
                  <a href="/team">Our Team</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
              <ButtonFactory text={'Get in Touch'} type={'white'}/>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.container}>
            <div className={styles.copyrightWrapper}>
              <span>© 2022 Wonder Tour. <br/> All Rights Reserved. </span>
              <SocialsList/>
              <a href="/#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <ScrollUpBtn/>
      </div>
    </section>
  );
}

export default Footer;