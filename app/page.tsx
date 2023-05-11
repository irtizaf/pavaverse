import Course from './(course)/name/page'
import Avatar from './component/avatar'
import Button from './component/button'
import Detail from './component/detail'
import Footer from './component/footer'
import Hero from './component/hero'


export default function Page() {
  return (
    <>
    <div className=' font-sans bg-slate-800 flex-wrap' >
    <Button/>
    <Hero/>
    
    <Avatar/>
    {/* <Detail/>     */}
    <Footer/>
    
    </div>
    
    </>
  )
}
