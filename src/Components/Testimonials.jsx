import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";


const Testimonials = () => {
    return (
    <div className="work-section-wrapper" >
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading"> What are they saying?</h1>
            <p className="primary-text">
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Very Good Very Nice
            </p>
            <div className="testimonial-stars-container">
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
    );
};

export default Testimonials;