import React from 'react';
import styles from './SectionHeading.module.css';

function SectionHeading({ heading }) {
  return (
    <h3 className={styles.sectionHeading}>{heading}</h3>
  );
}

export default SectionHeading;