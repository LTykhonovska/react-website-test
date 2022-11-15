import React from 'react';
import ProgressProvider from "./ProgressProvider";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import styles from './CircularProgressBars.module.css';

const circularProgressBarsData = [
  {
    id: 1,
    valueEnd: 73,
    pathColor: '#03b3a7',
    title: 'Tours'
  },
  {
    id: 2,
    valueEnd: 99,
    pathColor: '#f8eb71',
    title: 'Excursions'
  },
  {
    id: 3,
    valueEnd: 85,
    pathColor: '#162d44',
    title: 'Hotels'
  },
];

function CircularProgressBars(props) {
  return (
    <section className={styles.circularProgressBarsWrapper}>
      {circularProgressBarsData.map(({id, valueEnd, pathColor, title}) => {
        return (
          <div className={styles.circularProgressBar} key={id}>
            <h6>{title}</h6>
            <ProgressProvider valueStart={0} valueEnd={valueEnd}>
              {value => <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 1.5,
                  pathColor: pathColor,
                  textColor: '#727171',
                  trailColor: '#d2d2d2',
                })}
              />}
            </ProgressProvider>
          </div>
        );
      })}

    </section>
  );
}

export default CircularProgressBars;