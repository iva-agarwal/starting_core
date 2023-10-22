import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
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
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <div className="slides">
            <div className="slide slide-1">
              <div className="slide-content">
                <h1>Rakul Singh</h1>
                <span>Core Full Stack Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="slides">
            <div className="slide slide-2">
              <div className="slide-content">
                <h1>Rukul Singh</h1>
                <span>Core Full Stack Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="slides">
            <div className="slide slide-3">
              <div className="slide-content">
                <h1>Rukul Singh</h1>
                <span>Core Full Stack Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="slides">
            <div className="slide slide-4">
              <div className="slide-content">
                <h1>Rukul Singh</h1>
                <span>Core Full Stack Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="slides">
            <div className="slide slide-5">
              <div className="slide-content">
                <h1>Rukul Singh</h1>
                <span>Core Full Stack Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
