import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typing'

type Props = {
  socials: Social[],
}

const Header = ({socials}: Props) => {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:item-center'>
    
    <motion.div className='flex flex-row items-center' 
    initial={{
     x:-500,
     scale:0.5,
     opacity:0,
    }}
    animate={{x:0,
        opacity:1,
        scale:1,
    }}
    transition={{
        duration:1.5,
    }}
    >
      {socials.map((social:Social)=>{
         return ( <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />)
      })}
     </motion.div>

     <motion.div
     className='flex flex-row items-center cursor-pointer'
     initial={{
        x:500,
        scale:0.5,
        opacity:0,
       }}
       animate={{x:0,
           opacity:1,
           scale:1,
       }}
       transition={{
           duration:1.5,
       }}
     >
      <Link href="#contact">
        <SocialIcon className ="cursor-pointer" network='email' fgColor="gray" bgColor="transparent" ></SocialIcon>
      </Link>
        <p className='uppercase hidden md:inline-block'>Say Hello !</p>
      
     </motion.div>
   </header>
  )
}

export default Header