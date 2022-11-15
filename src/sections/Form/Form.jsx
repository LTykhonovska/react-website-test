import React from 'react';
import ButtonFactory from "../../components/Button/Button";
import styles from './Form.module.css';

function Form(props) {
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <h3>Get in touch</h3>
          <span>If you have any questions, just fill in the contact form, and we will answer you shortly.</span>
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" id="name" name="name" placeholder="Your Name" required />
          <input className={styles.input} type="email" id="email" name="email" placeholder="E-mail" required />
          <input className={styles.input} type="tel" id="phone" name="phone" placeholder="Phone" required />
          <textarea className={styles.textarea} id="textarea" name="textarea" placeholder="Message" rows="4" cols="50"/>
          <ButtonFactory text={'Get in Touch'} type={'green'}/>
        </form>
      </div>
    </section>
  );
}

export default Form;