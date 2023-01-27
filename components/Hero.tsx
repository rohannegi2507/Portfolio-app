import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import { PageInfo } from '../typing'
import {urlFor} from '../sanity'
import BackgroundCircles from './BackgroundCircles'
type Props = {
    pageInfo: PageInfo,
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words:[`${pageInfo?.name}`, "I build things for the web"],
        delaySpeed:2000,
        loop:true,
    })
  return (
    <div className='h-screen flex flex-col  space-y-9 items-center justify-center text-center overflow-hidden'>
       <BackgroundCircles />
       <img  className="relative rounded-full h-32 w-32 mx-auto object-cover" src={urlFor(pageInfo.profilePic).url()}/>
        <div className='z-20'>
            <h2 className='uppercase text-sm tracking-[15px] text-gray-500'>Software Engineer</h2>
            <h1 className='text-5xl  lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
             <Cursor  cursorColor='#F7AB0A'/>
             </h1>
             <div className='pt-5'>
    <Link href="#about">
        <button className="heroButton">About</button>
    </Link>
     <Link href="#experience">
        <button className="heroButton">Experience</button>
    </Link>
    <Link href="#skills">
        <button className="heroButton">Skills</button>
    </Link>
    <Link href="#projects">
        <button className="heroButton">Projects</button>
    </Link>
</div>
        </div>

    </div>
  )
}

export default Hero