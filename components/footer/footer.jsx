import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      {/* footer links */}
      <div className={styles['footer-links']}>
        <a
          href='#home'
          className={`${styles['footer-link']} ${styles['scroll-link']}`}
        >
          Αρχική
        </a>
        <a
          href='#about'
          className={`${styles['footer-link']} ${styles['scroll-link']}`}
        >
          about
        </a>
        <a
          href='#services'
          className={`${styles['footer-link']} ${styles['scroll-link']}`}
        >
          services
        </a>
        <a
          href='#featured'
          className={`${styles['footer-link']} ${styles['scroll-link']}`}
        >
          featured
        </a>
        {/* <a
          href='#gallery'
          className={`${styles['footer-link']} ${styles['scroll-link']}`}
          scroll-link
        >
          gallery
        </a> */}
      </div>
      {/* footer icons */}
      <div className='footer-icons'>
        <a
          href='https://web.facebook.com/dimmavpharmacy/?_rdc=1&_rdr'
          target='_blank'
          className={styles['footer-icon']}
          rel='noreferrer'
        >
          <i className='fab fa-facebook' />
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          className={styles['footer-icon']}
          rel='noreferrer'
        >
          <i className='fab fa-twitter' />
        </a>
        {/* <a href="https://www.twitter.com" target="_blank" className="footer-icon"><i className="fab fa-squarespace" /></a> */}
      </div>
      <p className='copyright'>
        copyright © {new Date().getFullYear()} Φαρμακείο
        <span id='date' />. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
