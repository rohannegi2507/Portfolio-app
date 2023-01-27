import React from 'react'
import {Project} from '../typing'
import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  projects: Project[],
}

const Projects = ({projects}: Props) => {
  return (
    <div
     className='h-screen relative flex overflow-hidden flex-col
     text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'>
    <h3 className="text-gray-500 tracking-[20px] text-2xl top-24 absolute uppercase">Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
    snap-x snap-mandatory z-20
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]
    '>
      { projects.map((project)=>{
        return (
        <div 
        key={project._id}
        className=' w-screen flex-shrink-0 
            snap-center flex flex-col space-y-5
             items-center justify-center
              p-20 md:p-44 h-screen'>
          <motion.img 
           className='xl: h-[200px] object-cover object-center'
           
          initial={{
            y:-300,
            opacity:0,
          }}

          transition={{opacity: 1.2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          
           src={urlFor(project.image).url()}>
          </motion.img>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
            <h4 className='text-4xl font-semibold text-center'>

              {project?.title}
            </h4>
            <div className='flex flex-row justify-center items-center space-x-2 my-2'>
        {project.technologies.map((skill)=>{
          return (
            <img key={skill._id} className='h-20 w-20 rounded-full object-cover object-center' src={skill.image && urlFor(skill.image).url()}></img>
        )})}
      </div>
            <p className='text-lg text-center md:text-left'>{project.summary}</p>
          </div>
          </div>
        )})}

    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px] -skew-y-12'></div>

    </div>
  )
}

export default Projects