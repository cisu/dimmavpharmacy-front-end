import React from 'react';
import styles from './about.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className={`section ${styles.about}`} id='about'>
      {/* title  */}
      <div className={`title-wrapper`}>
        <h2 className='title'>
          about <span className='subtitle'>us</span>
        </h2>
      </div>
      {/* end of title  */}
      {/* about-center */}
      <div className={`section-center ${styles['about-center']}`}>
        {/* about img wrapper*/}
        <div className={styles['about-img']}>
          {/* <img
            src='./images/about.jpg'
            className={styles['about-photo']}
            alt='awesome beach'
          /> */}

          <Image 
          src='/images/about.jpg'
          alt='awesome beach'
          width={675}
          height={510}
          objectFit='cover'
          />
        </div>
        {/* about info */}
        <article className={styles['about-info']}>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <Link  href='#'>
            <a className='btn-primary'>
              read more
            </a>
          </Link>
         
        </article>
      </div>
    </section>
  );
};

export default About;
