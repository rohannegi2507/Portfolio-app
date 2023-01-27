import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'

import {Skill as SkillType} from '../typing'
type Props = {
  skills: SkillType[],
}

const Skills = ({skills}: Props) => {
  const skillsList = skills.filter((skill)=> skill.title !== 'Tailwind CSS')
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="relative flex flex-col text-center
     md:text-left xl:flex-row max-w-[2000px] xl:px-10 
     min-h-screen justify-center xl:space-y-0 mx-auto items-center"
   >
    <h3 className="text-gray-500 tracking-[20px] text-2xl top-24 absolute uppercase">Skills</h3>
    <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '> Hover over a skill for currency proficiency</h3>
    <div className='grid grid-cols-4 gap-5'>
        {skillsList?.slice(0, skillsList.length/2).map((skill)=>{
          return (<Skill key={skill._id} skill={skill}></Skill>)
        })}
           {skillsList?.slice(skillsList.length/2).map((skill)=>{
          return (<Skill key={skill._id} skill={skill} directionLeft ></Skill>)
        })}
    </div>

</motion.div>
  )
}

export default Skills