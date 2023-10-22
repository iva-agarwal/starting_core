import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className="slider-div">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="profile-sect">
              <div className="profile-sec">
                <h1 className="textWhy font-face-sa">Why We?</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
