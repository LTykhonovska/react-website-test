import React, { useState } from 'react';
import logo from './../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ButtonFactory from "../../components/Button/Button";
import classNames from "classnames";
import { Slide } from "react-reveal";
import styles from './Header.module.css';

function Header(props) {

  const [isInfoExpanded, setIsInfoExpanded] = useState(false);
  const [isInfoBtnPressed, setIsInfoBtnPressed] = useState(false);

  const onMobileInfoBtnClick = () => {
    setIsInfoExpanded(!isInfoExpanded);
    setIsInfoBtnPressed(!isInfoBtnPressed);
  }

  const infoHamburgerClass = classNames(styles.infoHamburger, {
    [styles.pressed]: isInfoBtnPressed
  })

  return (
    <Slide top duration={1800} delay={600}>
      <section className={styles.header}>
        <div className={styles.logo}>
          <a href="/home">
            <img src={logo} alt="logo"/>
          </a>
        </div>
        <button className={infoHamburgerClass} onClick={onMobileInfoBtnClick}>
          <FontAwesomeIcon icon={faEllipsisVertical}/>
        </button>
        <div className={isInfoExpanded ? styles.infoMobile : styles.info}>
          <div className={styles.infoTimeline}>
            <FontAwesomeIcon icon={faClock}/>
            <span><small>09:00</small>AM — <small>05:00</small>PM</span>
          </div>
          <div className={styles.infoPhone}>
            <FontAwesomeIcon icon={faPhone}/>
            <a href="tel:+1 323-913-4688">+1 323-913-4688</a>
          </div>
          <ButtonFactory text={'Call me back'} type={'green'}/>
        </div>
      </section>
    </Slide>
  );
}

export default Header;