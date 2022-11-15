import React from 'react';
import styles from './Button.module.css';

function ButtonWhite({text}) {
  return (
    <div>
      <button className={styles.buttonWhite}>{text}</button>
    </div>
  );
}

function ButtonGreen({text}) {
  return (
    <div>
      <button className={styles.buttonGreen}>{text}</button>
    </div>
  );
}

function ButtonFactory({type, text}) {
  if(type === 'green') {
    return <ButtonGreen text={text} />
  }
  if(type === 'white') {
    return <ButtonWhite text={text} />
  }
  return <button>{text}</button>
}


export default ButtonFactory;