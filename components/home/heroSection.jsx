import React from 'react';
import Image from 'next/image';
import styles from './heroSection.module.scss'

const HeroSection = () => {
  return (
    <>
      {/* hero component */}
      <div className={styles.hero}>

        <div className={styles.layout} />
        {/* image */}
        <div className={styles.image}>
        <Image 
          src='/images/home_page_img.jpg'
          layout='fill'
          objectFit='cover'
          alt='Το φαρμακείο μας'
          />  
        </div>
        <div className={styles['hero-banner']}>
          <h1 className={styles['hero-title']}>ΚΑΛΩΣ ΗΡΘΑΤΕ!</h1>
          <p className={styles['hero-text']}>
          Όσον αφορά την φροντίδα σας ήρθατε στο σωστό μέρος. Το φαρμακείο μας σας παρέχει εμπεριστατωμένες συμβουλές υγείας και ομορφιάς ανάλογα με τις προσωπικές σας ανάγκες. Καλώς ήρθατε στο φαρμακείο της Δήμητρας Μαυρούλη!
          </p>
          <a href='tel:+302102825342' className={`btn btn-white scroll-link ${styles['hero-btn']}`}>
          Καλέστε μας!
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
