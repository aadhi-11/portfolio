import React from 'react'
import styles from './Education.module.css'
import PublicIcon from '@mui/icons-material/Public';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';const Education = () => {
  return (
    <div className={styles.eduMain} >
      <div className='title'>Education</div>
      <div className={styles.eduContainer} >
        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >BCA</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} ><DoubleArrowIcon className={styles.icon} />Bachelor Of computer Applications</h1>
            <h3 className={styles.College}  > <DoubleArrowIcon className={styles.icon} /> YMBC Kothamangalam</h3>
            <p className={styles.from}  ><MilitaryTechIcon/><MilitaryTechIcon/><MilitaryTechIcon/></p>
          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >+2</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} ><DoubleArrowIcon className={styles.icon} />Higher Secondary (+2) </h1>
            <h3 className={styles.College}  > <DoubleArrowIcon className={styles.icon} /> HSS Vallappuzha</h3>
            <p className={styles.from}  ><MilitaryTechIcon/><MilitaryTechIcon/><MilitaryTechIcon/></p>

          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >10</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} ><DoubleArrowIcon className={styles.icon} />High School (10)</h1>
            <h3 className={styles.College}  > <DoubleArrowIcon className={styles.icon} />  HSS Vallappuzha</h3>
            <p className={styles.from}  ><MilitaryTechIcon/><MilitaryTechIcon/><MilitaryTechIcon/></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Education