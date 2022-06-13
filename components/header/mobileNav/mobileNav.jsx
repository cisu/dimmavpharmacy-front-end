import React from 'react';
import styles from './mobileNav.module.scss';

const MobileNav = () => {
  return (
    <>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />

        <label htmlFor='navi-toggle' className={styles['navigation__button']}>
          <span className={styles['navigation__icon']}></span>
        </label>

        <div className={styles['navigation__background']}>&nbsp;</div>

        <nav className={styles.navigation__nav}>
          <ul className={styles['navigation__list']}>
            <li className={styles['navigation__item']}>
              <a href='#' className={styles['navigation__link']}>
                <span>01</span>
                About Natous
              </a>
            </li>
            <li className={styles['navigation__item']}>
              <a href='#' className={styles['navigation__link']}>
                <span>02</span>
                Your benfits
              </a>
            </li>
            <li className={styles['navigation__item']}>
              <a href='#' className={styles['navigation__link']}>
                <span>03</span>
                Popular tours
              </a>
            </li>
            <li className={styles['navigation__item']}>
              <a href='#' className={styles['navigation__link']}>
                <span>04</span>
                Stories
              </a>
            </li>
            <li className={styles['navigation__item']}>
              <a href='#' className={styles['navigation__link']}>
                <span>05</span>
                Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
