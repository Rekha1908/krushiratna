// src/components/Home.js
import React from 'react';
import Styles from './styles.module.css'

function Contact() {
  return (
    <div className={Styles.contactContainer}>
      <div className={Styles.contactAppContainer}>
        <div className={Styles.contactSection}>
          <h1 className={Styles.contactHeader}>Address</h1>
          <p className={Styles.contactInfo}>Gat No-66, AT- Bhamboli, Amboli, Pune - 410505 (Chakan MIDC-2)</p>
        </div>
        <div className={Styles.contactSection}>
          <h1 className={Styles.contactHeader}>Contact us on</h1>
          <p className={Styles.contactInfo}>987809870</p>
        </div>
        <div className={Styles.contactSection}>
          <h1 className={Styles.contactHeader}>Write us on</h1>
          <p className={Styles.contactInfo}>Bhamchanramilk@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
