import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import {MenuItems} from '../../config/menuItems.js';

const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      {/* footer links */}
      <div className={styles['footer-links']}>
        {MenuItems.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              <a
                className={`${styles['footer-link']} ${styles['scroll-link']}`}
              >
                {item.title}
              </a>
            </Link>
          );
        })}

     
      
      </div>
      {/* footer icons */}
      <div className='footer-icons'>
        {/* facebook */}
        <a
          href='https://web.facebook.com/dimmavpharmacy/?_rdc=1&_rdr'
          target='_blank'
          className={styles['footer-icon']}
          rel='noreferrer'
          title='facebook'
        >
          <i className='fab fa-facebook' />
        </a>
        {/* twitter */}
        {/* <a
          href='https://www.twitter.com'
          target='_blank'
          className={styles['footer-icon']}
          rel='noreferrer'
        >
          <i className='fab fa-twitter' />
        </a> */}
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
