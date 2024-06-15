import React from 'react'
import Style from './Home.module.css'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import ScrollToTop from './functions/Scrolltotp'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import { Element } from 'react-scroll'
const Home = () => {
  return (
    <div className={Style.Home}>
    <Header />
    <Element name="about" className={Style.Section}>
      <About />
    </Element>
    <Element name="education" className={Style.Section}>
      <Education />
    </Element>
    <Element name="skills" className={Style.Section}>
      <Skills />
    </Element>
    <Element name="projects" className={Style.Section}>
      <Projects />
    </Element>
    <Element name="experience" className={Style.Section}>
      <Experience />
    </Element>
    <Element name="contact" className={Style.Section}>
      <Contact />
    </Element>
  </div>
  )
}

export default Home