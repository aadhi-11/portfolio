import React from 'react'
import Style from './Home.module.css'
import Header from '../components/Header/Header'
import About from '../components/About/About'

const Home = () => {
  return (
    <div className={Style.Home} >
        <Header/>
        <About/>
    </div>
  )
}

export default Home