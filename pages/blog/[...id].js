import React from 'react';
import {API_URL} from '../../config/urls';
import Image from 'next/image';
import qs from 'qs';
import styles from '../../styles/blog.module.scss'

export default function SingleBlogPage({post}) {
  
  const image =
  post?.data?.[0]?.attributes?.image?.data?.attributes?.formats?.medium?.url;
  
  const category = post.data[0]?.attributes?.categories?.data?.[0]?.attributes?.category;

  const read_time = post.data[0]?.attributes?.read_time;
  
 
  return (
    <section className={`section`}>
      {/* title  */}
      <div className={`title-wrapper`}>
        <h1 className='title'>
          <span className='subtitle' style={{textTransform: 'none'}}>{post?.data?.[0]?.attributes?.title}</span>
        </h1>
      </div>

      <div className={'section-center'}>
        {image && (
          <div className={styles.image}>
            <Image 
            src={image} 
            width={700} 
            height={400} 
            alt={post?.data?.[0]?.attributes?.title} 
            layout='responsive'
            objectFit='cover'
            />
          </div>
        )}

        {/* category time */}
        <div className={styles.attributesContainer}>
          <div>
          {category && (
                <p className={styles.p}>
                  <span>
                    {/* <i className='fas fa-map' /> */}
                    <i className='fas fa-book-medical'></i>
                  </span>{' '}
                  {category}
                </p>
              )}

          </div>

          <div>
          {read_time && (
                <p className={styles.p}>
                  <span>
                  <i className='fas fa-book-open' />
                  </span>

                {read_time}
                </p>
              )}
          </div>

        </div>

        {/* body */}
        <div
          dangerouslySetInnerHTML={{__html: post?.data?.[0]?.attributes?.body}}
        />
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({params: {id}}) {


  const queryBlog = qs.stringify(
    {
      filters: {
        slug: {
          $eq: id,
        },
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const resBlog = await fetch(`${API_URL}/api/blogs?${queryBlog}`);

  const post = await resBlog.json();

  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}
