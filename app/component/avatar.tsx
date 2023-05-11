'use client'
import React from 'react'
import Image from 'next/image'
import hira from '../../public/mis_hira.jpeg'
import Sir from '../../public/sir zia khan.jpg'
import Sir_Adil from '../../public/Sir Adil.jpeg'
import Link from 'next/link'
import Detail from './detail'

const Avatar = () => {
  return (
    <div className=' flex-wrap'>
      <style jsx >{`
      .shine{
  text-shadow: 0 0 35px hsl(0deg 0% 100% / 64%);    
  background-image: none;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 25px hsl(0deg 0% 100% / 64%);
  background-clip: border-box;
  -webkit-text-fill-color: inherit;
}
      `}</style>

<text className='flex justify-center py-5 font-bold font-sans text-3xl md:text-5xl w-auto md:w-3/4 m-auto text-center text-gray-400 shine px-4 ' > Start your Web 3 Metaverse Journey and learn from the best </text>

      <div className='flex justify-center flex-col left-44'>
        
        
      
      <div className='w-auto max-w-none m-14 flex justify-around flex-wrap'>
        <div className=' text-center px-6 py-4'>
          <Image className='w-32 h-32 object-cover rounded-full object-top' src={hira} alt={'mis hira'}  ></Image>
          <h3 className='font-bold text-xl text-gray-400'>Hira Khan</h3>
          <p className='text-sm text-gray-400'>WID Head</p>
        </div>
        <div className=' text-center px-6 py-4'><Image className='w-32 h-32 object-cover rounded-full object-top' src={Sir} alt={'Sir Zia'}  ></Image>
          <h3 className='font-bold text-xl text-gray-400'>Zia Khan</h3>
          <p className='text-sm text-gray-400'>Founder Of Piaic</p>
        </div>
        <div className=' text-center px-6 py-4'><Image className='w-32 h-32 object-cover rounded-full object-top' src={Sir_Adil} alt={'Sir Adil'}  ></Image>
          <h3 className='font-bold text-xl text-gray-400'>Adil Altaf</h3>
          <p className='text-sm text-gray-400'>Leader Of Innovation</p>
        </div>
        </div>
       
      </div>
      <text className='flex justify-center py-5 font-bold font-sans text-2xl text-gray-400 shine md:pb-8' > Detailed Course Syllabus</text>
      <Detail/>
      <div className='flex justify-center mb-5' ><button className=' font-bold font-sans text-2xl text-gray-400  shine ' ><Link href={'https://www.piaic.org/'} target={'_blank'}> Enrol Now</Link></button>
       
       </div>
    </div>
  )
}

export default Avatar