import React from 'react'
import Styles from './Skills.module.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skills = () => {
    return (
        <div className={Styles.container} >
            <div className="title">Skills</div>
            <div className={Styles.inner} >
                <div className={Styles.each} >
                    <CircularProgressbar value={50} maxValue={100} text={`40%`} className={Styles.progress}  />
                </div>
                <div className={Styles.each} >
                    <CircularProgressbar value={50} maxValue={100} text={`40%`} className={Styles.progress}  />
                </div>
                <div className={Styles.each} >
                    <CircularProgressbar value={50} maxValue={100} text={`40%`} className={Styles.progress}  />
                </div>
                <div className={Styles.each} >
                    <CircularProgressbar value={50} maxValue={100} text={`40%`} className={Styles.progress}  />
                </div>
            </div>
        </div>
    )
}

export default Skills