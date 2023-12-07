import React from "react";
// import { CSSTransition } from 'react-transition-group';
import "./AnimatedDivs.css";

function AnimatedDivs() {
  return (
    <>
      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT">
              <div>
                <h1 className="frameText">Design</h1>
                <p className=" textdes">
                  Welcome to our starting core, where creativity meets impact!
                  🎨✨
                </p>
                <p className=" textdes">
                  Unleash the power of visual storytelling with our bespoke
                  design solutions tailored for influencers and creators.
                  Elevate your online presence with stunning graphics,
                  captivating thumbnails, and unique logo designs that speak
                  volumes about your brand.
                </p>
                <p className=" textdes">
                  Whether you're a seasoned influencer or a budding creator, our
                  team of skilled graphic designers is here to transform your
                  ideas into eye-catching realities. From rebranding your image
                  to crafting engaging flyers and creating striking email
                  designs, we've got every aspect of your visual identity
                  covered.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
              <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/grafikstash.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>

      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT" data-aos="zoom-in">
              <div>
                <h1 className="frameText app-text">Social Media Growth</h1>
                <p className=" textdes app-desc">
                  🚀 Elevate Your Online Presence with Our Social Media Magic!
                </p>
                <p className=" textdes app-desc">
                  ✨ Are you an influencer or creator looking to skyrocket your
                  social media game? Look no further! 🚀 We are your go-to
                  Starting Core, specializing in organic growth on platforms
                  like LinkedIn, Instagram, and Facebook. Experience the power
                  of genuine connections! We don't believe in shortcuts; our
                  team is dedicated to crafting authentic strategies that
                  resonate with your audience. Watch your followers grow
                  naturally, creating a community that truly engages with your
                  content.
                </p>
                <p className=" textdes app-desc">
                  {" "}
                  Ready to take your social media presence to new heights? Let's
                  collaborate and turn your online dreams into a reality. DM us
                  today, and let's embark on a journey of organic growth,
                  amplified by AI! 🌐✨
                </p>
              </div>
              <div className="buttons app-btns">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/app-dev.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>

      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT animated-div div2 " data-aos="zoom-in">
              <div>
                <h1 className="frameText">Development</h1>
                <p className=" textdes">
                  Elevate your online presence with our cutting-edge SAAS
                  development services tailored for influencers and creators. At
                  our Starting Core agency, we specialize in crafting bespoke
                  digital solutions to empower your brand. From captivating
                  websites that reflect your unique style to dynamic
                  applications that engage your audience, we bring your vision
                  to life.
                </p>
                <p className=" textdes">
                  In the fast-paced world of digital content, staying ahead is
                  essential. That's why we focus on innovation, scalability, and
                  performance in every project. Our SAAS solutions are designed
                  to not only meet your current needs but to grow with you as
                  your influence expands.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/uiux 1.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>
      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT animated-div div2 " data-aos="zoom-in">
              <div>
                <h1 className="frameText">Brand Research</h1>
                <p className=" textdes">
                  Whether you're a seasoned influencer or a burgeoning creator,
                  our team is dedicated to amplifying your brand presence. We
                  don't just create brands; we cultivate experiences that leave
                  a lasting impact. Join us on a journey of discovery, where
                  your brand story unfolds, and your influence soars to new
                  heights.
                </p>{" "}
                <p className=" textdes">
                  Our process goes beyond the surface, unraveling the unique
                  threads that define you. Through meticulous research, we
                  uncover the nuances that make you exceptional, ensuring your
                  brand stands out in a crowded digital landscape.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/graphic-img.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>
    </>
  );
}

export default AnimatedDivs;
