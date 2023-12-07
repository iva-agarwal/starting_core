import React from "react";
import "./pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <>
      <div className="pricingBack">
        {/* <div className="pricing">
          <h1 className="font-face-sa  animatPrice1" data-text="Pricing">
            Pricing
          </h1>

          <h1 className="font-face-sa  animatPrice2" data-text="Pricing">
            Pricing
          </h1>

          <h1 className="font-face-sa  animatPrice3" data-text="Pricing">
            Pricing
          </h1>

          <h1 className="font-face-sa  animatPrice4" data-text="Pricing">
            Pricing
          </h1>

          <h1 className="font-face-sa  animatPrice5" data-text="Pricing">
            Pricing
          </h1>
        </div> */}

        <div className="Planes">
          {/* <div className="divide"> */}
          <div className="scale">
            <div className="hover">
              <h1>STANDARD PLAN</h1>
              <h2>Unleash the power of automation.</h2>
            </div>
            <div className="features hover">
            <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>10 Post</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>12 Stories</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>5 Reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Write-up/Caption for all posts and videos</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Content Development for posts and reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Market Research according to your city</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Hashtag research to get rganic followers </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Trending reel and song research </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Competitor research </p>
              </div>
            </div>
            <div className="ChooseButton">
              <button className="ChooseButton2" type="submit">
                &nbsp;&nbsp;Choose PLAN&nbsp;&nbsp;
              </button>
            </div>
          </div>
          <div className="scale">
            <div className="hover">
              <h1>PRO PLAN</h1>
              <h2>Unleash the power of automation.</h2>
            </div>
            <div className="features hover">
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>15 Post</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>12 Stories</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>8 Reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Write-up/Caption for all posts and videos</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Content Development for posts and reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Market Research according to your city</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Hashtag research to get rganic followers </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Trending reel and song research </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Competitor research </p>
              </div>
            </div>
            <div className="ChooseButton">
              <button className="ChooseButton2" type="submit">
                &nbsp;&nbsp;Choose PLAN&nbsp;&nbsp;
              </button>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="divide"> */}
          <div className="scale box-3">
            <div className="hover">
              <h1>PREMIUM PLAN</h1>
              <h2>Unleash the power of automation.</h2>
            </div>
            <div className="features hover">
            <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>20 Post</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>15 Stories</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>10 Reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Premium Website </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Website Maintainance</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Develop ADS video</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>SEO</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Write-up/Caption for all posts and videos</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Content Development for posts and reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Market Research according to your city</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Hashtag research to get rganic followers </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Trending reel and song research </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Competitor research </p>
              </div>
            </div>
            <div className="ChooseButton">
              <button className="ChooseButton2" type="submit">
                &nbsp;&nbsp;Choose PLAN&nbsp;&nbsp;
              </button>
            </div>
          </div>
          <div className="scale">
            <div className="hover">
              <h1>CUSTOM PLAN</h1>
              <h2>Unleash the power of automation.</h2>
            </div>
            <div className="features hover">
            <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>10 Post</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>12 Stories</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>5 Reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Write-up/Caption for all posts and videos</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Content Development for posts and reels</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Market Research according to your city</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Hashtag research to get rganic followers </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Trending reel and song research </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Competitor research </p>
              </div>
            </div>
            <div className="ChooseButton">
              <button className="ChooseButton2" type="submit">
                &nbsp;&nbsp;Choose PLAN&nbsp;&nbsp;
              </button>
            </div>
          </div>
          {/* </div> */}
          
        </div>
     
      </div>
      <div className="note">
      <div className="test">
        <h3>NOTE:</h3>
          <ul>
            <li>Prices are subject to change and the above quotation is based on the per month package </li>
            <li>The VIP Exclusive plan requires a minimum commitment of 6 months</li>
            <li>If you choose the 1-year plan you will recieve 2 months free</li>
            <li>In this plan if you want ads and boosted posts, additional charges will apply for ad spend</li>
            </ul>
          
        </div>
      </div>
      <div id="foot">
      

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
};

export default Pricing;
