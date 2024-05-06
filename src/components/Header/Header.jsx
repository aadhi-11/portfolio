import React from 'react'
import Style from './Header.module.css'
const Header = () => {
  return (
    <div className={Style.Header} >
        <div className={Style.HeaderLeft} >
            <div className={Style.Name} >
                Adithyadas U S
            </div>
        </div>
        <div className={Style.HeaderRight} >
            <div className={Style.inner} >
                <div className={Style.each} >
                    About
                </div>
                <div className={Style.each} >
                    Skills
                </div>
                <div className={Style.each} >
                    Projects
                </div>
                <div className={Style.each} >
                    Contact
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header