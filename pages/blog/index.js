import React from 'react'
import {useRouter} from 'next/router';
import Blog from '../../components/blog/blog';

export default function BlogPage() {


  const router = useRouter()

  console.log('router blogPage: ', router.pathname)
  return (
  //   <section className={`section `} id='about'>
  //   {/* title  */}
  //   <div className={`title-wrapper`}>
  //     <h2 className='title'>
  //       Ολα <span className='subtitle'>τα αρθρα</span>
  //     </h2>
  //   </div>
  
  // </section>

  <Blog />
  )
}

