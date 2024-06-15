import React, { useState } from 'react'
import Style from './Header.module.css'
import LinearScaleIcon from '@mui/icons-material/LinearScale'; 
import CloseIcon from '@mui/icons-material/Close';

// src/components/Header.js
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [viewNav, setViewNav] = useState(false);

  return (
    <div className={Style.Header}>
      <div className={Style.HeaderLeft}>
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div className={Style.Name}>Adithyadas</div>
        </a>
        <div className={Style.iconBox}>
          {!viewNav ? (
            <LinearScaleIcon
              style={{ fontSize: '5rem', fontWeight: '600', marginLeft: '9rem' }}
              onClick={() => setViewNav(!viewNav)}
            />
          ) : (
            <CloseIcon
              style={{ fontSize: '5rem', fontWeight: '600', marginLeft: '9rem' }}
              onClick={() => setViewNav(!viewNav)}
              className={Style.icon}
            />
          )}
        </div>
      </div>
      <div className={Style.HeaderRight}>
        {viewNav && (
          <div className={Style.inner}>
            <div className={Style.each}>
              <ScrollLink to="education" smooth={true} duration={500} onClick={() => setViewNav(false)}>
                Education
              </ScrollLink>
            </div>
            <div className={Style.each}>
              <ScrollLink to="skills" smooth={true} duration={500} onClick={() => setViewNav(false)}>
                Skills
              </ScrollLink>
            </div>
            <div className={Style.each}>
              <ScrollLink to="projects" smooth={true} duration={500} onClick={() => setViewNav(false)}>
                Projects
              </ScrollLink>
            </div>
            <div className={Style.each}>
              <ScrollLink to="experience" smooth={true} duration={500} onClick={() => setViewNav(false)}>
                Experience
              </ScrollLink>
            </div>
            <div className={Style.each}>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setViewNav(false)}>
                Contact
              </ScrollLink>
            </div>
          </div>
        )}
        <div className={Style.innerOpt}>
          <div className={Style.each}>
            <ScrollLink to="education" smooth={true} duration={500}>
              Education
            </ScrollLink>
          </div>
          <div className={Style.each}>
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </div>
          <div className={Style.each}>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </div>
          <div className={Style.each}>
            <ScrollLink to="experience" smooth={true} duration={500}>
              Experience
            </ScrollLink>
          </div>
          <div className={Style.each}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
