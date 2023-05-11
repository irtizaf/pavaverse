import React from 'react'
import tw from '../../public/tweet.png'
import Image from 'next/image'
import fc from '../../public/facebook.png'
import yu from '../../public/youtube.png'
import insta from '../../public/instagram.png'


export const Footer = () => {
  return (
    
    <div className=' bg-slate-400  '>
    <div className='text-center my-5 pt-3'><text className='font-bold text-xl text-slate-800 '>Follow Us</text></div>
    <div className='flex justify-around mb-3'>
    
      
      <Image src={tw} alt='twitter'></Image>
      <Image src={fc} alt='facebook'></Image>

      <Image src={yu} alt='twitter'></Image>
      <Image src={insta} alt='twitter'></Image>
      </div>
    
    </div>
  )
}

export default Footer