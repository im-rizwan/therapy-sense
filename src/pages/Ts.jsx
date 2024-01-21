import React from 'react'
import TsHome from '../components/Ts/TsHome'
import TsWhoWeAre from '../components/Ts/TsWhoWeAre'
import TsWhatWeOffer from '../components/Ts/TsWhatWeOffer'
import Footer from '../components/Ts/Footer'

const Ts = () => {
  return (
    <>
    <div className='md:block hidden'>
    <div className='parent'>
    <TsHome view={"desktop"}/>
    <TsWhoWeAre view={"desktop"}/>
    <TsWhatWeOffer view={"desktop"}/> 
    <Footer view={"desktop"}/>
    </div>
    </div>
    <div className='md:hidden block w-full h-[100svh] overflow-y-scroll'>
   
    <TsHome view={"mobile"}/>
    <TsWhoWeAre view={"mobile"}/>
    <TsWhatWeOffer view={"mobile"}/> 
    <Footer view={"mobile"}/> 
    
    </div>
    </>
  )
}

export default Ts