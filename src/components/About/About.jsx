import React from 'react'
import Style from './About.module.css'
import { Button } from '@mui/material'
import macbook from '../../Assets/Images/profile-removebg-preview (1).png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const About = () => {
  return (
    <div className={Style.Main} >
      <div className={Style.left} >
        <div className={Style.frame} >
          <img src={macbook} alt="Home Page Image" className={Style.img} />
        </div>
      </div>
      <div className={Style.Right} >
        <h3 className={Style.im} >I'M</h3>
        <h1 className={Style.Name} >ADITHYADAS U S</h1>
        <h2 className={Style.Description} >Software Developer</h2>
        <div className={Style.BtnReadMore} >Read More ... <KeyboardDoubleArrowRightIcon/> </div>
      </div>
    </div>
  )
}

export default About