import React from 'react';
import styles from './heroSection.module.scss'

const HeroSection = () => {
  return (
    <>
      {/* hero component */}
      <div className={styles.hero}>
        <div className={styles['hero-banner']}>
          <h1 className={styles['hero-title']}>continue exploring</h1>
          <p className={styles['hero-text']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href='#featured' className={`btn btn-white scroll-link ${styles['hero-btn']}`}>
            explore tours
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
