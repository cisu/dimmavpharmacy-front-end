import React, {useState} from 'react'
import styles from './header.module.scss'
import Link from 'next/link';
import MobileNav from './mobileNav/mobileNav';
import {MenuItems} from '../../config/menuItems.js'

const Header = () => {

  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigation = () => {
    setShowNavigation(!showNavigation)
  }

 

  return (
<header id="home" style={{position: 'sticky', top: '0', backgroundColor: '#fff'}}>
  {/* navbar */}
  <nav className={styles.navbar}>
  {/* <i className="fab fa-facebook"></i> */}
 
    <div 
    className={`${styles['nav-center']} ${showNavigation ? styles.bgNavigation : ''}`}
   
    >
      {/* nav header */}
      <div className={styles['nav-header']}>
        <img src="./images/logo.svg" className={styles['nav-logo']} alt='title' />

        {/* bars */}
        <button type="button" className={styles['nav-toggle']} id="nav-toggle" aria-label="nav toggler" onClick={() => {handleNavigation()}}>
          <i className={showNavigation ? 'fas fa-times' :`fas fa-bars`} />
        </button>
      </div>
      {/* end of nav header */}
      {/* nav links */}
      <div className={showNavigation ? `${styles['nav-links']} ${styles['active']}` : styles['nav-links']} id="nav-links">
        {/* single link */}

        {
          MenuItems.map((item, index) => {
            return (
              <Link href={item.url} key={index}>
              <a className={`${styles['scroll-link']} ${styles['nav-link']}`}>
                {item.title}
              </a>
              </Link>
            )
          })

        }
       
       
      </div>
      {/* end of nav links */}
      {/* nav social media icons */}
      {/* footer icons */}
      <div className={styles['nav-icons']}>
        <a href="https://web.facebook.com/dimmavpharmacy/?_rdc=1&_rdr" target="_blank" className={styles['nav-icon']} rel="noreferrer">
        <i className="fab fa-facebook"></i>
            </a>
        <a href="https://www.twitter.com" target="_blank" className={styles['nav-icon']} rel="noreferrer"><i className="fab fa-twitter" /></a>
        {/* end of nav social media icons */}
      </div>
    </div>
    </nav>

    {/* {showNavigation && <MobileNav />} */}
 
</header>

  )
}

export default Header



