import React, { useEffect, useState } from 'react';
import styles from './LinearProgressBars.module.css';

const linearProgressBarsData = [
  {
    id: 1,
    value: 74,
    backgroundColor: '#03b3a7',
    title: 'Tours'
  },
  {
    id: 2,
    value: 67,
    backgroundColor: '#f8eb71',
    title: 'Excursions'
  },
  {
    id: 3,
    value: 88,
    backgroundColor: '#162d44',
    title: 'Hotels'
  },
];

function LinearProgressBars(props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <section className={styles.linearProgressBarsWrapper}>
      {linearProgressBarsData.map(({ id, value, backgroundColor, title }) => {
        return (
          <div className={styles.linearProgressBar} key={id}>
            <h6>{title}</h6>
            <div className={styles.linearProgressBarBackground}>
              <div className={styles.linearProgressBarPath}
                   style={{ width: isMounted && `${value}%`, backgroundColor: backgroundColor }}>
                <span className={styles.linearProgressBarValue}>{value}%</span>
                <span className={styles.linearProgressBarMarker}/>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default LinearProgressBars;