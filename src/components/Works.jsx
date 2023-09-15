import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, link } from '../assets'

import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link, active_link}) =>{
  return(
    <Tilt className="xs:w-[350px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max:45, scale:1, speed: 450}} className='bg-[#060816] rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col'>
      <img src={image} alt={name} className='w-100 h-100 object-cover rounded-2xl'/>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={()=> window.open
          (source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={github} alt="github" className='w-100 h-100 object-contain' />
          </div>
          <div onClick={()=> window.open
          (active_link, "_blank")}
          className='black-gradient w-7 h-7 mt-1 ml-1 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={link} alt="vercel" className='w-100 h-100 object-contain' />
          </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      
            <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) =>(
              <p key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}</p>
            ))}
            </div>
            </div>
      </div>
      
    </motion.div>
    </Tilt>
 
)}
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My work</p>
       <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    {/* <div className='w-full flex'>
    <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      The following projects showcase my skills and experience through real-world examples of my work.
      Accompanying each project is a link to a code repository and an active link to a project demo. 
      My creations reflect my ability to solve problems efficiently and creatively, using the different technologies that I have learnt along the way.
      They are also an example of my ability to work with others and manage projects successfully.
    </motion.p>
    </div> */}
    <div className='mt-5 flex flex-wrap gap-7'>
    {projects.map((project, index)=>(
      <ProjectCard key={`project-${index}`} index={index} {...project}/>

    ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")