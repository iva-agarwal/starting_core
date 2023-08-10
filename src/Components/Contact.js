import React from "react";
import "./contact.css";
const Contact = () => {
    return (
        <>
            <div className="contactPage">
                <div className="contactUs">
                    <div>
                        <div className="headingContact">
                            <h1 className="font-face-sa">Contact us</h1>
                            <img src="./images/Xcircle.png" />
                        </div>

                        <div className="textareas">
                            <label>Full Name </label>

                            <input className="" type="text" placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;Elon Musk" aria-label="input" />

                            <label>Post </label>

                            <input className="" type="text" placeholder=" &nbsp;&nbsp;&nbsp;&nbsp;Founder of Tesla" aria-label="input" />

                            <label>Message </label>

                            <form>
                                <div class='textarea-placeholder'>
                                    <textarea>Starting Core is great And creative Saas Agency that leads startups to grow in their target online Bussiness Market with the help od adv. and intellignet tools to grow them in their feild.</textarea>

                                </div>

                            </form>
                        </div>

                        <div className="socialMedia">
                            <img src="./images/LinkedinLogo.png" alt="Linkedin" />
                            <img src="./images/InstagramLogo.png" alt="Instagram" />
                            <img src="./images/FacebookLogo.png" alt="Facebook" />
                        </div>

                        <div className="details">
                            <img src="./images/telephone.png" />
                            <h1>6350666858</h1>
                        </div>

                        <div className="details">
                            <img src="./images/basil_gmail-outline.png" />
                            <h1>info@startingcore.com</h1>
                        </div>
                    </div>
                </div>

                <div className="submitButton">
                    <button className="submitButton2" type="submit">&nbsp;&nbsp;Send Us Your Message&nbsp;&nbsp;</button>
                </div>

            </div>
        </>
    )
}

export default Contact;