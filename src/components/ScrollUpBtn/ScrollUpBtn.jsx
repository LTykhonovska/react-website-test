import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import styles from './ScrollUpBtn.module.css';

function ScrollUpBtn(props) {
  const scrollUpBtn = useRef();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  function onScroll() {
    if (document.documentElement.scrollTop > 50) {
      scrollUpBtn.current.style.display = "block";
    } else {
      scrollUpBtn.current.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <button className={styles.scrollUpBtn} ref={scrollUpBtn} onClick={topFunction}>
      <FontAwesomeIcon icon={faArrowAltCircleUp}/>
    </button>
  );
}

export default ScrollUpBtn;