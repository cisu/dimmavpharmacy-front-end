import React, {useState} from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import {MenuItems} from '../../config/menuItems.js';
import Image from 'next/image';

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <header
      id='home'
      className={styles.header}
      //  style={{position: 'sticky', top: '0', backgroundColor: '#fff'}}
    >
      {/* navbar */}
      <nav className={styles.navbar}>
        {/* <i className="fab fa-facebook"></i> */}

        <div
          className={`${styles['nav-center']} ${
            showNavigation ? styles.bgNavigation : ''
          }`}
        >
          {/* nav header */}
          <div className={styles['nav-header']}>
           
            <Link href='/'>
              
              <a className={styles['nav-logo']}>
                {/* <i className='fas fa-clinic-medical' /> */}

                <Image 
                  src='/logo.png'
                  width={40}
                  height={40}
                  alt={'logo'}
                />
              </a>
            </Link>
            {/* <img
              src='./images/logo.svg'
              className={styles['nav-logo']}
              alt='DM'
            /> */}

            {/* bars */}
            <button
              type='button'
              className={styles['nav-toggle']}
              id='nav-toggle'
              aria-label='nav toggler'
              onClick={() => {
                handleNavigation();
              }}
            >
              <i className={showNavigation ? 'fas fa-times' : `fas fa-bars`} />
            </button>
          </div>
          {/* end of nav header */}
          {/* nav links */}
          <div
            className={
              showNavigation
                ? `${styles['nav-links']} ${styles['active']}`
                : styles['nav-links']
            }
            id='nav-links'
          >
            {/* single link */}

            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <a
                    className={`${styles['scroll-link']} ${styles['nav-link']}`}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>
          {/* end of nav links */}
          {/* nav social media icons */}
          {/* footer icons */}
          <div className={styles['nav-icons']}>
            {/* facebook */}
            <a
              href='https://web.facebook.com/dimmavpharmacy/?_rdc=1&_rdr'
              target='_blank'
              title='Facebook'
              className={styles['nav-icon']}
              rel='noreferrer'
            >
              <i className='fab fa-facebook'></i>
            </a>

            {/* twitter */}
            {/* <a
              href='https://www.twitter.com'
              target='_blank'
              className={styles['nav-icon']}
              rel='noreferrer'
            >
              <i className='fab fa-twitter' />
            </a> */}
            {/* end of nav social media icons */}
          </div>
        </div>
      </nav>

      {/* {showNavigation && <MobileNav />} */}
    </header>
  );
};

export default Header;
