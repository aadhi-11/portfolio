import React, { useState } from 'react'
import Style from './Header.module.css'
import LinearScaleIcon from '@mui/icons-material/LinearScale'; import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
    const [viewNav, setviewNav] = useState(false)
    return (
        <div className={Style.Header} >
            <div className={Style.HeaderLeft} >
                <div className={Style.Name} >
                    Adithyadas
                </div>
                <div className={Style.iconBox} >
                    {
                        !viewNav ? (

                            <LinearScaleIcon style={{ fontSize: '5rem', fontWeight: '600', marginLeft: '9rem' }} onClick={() => { setviewNav(!viewNav) }} />

                        ) : (
                            <CloseIcon style={{ fontSize: '5rem', fontWeight: '600', marginLeft: '9rem' }} onClick={() => { setviewNav(!viewNav) }} className={Style.icon} />
                        )
                    }
                </div>
            </div>
            <div className={Style.HeaderRight} >
                {
                    viewNav ? (
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
                    ) : ''
                }
                <div className={Style.innerOpt} >
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