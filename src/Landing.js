import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";
import Slider from "./Components/Slider";
import Sliderwhy from "./Components/Sliderwhy";
import AnimatedDivs from "./Components/Animateddivs";
import Projects from "./Components/Projects";
import Mobile1 from "./assets/img/Mobile1.png";
import Laptop from "./assets/img/Laptop.png";
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
          <div>
            <h2
              className="firstText"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {" "}
              We are the best&nbsp;
            </h2>{" "}
          </div>

          <div
            className="secondText"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "Graphic Designers",
                  "Ui/ux Developers",
                  "SAAS Development",
                  "Social Media Growth",
                  "Brand Research",
                ],
              }}
            />
          </div>
          <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Welcome to STARTING CORE, the agency exclusively designed for
            influencers and creators ready to elevate their digital presence! 🚀
            <p>
              At STARTING CORE, we understand that influencers and creators are
              the driving force behind today's dynamic digital landscape.
              Whether you're a seasoned content creator or just stepping into
              the realm of influence, we're here to propel your
              journey to new heights.
            </p>
          </h5>
          <form
            className="start"
            action=""
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <input
              className="form"
              type="search"
              placeholder="Enter your email"
              aria-label="Search"
            />
            <button className="btn_2" type="submit">
              Start a project
            </button>
          </form>

          {/* <img className="image" src="./images/Img1.png" alt="#" /> */}
        </div>

        <div
          className="main-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img className="mobile" src={Mobile1} alt="#" />
          <img className="laptop" src={Laptop} alt="#" />
        </div>
      </div>

      {/* <!-- <section> --> */}
      <div id="Why">
        <div className="why_we">
          <div className="proje" data-aos="fade-up">
            <h1 className="numbers">20+</h1>
            <h3 className="number_description">
              Projects are successfully completed in 5 months.
            </h3>
          </div>
          <div className="members" data-aos="fade-up">
            <h1 className="numbers">11</h1>
            <h3 className="number_description">
              Team members with various skill sets.
            </h3>
          </div>
          <div className="satisfaction" data-aos="fade-up">
            <h1 className="numbers">100%</h1>
            <h3 className="number_description">
              We have achieved 100% client satisfaction.
            </h3>
          </div>
        </div>

        <div
          className="whyCaro"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Sliderwhy />
        </div>

        <div
          className="ourWork"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="textOur font-face-sa">Our Work flow</h2>
          <h4>We solve clients' projects in a simple & efficient way</h4>

          <div className="flow">
            <div>
              <div>
                <div className="circle1">
                  <h1>1</h1>
                </div>
                <div className="circle circle-desc-one">
                  <h3>Research</h3>
                  <h4>We do research before we start any projects</h4>
                </div>
              </div>
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="210"
  height="32"
  viewBox="0 0 210 32"
  fill="none"
>
  <path
    class="draw-arrow tail-2"
    d="M1.20016 31.4582C21.281 22.686 55.7804 11.2168 93.9755 5.33911C132.179 -0.539818 174.018 -0.815432 208.819 12.7397L209.181 11.8079C174.145 -1.83921 132.103 -1.5399 93.8234 4.35075C55.5364 10.2426 20.9539 21.7377 0.799843 30.5418L1.20016 31.4582Z"
    fill="#F2F4F6"
    transform="scale(1, -1) translate(0, -32)"
  />
  <path
    class="draw-arrow tail-1"
    d="M209.201 31.2684C209.454 31.3795 209.569 31.6745 209.458 31.9273L207.648 36.0472C207.537 36.3 207.242 36.4149 206.989 36.3039C206.736 36.1928 206.621 35.8978 206.732 35.645L208.341 32.0028L204.679 30.3939C204.426 30.2828 204.311 29.9878 204.422 29.735C204.533 29.4822 204.828 29.3673 205.081 29.4783L209.201 31.2684Z"
    fill="#F2F4F6"
    transform="translate(0, -12)"
  />
</svg>


            </div>

            <div>
              <div>
                <div className="circle2">
                  <h1>2</h1>
                </div>
                <div className="circle circle-two-desc">
                  <h3>Designing</h3>
                  <h4>Designed according to client's requirements</h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="32"
                viewBox="0 0 210 32"
                fill="none"
              >
                <path
                  class="draw-arrow tail-1"
                  d="M209.201 12.7316C209.454 12.6205 209.569 12.3255 209.458 12.0727L207.648 7.95279C207.537 7.69997 207.242 7.58506 206.989 7.69614C206.736 7.80721 206.621 8.10221 206.732 8.35503L208.341 12.0172L204.679 13.6261C204.426 13.7372 204.311 14.0322 204.422 14.285C204.533 14.5378 204.828 14.6527 205.081 14.5417L209.201 12.7316Z"
                  fill="#F2F4F6"
                />
                <path
                  class="draw-arrow tail-2"
                  d="M1.20016 31.4582C21.281 22.686 55.7804 11.2168 93.9755 5.33911C132.179 -0.539818 174.018 -0.815432 208.819 12.7397L209.181 11.8079C174.145 -1.83921 132.103 -1.5399 93.8234 4.35075C55.5364 10.2426 20.9539 21.7377 0.799843 30.5418L1.20016 31.4582Z"
                  fill="#F2F4F6"
                />
              </svg>
            </div>
            <div>
              <div>
                <div className="circle3">
                  <h1>3</h1>
                </div>
                <div className="circle">
                  <h3>Development</h3>
                  <h4>Developed by skilled team developers</h4>
                </div>
              </div>
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="210"
  height="32"
  viewBox="0 0 210 32"
  fill="none"
