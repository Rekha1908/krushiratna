// src/components/Home.js
import React from 'react';
import Styles from './styles.module.css'
import Footer from '../components/footer';

function About() {
  return (
    <div className={Styles.appContainer}>
      <div className={Styles.wordContainer}>
        <div className={Styles.paragraph}>
          <p className={Styles.aboutTabStyle}>
            Our journey began in 2018 with a firm belief in the significance of milk in every individual's 
            life. What initially started as an extension of our family business has now become a
            mission dedicated to purity and quality. We take great pride in serving you with a 
            wide range of dairy products, all crafted to deliver the authentic taste you deserve.
            Our offerings include dahi, taak, cow's milk, buffalo milk, and ghee, all aimed at
            enriching your daily life.
          </p>
        </div>
        <div className={Styles.paragraph}>
          <b className={Styles.aboutTitle}>Our Commitments</b>
          <p className={Styles.aboutTabStyle}>
            At Krushiranta Milk we believe the happiest animals make for the tastiest foods, and we’re committed to sourcing all of our dairy products from the best-treated animals you can find. Anything else would be providing you with less than the best possible cheeses, kinds of milk, creams, and yoghurts. That simply wouldn’t do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
