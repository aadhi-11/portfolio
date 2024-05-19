import React from 'react'
import Style from './Home.module.css'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import ScrollToTop from './functions/Scrolltotp'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <div className={Style.Home} >
      <ScrollToTop/>
        <Header/>
        <div id='#about'><About/></div>
        <div id='#education' ><Education/></div>
        <div id='#skill' ><Skills/></div>
    </div>
  )
}

export default Home