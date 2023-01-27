import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typing'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {
  experience: Experience,
}

const ExperienceCard = ({experience}: Props) => {
  return (
<article className='flex flex—col items-center irounded—lg  space—y—7
 w—[500px] md:w-[600px] flex-shrink-0  xl:w-[900px] 
 
 snap—center
  bg-[#292929] p—l0 hover:opacity—l00
opacity—40 cursor—pointer 
transition—opacity duration—200 overflow-hidden'>
    <motion.img
      initial={{y:-100, opacity:0}}
      transition={{duration:1.2}}
      whileInView={{opacity:1, y:0}}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src={urlFor(experience?.companyImage).url()}>  
    </motion.img>

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light '>{experience.jobTitle}</h4>
      <p className='text-2xl mt-1  font-bold'>{experience.company}</p>
      <div className='flex flex-row space-x-2 my-2'>
        {experience.technologies.map((skill)=>{
          return (
            <img alt="test" key={skill._id} className='h-10 w-10 rounded-full object-cover' src={skill.image && urlFor(skill.image).url()}></img>
        )})}
      </div>
      <p className='uppercase py-5 text-gray-300'>
        
        {new Date(experience.dateStarted).toDateString()} - {""}
        {experience.isCurrentWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
        </p>
      <ul className='list-disc space-y-4 ml-4 text-lg '>
        {experience.points.map((point, index)=>{
        return (
          <li key={index}>{point}</li>
        )
        })}
      </ul>
    </div>
  </article>
  )
}

export default ExperienceCard