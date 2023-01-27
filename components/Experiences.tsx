import React from 'react'
import { Experience } from '../typing'
import ExperienceCard from './ExperienceCard'
import {motion} from 'framer-motion'
import exp from 'constants'
type Props = {
  experiences: Experience[]
}

const Experiences = ({experiences}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden 
    flex-col text-left md:flex-row max-w-full px-10 
    justify-evenly mx-auto items-center
    
    '
    >
      <h3 className="text-gray-500 tracking-[20px] text-2xl top-24 absolute uppercase">Experience</h3>
    
      <div 
        className='w-full flex space-x-5 overflow-x-scroll 
        p-10 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]
      '>
        {experiences.map((experience: Experience, index: number)=>{
          return (
            <ExperienceCard key={index} experience={experience}/>
          )
        })
        }
        </div>

    </motion.div>
  )
}

export default Experiences