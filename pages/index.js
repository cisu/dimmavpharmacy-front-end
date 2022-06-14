import About from '../components/about/about';
import Blog from '../components/blog/blog';
import Epikoinwnia from '../components/epikoinwnia/epikoinwnia';
import HeroSection from '../components/home/heroSection';
import Offers from '../components/offers/offers';
import styles from '../styles/Home.module.css';
import {API_URL} from '../config/urls'
import qs from 'qs';

export default function Home(props) {

  const blogs = props.blogs
  const offers = props.offers



  // console.log('props: ', props)
  return (
    <div>
      <HeroSection />

      {/* About */}

      <About />

      {/* Offers */}
      <div id='prosfores'>
        <Offers offers={offers}/>
      </div>

      {/* blog */}
      <Blog blogs={blogs}/>

      {/* επικοινωνία */}
      <Epikoinwnia />
    </div>
  );
}

export async function getStaticProps(){

  const queryBlog = qs.stringify({
    sort:['createdAt:asc'],
    pagination: {
      // pageSize: 5,
      // page: 1,
      start: 0,
      limit: 3,
    },
    populate: '*', 
  }, {
    encodeValuesOnly: true,
  })

  const resBlog = await fetch(`${API_URL}/api/blogs?${queryBlog}`);

  const blogs = await resBlog.json();


  const queryOffer = qs.stringify({
    sort:['createdAt:asc'],
    populate: '*', 
  }, {
    encodeValuesOnly: true,
  })

  const resOffer = await fetch(`${API_URL}/api/offers?${queryOffer}`);

  const offers = await resOffer.json();


  return {
    props: {
      blogs,
      offers
    },
    revalidate: 30,
  }
}

