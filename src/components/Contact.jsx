import React from 'react'
import {styles} from '../styles'
import {motion} from 'framer-motion'
import {textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

import {contacts} from '../constants'


const Contact = () => {
  
  
  return (
    
     <>
    <motion.div variants={textVariant()}>
   <p className={styles.sectionSubText}>Get In Touch</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>
   </motion.div>
    
   <div className='flex flex-row flex-wrap justify-start gap-10'>
      {contacts.map((contact) => (
        <a href={contact.pro_link} target='_blank'>
        <div className='w-28 h-28 drop-shadow-sm-white' key={contact.index} style={{marginTop: '20px'}} >
          <img src={contact.image} 
          className='w-full h-full object-contain rounded-lg'
          style={{ boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)', borderRadius: '10px'}}/>
          </div>
          </a>
      ))}

    </div>
    </>
   
  )
}

export default SectionWrapper (Contact, "contact")