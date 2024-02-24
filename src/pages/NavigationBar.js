// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";

import styles  from "./styles.module.css";
import logo from "../asset/Image/logobhai.jpg"

function NavigationBar() {
  return (
    <nav className={styles.navStyle} >
            
          <ul className={styles.ulStyle}>
          
            <li className={styles.liStyle}>
              <Link className={styles.linkStyle} to="/">
                Home
              </Link>
            </li>
            <li className={styles.liStyle}>
              <Link className={styles.linkStyle} to="/about">
                About
              </Link>
            </li>
		
            <li className={styles.liStyle}>
              <Link className={styles.linkStyle} to="/contact">
                Contact
              </Link>
            </li>
			<li className={styles.liStyle}>
              <Link className={styles.linkStyle} to="/products">
                Products
              </Link>
            </li>
           <li className={styles.liStyle}>
           <BsFillTelephoneFill className={styles.iconStyle} /> 
            <Link className={styles.linkStyle}>+91-7888160160</Link>
           </li>
          </ul>
    </nav>
  );
}

export default NavigationBar;
