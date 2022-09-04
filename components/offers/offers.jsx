import React from 'react';
import OfferCard from './offerCard/offerCard';
import styles from './offers.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Offers = ({offers}) => {



  return (
    <>
      {/* services */}
      <section className='section services' id='services'>
        {/* title  */}
        <div className='title-wrapper'>
          <h2 className='title'>
            οι <span className='subtitle'>προσφορες μας</span>
          </h2>
        </div>
        {/* end of title  */}
        <div className='section-center services-center'>
         
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {offers?.data?.map((offer, index) => {
          return(
            <SwiperSlide key={index}><OfferCard offer={offer} /></SwiperSlide>
          )
        })}
      
        {/* <SwiperSlide><OfferCard /></SwiperSlide>
        <SwiperSlide><OfferCard /></SwiperSlide>
        <SwiperSlide><OfferCard /></SwiperSlide>
        <SwiperSlide><OfferCard /></SwiperSlide>
        <SwiperSlide><OfferCard /></SwiperSlide> */}
        
      </Swiper>
            
            
            
             
            

           
            

            
       
        </div>
      </section>
      {/* end of services */}
    </>
  );
};

export default Offers;
