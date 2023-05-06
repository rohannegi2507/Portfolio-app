import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {groq} from "next-sanity"
import { sanityClient } from '../sanity'
import {urlFor} from '../sanity'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { Experience, PageInfo, Skill, Project, Social } from '../typing'

type Props = {
  pageInfo: PageInfo,
  skills: Skill[],
  projects: Project[],
  experiences: Experience[],
  socials: Social[],
}

const Home = ({pageInfo, projects,experiences,socials, skills}:Props) => {
  return (
    <div  className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-scroll z-0 
    overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]

    ">
 
    <Header socials={socials}></Header>
    <section id="hero" className='snap-start'>
      <Hero pageInfo={pageInfo}></Hero>
    </section>
    <section id="about" className='snap-center'>
      <About pageInfo={pageInfo}/>
    </section>
    <section id="experience" className='snap-center'>
      <Experiences experiences={experiences} />
    </section>
    <section id="skills" className='snap-center'>
      <Skills skills={skills}/>
    </section>
    <section id="projects" className='snap-center'>
      <Projects projects={projects}/>
    </section> 
    <section id="contact" className='snap-center'>
      <Contact />
    </section>

    <Link href="#hero">
       <footer className='sticky bottom-5 w-full  cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'  src={pageInfo?.profilePic && urlFor(pageInfo?.profilePic).url()}></img>
        </div>

       </footer>
    </Link>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async()=>{

  const experienceQuery =   groq`
  *[_type=="experience"]{
    ...,
    technologies[]->
  }`

  const projectsQuery =   groq`
  *[_type=="project"]{
    ...,
    technologies[]->
  }
`
  const skillsQuery =   groq`
  *[_type == "skill"][]
  `

  const pageInfoQuery =   groq`
  *[_type=="pageInfo"][0]
`

const socialsQuery =  groq`
*[_type == "social"][]
`
  const pageInfo: PageInfo  = await sanityClient.fetch(pageInfoQuery);
  const experiences: Experience[]  = await sanityClient.fetch(experienceQuery);
  const projects: Project[]  = await sanityClient.fetch(projectsQuery);
  const skills: Skill[]  = await sanityClient.fetch(skillsQuery);
  const socials: Social[]  = await sanityClient.fetch(socialsQuery);

  return {
    props: {
    pageInfo,
     experiences: experiences.sort((exp1:Experience, exp2: Experience):number=> exp1.order > exp2.order ? 1 : -1),
     projects,
     skills,
     socials,
  },
  revalidate:10,
 }
}
export default Home
