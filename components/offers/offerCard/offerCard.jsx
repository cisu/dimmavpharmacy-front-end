import React from 'react';
import styles from './offerCard.module.scss';
import Image from 'next/image';

const OfferCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src='/images/IMG_20181018_133128.jpg'
          width='991'
          height='500'
          alt='offer'
          objectFit='cover'
        />
      </div>

      <div className={styles.textContainer}>
        <p className={styles.text}>
          Όλα τα αντηλιακά με μειον 50 τοις εκατό!!! Για λίγες μέρες μόνο!
          Παρασκευή 30 Ιουλίου και Δευτέρα 02 Αυγούστου ​ Vichy Lierac La Roche
          Posay Avene Frezyderm Bepanthol
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
