import React from 'react';
import styles from './epikoinwnia.module.scss';

const Epikoinwnia = () => {
  return (
    <section className={`section`}>
      {/* title  */}
      <div className={`title-wrapper`}>
        <h2 className='title'>
          Επικοινωνηστε <span className='subtitle'>μαζι μας</span>
        </h2>
      </div>
      {/* end of title  */}

      <div className={`section-center ${styles.container}`}>
        {/* Ωράριο Λειτουργίας */}
        <div>
          <h3>Ωράριο Λειτουργίας</h3>
          <div>
            <p className={styles.open}>Δευτέρα: 09:00 - 15:00 </p>
            <p className={styles.open}>
              Τρίτη: 09:00 - 14:30 και 17:30 - 21:00{' '}
            </p>
            <p className={styles.open}>Τετάρτη: 09:00 - 15:00 </p>
            <p className={styles.open}>
              Πέμπτη: 09:00 - 14:30 και 17:30 - 21:00{' '}
            </p>
            <p className={styles.open}>
              Παρασκεύη: 09:00 - 14:30 και 17:30 - 21:00{' '}
            </p>
          </div>
        </div>
        {/* end of Ωράριο Λειτουργίας */}

        {/* στοιχεία επικοινωνίας */}
        <div>
          <h3>Στοιχεία επικοινωνίας</h3>
          <div>
            <div className={styles.address}>
              Διεύθυνση:{' '}
              <address>
                Πολυτεχνείου 59, Ηράκλειο, Ελλάδα
              </address>{' '}
            </div>
            <div className={styles.phone}>
              Τηλέφωνο: <a href='tel:+302102825342'>210 2825342</a>{' '}
            </div>
          </div>
        </div>
        {/* end of στοιχεία επικοινωνίας */}
      </div>

      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.032240749783!2d23.76878721563211!3d38.04633510426124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a198a2463d9c27%3A0xffaaa8e6e61aaa33!2zzqDOv867z4XPhM61z4fOvc61zq_Ov8-FIDU5LCDOl8-BzqzOus67zrXOuc6_IDE0MSAyMQ!5e0!3m2!1sel!2sgr!4v1655202394371!5m2!1sel!2sgr'
          width={600}
          height={450}
          style={{border: 0}}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  );
};

export default Epikoinwnia;
