import About from '../components/about/about';
import Blog from '../components/blog/blog';
import Epikoinwnia from '../components/epikoinwnia/epikoinwnia';
import HeroSection from '../components/home/heroSection';
import Offers from '../components/offers/offers';
import styles from '../styles/Home.module.css';
import {API_URL} from '../config/urls'
import qs from 'qs';
import { NextSeo } from 'next-seo';

export default function Home(props) {

  const blogs = props.blogs
  const offers = props.offers





  return (
    <>

<NextSeo
      title="Φαρμακείο Δήμητρα Μαυρούλη"
      description="Όσον αφορά την φροντίδα σας ήρθατε στο σωστό μέρος. Το φαρμακείο μας σας παρέχει εμπεριστατωμένες συμβουλές υγείας και ομορφιάς ανάλογα με τις προσωπικές σας ανάγκες. Καλώς ήρθατε στο φαρμακείο της Δήμητρας Μαυρούλη!"
      canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}`}
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
        title: 'Φαρμακείο Δήμητρα Μαυρούλη',
        description: 'Όσον αφορά την φροντίδα σας ήρθατε στο σωστό μέρος. Το φαρμακείο μας σας παρέχει εμπεριστατωμένες συμβουλές υγείας και ομορφιάς ανάλογα με τις προσωπικές σας ανάγκες. Καλώς ήρθατε στο φαρμακείο της Δήμητρας Μαυρούλη!',
        images: [
          {
            url: '/images/home_page_img.jpg',
            width: 800,
            height: 600,
            alt: 'Φαρμακείο Δήμητρα Μαυρούλη',
            type: 'image/jpeg',
          },
        ],
        site_name: 'dimmavpharmacy',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

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
    </>
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

