import React from 'react'
import styles from './about.module.scss';

const About = () => {
  return (
    <section className={`section ${styles.about}`} id="about">
  {/* title  */}
  <div className={`title-wrapper`}>
    <h2 className="title">about <span className="subtitle">us</span></h2>
  </div>
  {/* end of title  */}
  {/* about-center */}
  <div className={`section-center ${styles['about-center']}`}>
    {/* about img wrapper*/}
    <div className="about-img">
      <img src="./images/about.jpg" className={styles['about-photo']} alt="awesome beach" />
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
      <a href="#" className="btn-primary">read more</a>
    </article>
  </div>
</section>

  )
}

export default About