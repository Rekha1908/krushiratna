import React from 'react';
import ghee from '../asset/Image/ghee.jpg';
import cow from '../asset/Image/Krushiratna - Cow 500.psd'
import dahi from '../asset/Image/dahi.JPG';
import taza from '../asset/Image/taza.JPG';
import Styles from './styles.module.css';

import dahis from '../asset/Image/krushi-dahis.jpg';
import taak from "../asset/Image/krushi-taaks.jpg";
import cowmilk from "../asset/Image/krushi-cows.jpg"
 

const Products = () => {
  const imageFiles = [
    {img:'krushi-taaks.jpg', text:"Taak"},
    {img:'krushi-dahis.jpg', text:"Dahi"},
    {img:'ghee.jpg', text:"Ghee"},
    {img:'krushi-cows.jpg', text:"Cow Milk"},
    {img:'taza.JPG', text:"Cow"},
    ];

  return (
    <div className={Styles.appContainer}>
    <div className={Styles.container}>
      
    <div className={Styles.imagegrid}>
      
      {imageFiles.map((imageFile, index) => (
        <div key={index} className={Styles.productGrid}>
          <img className={Styles.imageContainer}
          //src={imageFile.img}
          src={require(`../asset/Image/${imageFile.img}`)}
            alt={`Krushiratnaimages ${index + 1}`}
          />
          <p className={Styles.imageText}>{imageFile.text}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // You can adjust this based on your layout preferences
};

const imageStyle = {
  width: '30%', // Adjust the width as needed
  margin: '10px', // Add margin between images
};

export default Products;
