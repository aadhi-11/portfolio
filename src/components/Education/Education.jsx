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
            <h1 className={styles.course} >Bachelor Of computer Applications</h1>
            <hr />

            <h3 className={styles.College}  > YMBC Kothamangalam</h3>
            <h3 className={styles.College}  >score:76%</h3>


          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >+2</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} >Higher Secondary (+2) </h1>
            <hr />

            <h3 className={styles.College}  > HSS Vallappuzha</h3>
            <h3 className={styles.College}  >score:97%</h3>


          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >10</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} >High School (10)</h1>
            <hr />
            <h3 className={styles.College}  >   HSS Vallappuzha</h3>
            <h3 className={styles.College}  >score:100%</h3>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Education