import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import styles from './header.module.scss';
import Link from 'next/link';
import {MenuItems} from '../../config/menuItems.js';
import Image from 'next/image';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const router = useRouter()

  const [showNavigation, setShowNavigation] = useState(false);
  const [search, setSearch] = useState(false)


  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShowNavigation(false)
  },[router.asPath])



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const handleSearch = () => {
    setSearch(!search)
  }

  return (
    <>
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
                <Image src='/logo.png' width={'100px'} height={'80px'} alt={'logo'} />
              </a>
            </Link>


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


            

            {/* later for search */}
            {/* <button className={styles.searchBtn} onClick={handleShow}>
              <i className="fas fa-search" />             
            </button> */}

           

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

      {/* {showNavigation &&
      <div className={styles.overlay}
      onClick={()=>{setShowNavigation(false)}}
      ></div>
      }
     */}
    </header>

   
    

    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Header;
