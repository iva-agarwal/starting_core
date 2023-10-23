
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import "./testimonial.css";


import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div className='testimonial'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        loop={true}
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
          <SwiperSlide>
            <div className="slidercontent">
                <div><img src="./images/icons8-double-quotes-30.png" /></div>
              <div className="view">
                <div className="viewdescription">Starting Core created a fantastic landing page for our education brand that was tailored perfectly to our needs. The team was extremely professional, responsive, and efficient in their work. They took the time to understand our vision and goals and delivered a final product that exceeded our expectations. We highly recommend their services to anyone looking to improve their online presence.</div>
              </div>
              <div className="company">
                <div>
                  <h1>Anurag Mishra
                  </h1>
                  <h3>Founder / Cipher Schools</h3>
                </div>
                <img className="cipher" src="./images/client1.png" />
              </div>

              {/* <hr /> */}
            </div>
          </SwiperSlide>
       
        <SwiperSlide>
        <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Thanks to Starting Core for creating our website in such a short time. We were impressed with the quality of the work and the responsiveness of the team. We appreciated the clear communication throughout the process and the attention to detail in the final product. We highly recommend Starting Core for a reliable  web design service.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Nagendra Singh Chauhan
                     </h1>
                     <h3>CEO / Vhrwf</h3>
                   </div>
                   <img className="ngo" src="./images/ngo.png" />
                 </div>
                 {/* <hr /> */}
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Got a website developed by the developers of Starting Core. Their service is really good and output submission was on time. Really satisfied with the web layout and efficiency. Their service is affordable and the developers have been cooperative throughout the project completion. Thankyou Starting Core, Mohit Pareek and Devraj Singh Rathore.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Parul and Aza
                     </h1>
                     <h3>Founder / Baba Azam</h3>
                   </div>
                   <img className="baba" src="./images/client3.png" />
                 </div>
               </div>      </SwiperSlide>      <SwiperSlide>        
               <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Had an amazing experience working with starting core. The best thing about them is that they work more as a team rather than an agency. Loved the UI/UX part of your work and also everything on the backend is top-notch. Starting Core is the go-to place for every founder who wants to build his/her web product.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Mukul</h1>
                     <h3>Founder / kontent media</h3>
                   </div>
                   <img className="kontent" src="./images/Frame 1396.png" />
                 </div>
                 {/* <hr /> */}
               </div>
      </SwiperSlide>
       
          <SwiperSlide>
            <div className="slidercontent">
                <div><img src="./images/icons8-double-quotes-30.png" /></div>
              <div className="view">
                <div className="viewdescription">Starting Core created a fantastic landing page for our education brand that was tailored perfectly to our needs. The team was extremely professional, responsive, and efficient in their work. They took the time to understand our vision and goals and delivered a final product that exceeded our expectations. We highly recommend their services to anyone looking to improve their online presence.</div>
              </div>
              <div className="company">
                <div>
                  <h1>Anurag Mishra
                  </h1>
                  <h3>Founder / Cipher Schools</h3>
                </div>
                <img className="cipher" src="./images/client1.png" />
              </div>

              {/* <hr /> */}
            </div>
          </SwiperSlide>
       
        <SwiperSlide>
        <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Thanks to Starting Core for creating our website in such a short time. We were impressed with the quality of the work and the responsiveness of the team. We appreciated the clear communication throughout the process and the attention to detail in the final product. We highly recommend Starting Core for a reliable  web design service.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Nagendra Singh Chauhan
                     </h1>
                     <h3>CEO / Vhrwf</h3>
                   </div>
                   <img className="ngo" src="./images/ngo.png" />
                 </div>
                 {/* <hr /> */}
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Got a website developed by the developers of Starting Core. Their service is really good and output submission was on time. Really satisfied with the web layout and efficiency. Their service is affordable and the developers have been cooperative throughout the project completion. Thankyou Starting Core, Mohit Pareek and Devraj Singh Rathore.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Parul and Aza
                     </h1>
                     <h3>Founder / Baba Azam</h3>
                   </div>
                   <img className="baba" src="./images/client3.png" />
                 </div>
               </div>      </SwiperSlide>      <SwiperSlide>        
               <div className="slidercontent">
                   <div><img src="./images/icons8-double-quotes-30.png" /></div>
                 <div className="view">
                   <div className="viewdescription">Had an amazing experience working with starting core. The best thing about them is that they work more as a team rather than an agency. Loved the UI/UX part of your work and also everything on the backend is top-notch. Starting Core is the go-to place for every founder who wants to build his/her web product.</div>
                 </div>
                 <div className="company">
                   <div>
                     <h1>Mukul</h1>
                     <h3>Founder / kontent media</h3>
                   </div>
                   <img className="kontent" src="./images/Frame 1396.png" />
                 </div>
                 {/* <hr /> */}
               </div>
      </SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
}
