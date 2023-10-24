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
                <FontAwesomeIcon icon={faCircleCheck} id="icon" />
                <p>5 pages Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Static Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Admin Access</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year Free Hosting</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Inquiry Form</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year 24/7 Free Support For Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Annual Renewal charges </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>T&C APPLY</p>
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
                <p>5 pages Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Static Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Admin Access</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year Free Hosting</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Inquiry Form</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year 24/7 Free Support For Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Annual Renewal charges </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>T&C APPLY</p>
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
                <p>5 pages Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Static Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Admin Access</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year Free Hosting</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Inquiry Form</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year 24/7 Free Support For Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Annual Renewal charges </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>T&C APPLY</p>
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
                <p>5 pages Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Static Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Admin Access</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year Free Hosting</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Inquiry Form</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>1 Year 24/7 Free Support For Website</p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>Annual Renewal charges </p>
              </div>
              <div className="hover">
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>T&C APPLY</p>
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
    </>
  );
};

export default Pricing;
