import React, { useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
import Slider from "./Components/Slider";
import Sliderwhy from "./Components/Sliderwhy";
import AnimatedDivs from "./Components/Animateddivs";
import AOS from "aos";
import "aos/dist/aos.css";


function Landing() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isOpen, setOpen] = useState(false);


  return (
    <>
      {/* <!-- <section> --> */}
      <div className="mainContent">
        <div className="main-1">

          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 className="firstText" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"> We are the best&nbsp;</h2> </div>



          <div className="secondText" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 30,
              strings: [
                "Web Developers",
                "App Developers",
                "Ui/ux Developers",
                "Graphic Designers"
              ],
            }} />
          </div>
          <h5 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            This is the software that protects all your data, including strong security access. Use data as needed and
            provide security of all data very easily.
          </h5>
          <form className="start" action="" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <input className="form" type="search" placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;Enter your email" aria-label="Search" />
            <button className="btn_2" type="submit">Start a project</button>
          </form>

          {/* <img className="image" src="./images/Img1.png" alt="#" /> */}
        </div>

        <div className="main-2" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <img className="mobile" src="./images/Mobile1.png" alt="#" />
          <img className="laptop" src="./images/laptop.png" />
        </div>
      </div>


      {/* <!-- <section> --> */}
      <div id="Why">
        <div className="why_we">
          <div className="proje" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <h1 className="numbers">20+</h1>
            <h3 className="number_description">
              Projects are successfully completed in 5 months.
            </h3>
          </div>
          <div className="members" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <h1 className="numbers">11</h1>
            <h3 className="number_description">Team members with various skill sets.</h3>
          </div>
          <div className="satisfaction" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <h1 className="numbers">100%</h1>
            <h3 className="number_description">We have achieved 100% client satisfaction.</h3>
          </div>
        </div>

        <div className="whyCaro" data-aos="fade-up"
          data-aos-anchor-placement="top-center">

          <Sliderwhy />


        </div>

        <div className="ourWork" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h2 className="textOur font-face-sa">Our Work flow</h2>
          <h4>We solve clients' projects in a simple & efficient way</h4>

          <div className="flow" >
            <div>
              <div>
                <div className="circle1">
                  <h1>1</h1>
                </div>
                <div className="circle" >
                  <h3>Research</h3>
                  <h4>We do research before we start any projects</h4>
                </div>
              </div>
              <img className="vector1" src="./images/Vector1.png" alt="#" />
            </div>

            <div>
              <div>
                <div className="circle2">
                  <h1>2</h1>
                </div>
                <div className="circle" >
                  <h3>Designing</h3>
                  <h4>Designed according to client's requirements</h4>
                </div>
              </div>
              <img className="vector2" src="./images/Vector2.png" alt="#" />
            </div>
            <div>
              <div>
                <div className="circle3">
                  <h1>3</h1>
                </div>
                <div className="circle" >
                  <h3>Development</h3>
                  <h4>Developed by skilled team developers</h4>
                </div>
              </div>
              <img className="vector3" src="./images/Vector1.png" alt="#" />
            </div>
            <div>
              <div>
                <div className="circle4">
                  <h1>4</h1>
                </div>
                <div className="circle" >
                  <h3>Live Testing</h3>
                  <h4>After completing the work, live test is done</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- <section> --> */}


      <AnimatedDivs />




      {/* ..........Image animation......... */}

      <div id="Projects" className="imageAnimation">
        <div className="export" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h1 className="font-face-sa animat" data-aos="fade-up"
            data-aos-anchor-placement="top-center" data-text="Export">Export</h1>
          <h3>Website</h3>
        </div>
        <div className="imgAni">
          <img className="noImg1" data-aos="fade-up"
            data-aos-anchor-placement="top-center" data-aos-delay="800" src="./images/slide-1.jpg" />
          <img className="noImg2" data-aos="fade-up"
            data-aos-anchor-placement="top-center" data-aos-delay="900" src="./images/slide-2.jpg" />
          <img className="noImg3" data-aos="fade-up"
            data-aos-anchor-placement="top-center" data-aos-delay="1000" src="./images/slide-3.jpg" />
          <img className="noImg4" data-aos="fade-up"
            data-aos-anchor-placement="top-center" data-aos-delay="1100" src="./images/slide-4.jpg" />
        </div>

        <h3 className="show1 animated">SCROLL DOWN</h3>
        <img className="down1 animated" src="./images/down.png" />
      </div>




      {/* slider     ........................ */}
      <section className="section-1">
        <div className="text">

          <div className="side" id="side1" data-aos="fade-right"
            data-aos-anchor-placement="top-center">
            <h1>Our Team</h1>
          </div>
          <br />
          <p>We love what we do and we do it with passion.
            We value the experimentation of the message and smart incentives.
          </p>
        </div>
        <div className="main-container">
          <div className="box left">
            <img src="./images/banner2.jpg" alt="" />
            <div className="name">
              <h2>Mohit Pareek</h2>
              <span>Founder</span>
            </div>
          </div>
          <div className="box center">
            <div className="container">

              <Slider />

            </div>
            <div className="slide-controls">
              <button id="prev-btn">
                <div className="swiper-button-prev"></div>
              </button>
              <button id="next-btn">
                <div className="swiper-button-next"></div>
              </button>
            </div>
          </div>



          <div className="box right">
            <img src="./images/banner2.jpg" alt="" />
            <div className="name">
              <h2>Team Starting Core</h2>
            </div>
          </div>
        </div>
        <h3>Our team member is ready to help you!</h3>

      </section>
      {/* ........section............ */}

      <div id="foot">
        <div className="illust">
          <img className="waves" src="./images/waves.png" alt="" />
          <img className="i3" src="./images/-3.png" alt="" />
          <img className="mans" src="./images/mans.png" alt="" />
          <img className="i1" src="./images/-1.png" alt="" />
        </div>
        <footer>
          <div>
            <div className="col-1">
              <div className="circles">
                <div className="logo-f">
                  <img src="./images/Img1.png" alt="" />
                  <h3 className="SC">Starting core</h3>
                </div>
                <p>Figma creates a new level of collaboration that never really existed before. The team is able to work together and ship products faster.” </p>
              </div>
            </div>

            <div className="col-2">
              <div className="col">
                <h4>Services</h4>
                <a href="#">Web Development</a>
                <a href="#">App Development</a>
                <a href="#">UI/UX Designer</a>
                <a href="#">Graphic Designer</a>
                <a href="#">SEO</a>
              </div>
              <div className="col">
                <h4>Help</h4>
                {/* <!-- <a href="#">Help</a> --> */}
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="/Policy">Privacy Policy</a>
              </div>
              <div className="col">
                <h4>Company</h4>
                <a href="#">Home</a>
                <a href="#">Why us?</a>
                <a href="#">Projects</a>
                <a href="#">Working Style</a>
                <a href="#">Contact Us</a>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;