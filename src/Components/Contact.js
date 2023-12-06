import React from "react";
import "./contact.css";
import Time from "../assets/img/time-left.png";
import Email from "../assets/img/email.png";
import Phone from "../assets/img/phone.png";
import Location from "../assets/img/location.png";
import Instagram from "../assets/img/instagram.png";
import Linkedin from "../assets/img/linkedin.png";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="topper">
          <h1>Feel free to contact us or just say hi!</h1>
        </div>
        <div className="contactUs">
          <div>
            <div className="headingContact">
              <h1 className="font-face-sa">Let's Connect Easily</h1>
            </div>
            <div className="map">
              <iframe
                width="420"
                height="620"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sector%203,%20mukta%20prashad%20colony,%20Bikaner,%20Rajasthan+(Starting%20Core)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
            </div>
            <div className="right-contact">
              <div className="textareas">
                <div id="contact-page-form">
                  <div className="left">
                    <label> First Name* </label>
                    <span>
                      <input
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="first-name"
                      />
                    </span>
                  </div>
                  <div className="right">
                    <label> Last Name* </label>
                    <span>
                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="last-name"
                      />
                    </span>
                  </div>
                </div>
                <br />
                <div className="clearfix">
                  <div className="left">
                    <label> Email* </label>
                    <span>
                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="email"
                        name="your-email"
                      />
                    </span>
                  </div>
                  <div className="right">
                    <label className="phone"> Phone*</label>
                    <span className="wpcf7-form-control-wrap phone">
                      <span className="contactform7_container_mobile wpnotif_phone_field_container">
                        <span className="phonefield">
                          <span className="countrycodecontainer">
                            <input
                              type="text"
                              name="countrycode_phone"
                              className="wpnotif_countrycode"
                              value="+91"
                              maxlength="6"
                              size="3"
                              placeholder="+91"
                            />
                          </span>
                          <span className="phone-text">
                            <input
                              className="phone-text"
                              aria-required="true"
                              aria-invalid="false"
                              value=""
                              type="text"
                              name="phone"
                            />
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <br />
                <div className="clearfix">
                  <div className="left">
                    <label> Business / Organisation</label>
                    <span className="wtext">
                      <input
                        size="40"
                        className="wtext"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="business-name"
                      />
                    </span>
                  </div>
                  <div className="right">
                    <span className="wtext2">
                      <label> Existing Website (if applicable) </label>

                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-url wpcf7-text wpcf7-validates-as-url"
                        aria-invalid="false"
                        placeholder="https//"
                        value=""
                        type="url"
                        name="url"
                      />
                    </span>
                  </div>
                </div>
                <br />
                <div className="service-label">
                  <label> Services Required* </label>
                  <span className="wrap-services">
                    <span>
                      <input
                        type="checkbox"
                        name="services-required[]"
                        value="Graphic Design"
                      />
                      <span className="text">Graphic Design</span>
                    </span>
                    <span>
                      <input
                        type="checkbox"
                        name="services-required[]"
                        value="UI/UX Design"
                      />
                      <span className="text">UI/UX Design</span>
                    </span>
                    <span className="wpcf7-list-item-label">
                      <input
                        type="checkbox"
                        name="services-required[]"
                        value="SAAS Development"
                      />
                      <span className="text">SAAS Development </span>
                    </span>
                    <span className="wpcf7-list-item-label">
                      <input
                        type="checkbox"
                        name="services-required[]"
                        value="Social Media Growth"
                      />
                      <span className="text">Social Media Growth</span>
                    </span>
                    <span className="wpcf7-list-item-label">
                      <input
                        type="checkbox"
                        name="services-required[]"
                        value="Brand Research"
                      />
                      <span className="text">Brand Research</span>
                    </span>
                  </span>
                 
                </div>
              </div>
              <br />
              <span className="form-last">
                <textarea
                  cols="40"
                  rows="6"
                  aria-invalid="false"
                  placeholder="Please provide any extra information/ specific requirement in detail. Avoid placing any URL links in this field."
                  name="remarks"
                ></textarea>
                <span className="submit-area">
                  <input className="submit" type="submit" value="Submit" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <h1>Contact Information</h1>
        <div className="boxes">
          <div className="support-mail">
            <img src={Email} />
            <div className="premium-icon-box-text-wrap">
              <h4 className="premium-icon-box-title">AGENCY SUPPORT</h4>
              <div className="premium-icon-box-content">
                info@startingcore.com <br /> startingcore@gmail.com
              </div>
            </div>
          </div>

          <div className="support-mail">
            <img src={Time} />
            <div className="premium-icon-box-text-wrap">
              <h4 className="premium-icon-box-title">WORKING HOURS</h4>

              <div className="premium-icon-box-content">
                Monday-Friday: 10:00-18:00 <br /> Saturday: 11:00-17:00
              </div>
            </div>
          </div>

          <div className="support-mail">
            <img src={Phone} />
            <div className="premium-icon-box-text-wrap">
              <h4 className="premium-icon-box-title">AGENCY PHONES</h4>
              <div className="premium-icon-box-content">
                Phone No:<br></br> +91 6350666858
              </div>
            </div>
          </div>

          <div className="support-mail">
            <img src={Location} />
            <div className="premium-icon-box-text-wrap">
              <h4 className="premium-icon-box-title">AGENCY ADDRESS</h4>
              <div className="premium-icon-box-content">
                Sector 3, Mukta Prasad Colony,
                <br /> Sector Number 5,
                <br /> Mukta Prasad Nagar,
                <br />
                Bikaner, Rajasthan 334004
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <h1>Social Links</h1>
        <a>
          <img src={Instagram} />
        </a>
        <a href="mailto:info@startingcore.com">
          <img src={Email} />
        </a>
        <a>
          <img src={Linkedin} />
        </a>
      </div>
    </>
  );
};

export default Contact;
