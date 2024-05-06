import React from 'react'
import Style from './Home.module.css'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div className={Style.Home} >
        <Header/>
    </div>
  )
}

export default Home