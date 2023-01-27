import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm} from 'react-hook-form'

type Props = {}


type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}

const Contact = (props: Props) => {
  const {register, handleSubmit} =  useForm<Inputs>()
  const onSubmit = (formData: Inputs) =>{
    window.location.href=`mailto:negi.rohan@outlook.com?subject=${formData.subject}&body= Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly
         md:text-left   px-10  max-w-7xl  md:flex-row mx-auto  text-center z-20'>
       <h3 className="text-gray-500 tracking-[20px] text-2xl top-24 absolute uppercase">Contact</h3>

<div className='flex flex-col space-y-2'>
  {/* <h4 className='text-2xl font-semibold  text-center text-[#F7AB0A]'> Send me a message! </h4> */}
<div className='space-y-10 mb-4'>
    <div className='flex items-center space-x-5 justify-center'>
        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
        <p className='text-2xl'>+91 9626382220</p>
    </div>
    <div className='flex items-center space-x-5 justify-center'>
        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
       <p className='text-2xl'>negi.rohan@outlook.com</p>
    </div>
    <div className='flex items-center space-x-5 justify-center'>
        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
       <p className='text-2xl'>Bangalore</p>
    </div>

</div>
       <form 
        onSubmit={handleSubmit(onSubmit)}
       className='flex flex-col space-y-2 mt-2 w-fit mx-auto'>

        <div className='flex space-x-2'>
            <input {...register('name')} type="text" placeholder='Name' className='contactInput' />
            <input  {...register('email')} type="email" placeholder='Email' className='contactInput'  />
        </div>

        <input  {...register('subject')} type="text" placeholder="Subject" className='contactInput'/>

        <textarea  {...register('message')}  placeholder="Message" className='contactInput'/>

        <button 
         className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
        >Submit</button>
       </form>

    </div>
    </div>
  )
}

export default Contact