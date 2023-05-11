import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo1.png"

export default function  Hero (){
  return (
   
    <div className='flex justify-center relative mt-20 '>
     
    <div >
    <Image  src={logo} alt='pana' className=' w-16 md:w-28' ></Image>
    
    </div>
    
    <p className='text-2xl font-bold font-sans py-4 text-gray-400 md:text-4xl md:py-9'>Pavaverse <br/> Dao</p>
     
   
    
    
    </div>
    
  )
}
