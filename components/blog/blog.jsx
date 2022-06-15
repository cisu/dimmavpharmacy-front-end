import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './blog.module.scss';
import BlogCard from './blogCard/blogCard';

const Blog = ({blogs}) => {

  
  const router = useRouter();




  return (
    <>
      {/* featured tours */}
      <section className={`section ${styles['featured-blog']}`} id='featured'>
        {/* title  */}
        <div className={`title-wrapper`}>
          <h2 className='title'>
            {router.pathname === '/blog' ? (
              <>
                ολα <span className='subtitle'>τα αρθρα</span>{' '}
              </>
            ) : (
              <>
                Τα <span className='subtitle'> αρθρα</span>{' '}
              </>
            )}
          </h2>
        </div>
        {/* end of title  */}
        {/* featured-center */}
        <div className={`section-center ${styles['featured-center']}`}>
          {/* single tour */}

          {blogs?.data?.map((blog, index)=>{
            return (
              <BlogCard key={index} blog={blog} />
            )
          }
            
          )}
        

          {/* <BlogCard />

          <BlogCard /> */}

          {/* <BlogCard /> */}

          {/* end of single tour */}
        </div>
        {/* end of tours center */}

        {router.pathname === '/blog' ? '' : (
          <div className={styles.allBlogLink}>
          <Link href='/blog'>
            <a className='btn-primary'>ολα τα αρθρα</a>
          </Link>
        </div>
        )}
        
      </section>
      {/* end of featured tours */}
    </>
  );
};

export default Blog;
