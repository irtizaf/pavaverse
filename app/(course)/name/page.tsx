import Button from '@/app/component/button'
import Footer from '@/app/component/footer'
import Link from 'next/link'
import React from 'react'

export default function Course ()  {
  return ( 
  <div className=''>
  <div >
  <Button/>
 </div >
    
  <div  className='mt-20 '>
    <div className="plan plan-highlight m-5">
      <h2>Artificial Intelligence (AI) and Deep Learning Specialization</h2>
      <span>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models</span>
      <p>1 year complete course</p>
    </div>
    <div className="plan plan-highlight m-5">
      <h2>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
      <span>Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse</span>
      <p>WMD</p>
    </div>
    <div className="plan plan-highlight m-5">
      <h2>Cloud-Native Computing Specialization</h2>
      <span>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</span>
      <p>Become A Cloud Specilist</p>
      </div>
      <div className="plan plan-highlight m-5">
      <h2>Ambient Computing and IoT Specialization</h2>
      <span>The Ambient Computing and IoT Specialization focuses on building Embedded Devices.</span>
      <p>Automate the world around you! </p>
    </div>
    </div>
  <Footer/>
  
  </div>


 
    )
}
