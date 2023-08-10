import React, { Component } from "react";
import Slider from "react-slick";

import "./testimonial.css";

import "./slick.css";
import "./slick-theme.css";


export default class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
   
    };
    return (
      <>
        <div className="withButton">
          <div className="TestimonialCarousel">
              {/* <div className="first-errow grow">
                <img className="slick-prev" src="./images/ArrowCircleDown.png" />
              </div> */}
            <Slider {...settings}>

              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TestimonialPage">
                <div className="profilePages">
                  <div>
                    <div className="Profile">
                      <img src="./images/men image.png" alt="profile" />
                      <h1>Nick Weimann</h1>
                      <p>District Directives Representative</p>
                    </div>

                    <div className="PointsofView">
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="star">
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                      <img src="./images/star 2.png" alt="stars" />
                    </div>

                    <div className="thumb">
                      <img src="./images/thumb.png" alt="thumb" />
                      <h1>Testimonial</h1>
                    </div>
                  </div>
                </div>
              </div>

            </Slider>
              {/* <div className="second-errow grow">
                <img className="slick-next" src="./images/ArrowCircleup(1).png" />
              </div> */}
          </div>
          <div className="TestimonialButton">
            <button className="TestimonialButton2" type="submit">&nbsp;&nbsp;Add Testimonial&nbsp;&nbsp;</button>
          </div>
        </div>

      </>
    );
  }
}