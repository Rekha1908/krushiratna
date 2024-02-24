


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Styles from './styles.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import allProducts from  "../asset/Image/allprds.jpg"
import dahis from '../asset/Image/krushi-dahis.jpg';
import taak from "../asset/Image/taakubhai.jpg";
import cowmilk from "../asset/Image/krushi-cows.jpg";
import ghee from "../asset/Image/ghee.jpg"
import Products from './Products';


const Home = () => {
  return (
    <div className={Styles.appContainer}>
      <Products/>

    {/* <div className={Styles.carouselcontainer}>
      <Carousel autoPlay infiniteLoop showArrows={true}>
      
      
      <div>
          <img  className={Styles.img} src={allProducts} alt="All Products" />
          <p className="legend">Krushiranta Products</p>
        </div>
        <div>
          <img  className={Styles.img}  src={ghee} alt="Ghee" />
          <p className="legend">Krushiranta Ghee</p>
        </div>
        <div>
          <img  className={Styles.img}  src="https://speedy.uenicdn.com/7bc2e13a-6893-4397-a68d-0e071363a7a5/c2688_1000a/image/upload/v1568054105/business/7bc2e13a-6893-4397-a68d-0e071363a7a5/IMG-20190214-WA0002jpg.jpg" alt="Dahi" />
          <p className="legend">Krushiratna Dahi</p>
        </div>
        <div>
          <img  className={Styles.img} src={taak} alt="Slide 2" />
          <p className="legend">Krushiratna Taak</p>
        </div>
        <div>
          <img  className={Styles.img} src={cowmilk} alt="Cow milk" />
          <p className="legend">Krushiratna Cow Milk</p>
        </div>
        
      </Carousel>
    </div> */}
    </div>
  );
};

export default Home;
