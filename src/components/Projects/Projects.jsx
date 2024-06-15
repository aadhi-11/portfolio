import React, { useState } from 'react'
import Styles from './Projects.module.css'
import ecomimg from '../../Assets/Images/E-commerce for Everyone_ Building an Affordable Online Store with WooCommerce.jpg'
import eelection from '../../Assets/Images/Bots might prove harder to detect in 2020 elections.jpg'
import zofeedimg from '../../Assets/Images/Food Delivery App Development Company _ Devherds Software Solutions.jpg'
import flowerlyImage from '../../Assets/Images/download (4).jpg'

const Projects = () => {
  const [zofeedStatus, setofeedstatus] = useState(false)
  const [ECOM, SetECOM] = useState(false)
  const [Eelection, setElection] = useState(false)

  const zofeedstatuschanger = () => {
    setofeedstatus(!zofeedStatus)
  }

  const EcomStatusChanger = () => {
    SetECOM(!ECOM)
  }

  const electionStatusChanger = () => {
    setElection(!Eelection)
  }

  return (
    <div className={Styles.Project} >
      {/* <div className={Styles.title}>Projects</div> */}
      <div className={Styles.title}>Projects</div>
      <div className={Styles.inner} >
        <div className={Styles.eachProjectContainer} >
          <div className={Styles.productinner} >
            <div className={Styles.Cover} >
              <img src={ecomimg} alt="E-Com" className={Styles.coverimg} />
            </div>
            <div className={Styles.Bottom} >
              <h1 className={Styles.projectHead} >E-Com</h1>
              <p className={Styles.projectdetails} >E-Com is  e-commerce web application developed to sell electrical and technical products. It is developed using MERN stack technology.</p>
            </div>
          </div>
        </div>
        <div className={Styles.eachProjectContainer} >
          <div className={Styles.productinner} >
            <div className={Styles.Cover} >
              <img src={eelection} alt="E-Election" className={Styles.coverimg} />
            </div>
            <div className={Styles.Bottom} >
              <h1 className={Styles.projectHead} >E-Election</h1>
              <p className={Styles.projectdetails} >E-Election is Online Voting platform to ensure secured and authenticated voting in elections.Developed using PHP and MySql .</p>
            </div>
          </div>
        </div>
        <div className={Styles.eachProjectContainer} >
          <div className={Styles.productinner} >
            <div className={Styles.Cover} >
              <img src={zofeedimg} alt="zofeed" className={Styles.coverimg} />
            </div>
            <div className={Styles.Bottom} >
              <h1 className={Styles.projectHead} >Zofeed</h1>
              <p className={Styles.projectdetails} >Zofeed is a web application developed to book food and seat in a restuarent with featuring of delivery Option.Developed Using MERN technology.</p>
            </div>
          </div>
        </div>
        <div className={Styles.eachProjectContainer} >
          <div className={Styles.productinner} >
            <div className={Styles.Cover} >
              <img src={flowerlyImage} alt="Flowerly" className={Styles.coverimg} />
            </div>
            <div className={Styles.Bottom} >
              <h1 className={Styles.projectHead} >Flowerly</h1>
              <p className={Styles.projectdetails} >Flowerly is a Web application developed to sell and purchase and deliver flowers in USA,Iam working with its frontend portion which is developed using react Js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects