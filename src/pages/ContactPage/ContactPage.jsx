import React from 'react';
import ContactInfo from "../../sections/ContactInfo/ContactInfo";
import Form from "../../sections/Form/Form";
import MapSection from "../../sections/MapSection/MapSection";
import styles from './ContactPage.module.css';

function ContactPage(props) {

  const location = {
    address: 'Ukraine, Uzhgorod',
    lat: 48.6208,
    lng: 22.2879,
  }

  return (
    <div className={styles.contactPage}>
      <MapSection location={location} zoomLevel={17}/>
      <ContactInfo/>
      <Form/>
    </div>
  );
}

export default ContactPage;