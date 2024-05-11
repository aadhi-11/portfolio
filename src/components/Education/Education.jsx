import React from 'react'
import styles from './Education.module.css'
import PublicIcon from '@mui/icons-material/Public';
import educover from '../../Assets/Images/HT Code-a-thon_ Website Design - HT School.jpeg'
const Education = () => {
  return (
    <div className={styles.eduMain} >
      <div className={styles.eduContainer} >
        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >BCA</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} >Bachelor Of computer Applications</h1>
            <p><i>from</i></p>
            <h3>Yeldo Mar Baselios college ,Kothamangalam<span><PublicIcon /></span> </h3>
            <p>Affiliated to Mahatma gandhi University,Kottayam</p>
          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >+2</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} >Higher Secondary Education(+2)</h1>
            <p><i>from</i></p>
            <h3>HSS Vallappuzha,Palakkad<span><PublicIcon /></span> </h3>
            <p>Higher Secondary In science Stream</p>
          </div>
        </div>

        <div className={styles.educard} >
          <div className={styles.up} >
            <div className={styles.cover} >10</div>
          </div>
          <div className={styles.down} >
            <h1 className={styles.course} >High School(10th)</h1>
            <p><i>from</i></p>
            <h3>HSS Vallappuzha,Palakkad<span><PublicIcon /></span> </h3>
            <p>Higher Secondary In science Stream</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education