>
  <path
    class="draw-arrow tail-2"
    d="M1.20016 31.4582C21.281 22.686 55.7804 11.2168 93.9755 5.33911C132.179 -0.539818 174.018 -0.815432 208.819 12.7397L209.181 11.8079C174.145 -1.83921 132.103 -1.5399 93.8234 4.35075C55.5364 10.2426 20.9539 21.7377 0.799843 30.5418L1.20016 31.4582Z"
    fill="#F2F4F6"
    transform="scale(1, -1) translate(0, -32)"
  />
  <path
    class="draw-arrow tail-1"
    d="M209.201 31.2684C209.454 31.3795 209.569 31.6745 209.458 31.9273L207.648 36.0472C207.537 36.3 207.242 36.4149 206.989 36.3039C206.736 36.1928 206.621 35.8978 206.732 35.645L208.341 32.0028L204.679 30.3939C204.426 30.2828 204.311 29.9878 204.422 29.735C204.533 29.4822 204.828 29.3673 205.081 29.4783L209.201 31.2684Z"
    fill="#F2F4F6"
    transform="translate(0, -12)"
  />
</svg>
            </div>
            <div>
              <div>
                <div className="circle4">
                  <h1>4</h1>
                </div>
                <div className="circle circle-desc">
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

      {/* ..........Projects......... */}

      <Projects />

      {/* ..........Image animation......... */}

      <div id="Projects" className="imageAnimation">
        <div
          className="export"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1
            className="font-face-sa animat"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-text="Export"
          >
            Export
          </h1>
          <h3>Website</h3>
        </div>
        <div className="imgAni">
          <img
            className="noImg1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
            src="./images/slide-1.jpg"
          />
          <img
            className="noImg2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="900"
            src="./images/slide-2.jpg"
          />
          <img
            className="noImg3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
            src="./images/slide-3.jpg"
          />
          <img
            className="noImg4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1100"
            src="./images/slide-4.jpg"
          />
        </div>
      </div>

      {/* slider     ........................ */}
      <section className="founder">
        <div>
          <div className="founderheading">
            <h1>Meet our Founder</h1>
          </div>
          <div className="founderimage">
            <div>
              <img className="imagemohit" src="./images/founder.png" />
            </div>
            <div>
              <h1>Mohit Pareek</h1>
              <h2>Founder</h2>

              <p>
                Meet Mohit Pareek, the visionary force behind Starting Core.
                With over three years of hands-on experience in the dynamic
                realm of design, Mohit Pareek brings a wealth of expertise to
                the forefront of our creative endeavors.
              </p>
              <p>
                At Starting Core, we are guided by Mohit Pareek's unwavering
                dedication to pushing boundaries and crafting designs that
                transcend the ordinary. With a foundation built on creativity
                and a proven track record, Mohit Pareek leads our team in
                transforming ideas into visually compelling realities.
              </p>
              <div>
                <a
                  href="https://www.instagram.com/mohitpareek16/"
                  title="Instagram"
                >
                  <img src="./images/InstagramLogo.png" alt="Instagram" />
                </a>
                <a href="mailto:info@startingcore.com" title="Instagram">
                  <img
                    src="./images/email.png"
                    alt="email"
                    style={{ width: "17px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohit-pareek-b8a676204?originalSubdomain=in"
                  title="Instagram"
                >
                  <img src="./images/LinkedinLogo.png" alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ........section............ */}

      <div id="foot">
        <div className="illust">
          <img className="mans" src="./images/mans.png" alt="" />
        </div>

        <footer>
          <div>
            <div className="col-1">
              <div className="circles">
                <div className="logo-f">
                  <img src="./images/Img1.png" alt="" />
                  <h3 className="SC">Starting core</h3>
                </div>
                <p>
                  At STARTING CORE, we understand that influencers and creators
                  are the driving force behind today's dynamic digital
                  landscape. Whether you're a seasoned content creator or just
                  stepping into the realm of influence, we're here to propel
                  your journey to new heights. ”{" "}
                </p>
              </div>
            </div>

            <div className="col-2">
              <div>
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
                  <a href="#">Terms & Conditions</a>
                  <Link to="/Policy">Privacy Policy</Link>
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
              <div>
                <div>
                  <hr />
                  <p>Copyright 2022 @startingcore All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;
