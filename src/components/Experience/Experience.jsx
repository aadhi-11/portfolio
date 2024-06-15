import React from 'react'
import Style from './Experience.module.css'
import { Link } from 'react-router-dom'
import zoiteckhLogo from '../../Assets/Images/1664647532033.jpg'

const Experience = () => {
    return (
        <div className={Style.container}>
            <div className={Style.title} >Experience</div>
            <div className={Style.inner}>
                <div className={Style.left}>
                    <Link to="https://zoiteckh.com/"  >
                        <img src={zoiteckhLogo} alt="zoiteckh" className={Style.img} />
                    </Link>
                </div>
                <div className={Style.right} >

                    <Link to="https://zoiteckh.com/" style={{textDecoration:'none'}} >
                        <div className={Style.Head}>Zoiteckh</div>
                    </Link>
                    <div className={Style.position}>Position: Front End Developer Intern</div>
                    <div className={Style.position}>Duration:March 2024 - ongoing</div>
                    <div className={Style.description}>
                        As a front end developer intern, I was expected to design new web pages according to the assigned projects and do API integration for it. The frontend pages are designed using React.js and styled using module.css, and state management is efficiently handled by React-Redux.
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience
