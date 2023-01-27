import React from 'react'
import {motion} from 'framer-motion'
import {PageInfo} from '../typing'
import {urlFor} from '../sanity'
type Props = {
  pageInfo: PageInfo,
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
     initial={{opacity:0}}
     transition={{duration:1.5}}
     whileInView={{opacity:1}}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="text-gray-500 tracking-[20px] text-2xl top-24 absolute uppercase">About</h3>
        <motion.img
        initial={{x:-200, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
         className="-mb-20 md:mb-0
          flex-shrink-0 
          w-56 h-56
          rounded-full 
          object-cover
          md:rounded-lg 
           md:w-64 md:h-95
            xl:h-[600px] xl:w-[500px] "
         src={pageInfo.profilePic && urlFor(pageInfo.profilePic).url()}
        />
   <div className='space-y-10 px-0 md:px-10'>
     <h4 className='text-4xl font-semibold'>Here is Little Background</h4>
     <p className='text-base'>
      {pageInfo?.backgroundInformation}
     </p>
   </div>
    </motion.div>
  )
}

export default About