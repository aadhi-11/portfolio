import React from 'react'
import Style from './About.module.css'
import macbook from '../../Assets/Images/profile-removebg-preview (1).png'
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
      </div>
    </div>
  )
}

export default About