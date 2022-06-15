import React from 'react';
import styles from './offerCard.module.scss';
import Image from 'next/image';

const OfferCard = ({offer}) => {
  console.log(
    'offer :',
    offer?.attributes?.image?.data?.attributes?.formats?.medium?.url
  );

  const image =
    offer?.attributes?.image?.data?.attributes?.formats?.medium?.url;

  return (
    <div className={styles.cardContainer}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={offer?.attributes?.title}
            width='700'
            height='500'
            objectFit='cover'
          />
        </div>
      )}

      <div className={styles.textContainer}>
        <div dangerouslySetInnerHTML={{__html:offer?.attributes?.body }}/>
        {/* <p className={styles.text}>{offer?.attributes?.body}</p> */}
      </div>
    </div>
  );
};

export default OfferCard;
