import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


export const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About:</p>
                <h1>Food is An Important Part of A Balanced Diet</h1>
            <p className='primary-text'>We offer carefully crafted dishes to ensure a balanced diet. 
                We use fresh, natural ingredients, focusing on nutrient-rich foods, lean proteins, whole grains, 
                and healthy fats. Our menu is diverse, 
                providing balanced options to meet different nutritional needs while offering flavorful and healthy meals.
                 With every dish, we aim to strike the perfect balance between taste and well-being.</p>
                    <div className='about-buttons-container'>
                            <button className='secondary-button'>Learn Mor\e</button>
                            <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video</button>
                    </div>
        </div>
    </div>
  )
}
