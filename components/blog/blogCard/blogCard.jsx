import React from 'react';
import styles from './blogCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({blog}) => {

  const category =
    blog?.attributes?.categories?.data?.[0]?.attributes?.category;

  const read_time = blog?.attributes?.read_time;

  return (
    <article className={styles.blogCard}>
      <Link href={`/blog/${blog?.attributes?.slug}`}>
        <a>
          <div className={styles.blogImgContainer}>
            <div>
              <Image
                src={
                  blog?.attributes?.image?.data?.attributes?.formats?.medium
                    ?.url
                }
                alt='Tibet Adventure'
                width='700'
                height='500'
                layout='responsive'
                objectFit='cover'
              />
            </div>

            {category && <p className={styles.cardDate}>{category}</p>}
          </div>
          {/* tour footer */}
          <div className={styles.blogFooter}>
            <h4 className={styles.blogTitle}>{blog?.attributes?.title}</h4>
            {/* tour info */}
            <div className={styles.blogInfo}>
              {category && (
                <p className={styles.blogCategory}>
                  <span>
                    {/* <i className='fas fa-map' /> */}
                    <i className='fas fa-book-medical'></i>
                  </span>{' '}
                  {category}
                </p>
              )}

              {read_time && (
                <div className={styles.cardDetails}>
                  <i className='fas fa-book-open' />

                  <p>{read_time}</p>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
