import React from 'react'
import Text from './AnimatedText';
import { Link } from 'react-router-dom';

const TsHome = ({view}) => {
  const line = "A journey towards mental wellness";
  
  if(view==="desktop"){
    
    return (
      <div className={`${view==="desktop"?"child":""} w-full h-[100svh] flex flex-col `}>
        <div className='flex w-full h-[40svh] items-center flex-col justify-around md:space-y-6 space-y-3 pt-10'>
          <div className='TSLogo'>
            <img src='tslogo.png' alt='ts-logo' />
          </div>
          {/* <div className='text-5xl tracking-widest bg-gradient-to-r from-[#9a88d9] via-[#8493CD] to-indigo-400 inline-block text-transparent bg-clip-text'>
            THERAPY SENSE
  
          </div> */}
          <div className="tsfont-header md:text-5xl text-3xl tracking-widest bg-gradient-to-r from-[#9a88d9] via-[#8493CD] to-indigo-400 inline-block text-transparent bg-clip-text background-animate font-medium">
            THERAPY SENSE
          </div>
  
  
          <Text para={line}/>
          <div className='flex flex-row md:space-x-4 space-x-2 justify-center items-center'>
            <button className="btn-grad shadow-lg hover:shadow-purple-300 background-animate"><a href="#cardSection" content='' >Get started</a></button>
            <Link to={"/login"}><button className="btn-grad shadow-lg hover:shadow-purple-300 background-animate">
              Login
            </button>
            </Link>
          </div>
        </div>
        <div className='w-full h-full homeimg mt-3 '>
  
        </div>
      </div>
    )
  

  }
  if(view==="mobile"){
    return(
      <>
      <div className='child w-full h-[100vh] flex flex-col '> 
      <div className='flex w-full h-[50svh] items-center flex-col justify-around space-y-6 pt-10'>
          <div className='TSLogo'>
            <img src='tslogo.png' alt='ts-logo' />
          </div>
          <div className="tsfont-header text-3xl tracking-widest bg-gradient-to-r from-[#9a88d9] via-[#8493CD] to-indigo-400 inline-block text-transparent bg-clip-text background-animate font-medium">
            THERAPY SENSE
          </div>
  
  
          <Text para={line}/>
          <div className='flex flex-row space-x-4 justify-center items-center'>
            <button className="btn-grad shadow-lg hover:shadow-purple-300 background-animate"><a href="#cardSection" content='' >Get started</a></button>
            <Link to={"/login"}><button className="btn-grad shadow-lg hover:shadow-purple-300 background-animate">
              Login
            </button>
            </Link>
          </div>
        </div>
        <div className='w-full h-full homeimg mt-3 '>
  
        </div>
      </div>
      </>
    )
  }
  }

export default TsHome
