import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from './about.module.scss';

const About = () => {
  const router = useRouter();

  return (
    <section className={`section ${styles.about}`} id='about'>
      {/* title  */}
      <div className={`title-wrapper`}>
        <h2 className='title'>
          σχετικα με<span className='subtitle'> εμας</span>
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
          <h3>ΚΑΛΩΣ ΗΡΘΑΤΕ!</h3>
          <p>
          Όσον αφορά την φροντίδα σας ήρθατε στο σωστό μέρος. Το φαρμακείο μας σας παρέχει εμπεριστατωμένες συμβουλές υγείας και ομορφιάς ανάλογα με τις προσωπικές σας ανάγκες. Καλώς ήρθατε στο φαρμακείο της Δήμητρας Μαυρούλη!
          </p>
          <p>
          Όσον αφορά την φροντίδα σας ήρθατε στο σωστό μέρος. Το φαρμακείο μας σας παρέχει εμπεριστατωμένες συμβουλές υγείας και ομορφιάς ανάλογα με τις προσωπικές σας ανάγκες. Καλώς ήρθατε στο φαρμακείο της Δήμητρας Μαυρούλη!
          </p>
          {router.pathname !== '/about' && (
            <Link href='/about'>
              <a className={`btn-primary ${styles.btn}`} >Περισσότερα</a>
            </Link>
          )}
        </article>
      </div>
    </section>
  );
};

export default About;
