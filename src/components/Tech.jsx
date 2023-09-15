import React from 'react'
import { SectionWrapper } from '../hoc'

import {technologies} from '../constants'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
   <p className={styles.sectionSubText}>My Tech Stack</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
   </motion.div>
    
    <div className='flex flex-row flex-wrap justify-start gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 drop-shadow-sm-white' key={technology.name} style={{marginTop: '20px'}}>
          <img src={technology.icon} 
          className='w-full h-full object-contain rounded-lg'
          style={{ boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)', borderRadius: '10px'}}/>
          </div>
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")