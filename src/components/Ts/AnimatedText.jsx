import React, { useEffect, useRef } from 'react'
import { motion , useInView ,useAnimation} from 'framer-motion'

const Text = ({para}) => {
const textcontrols = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true , amount: 0});
    useEffect(() => {
        if (isInView) {
          textcontrols.start({
            opacity: 1,
            y:0,
          });
        }
        if (!isInView) {
          textcontrols.start({
            opacity: 0,
            y:20,
          });
        }
      }
        , [isInView,textcontrols]);
    
    if(!para){
        para=" ";
    }
    const defaultAnimations = {
        hidden: { opacity: 0 ,
        y:20
        },
        visible: { opacity: 1 ,
        y:0,
        transition:{
          duration:0.1,
        }
        
        },
      }
  return (
    <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.01,
         
        }}
        className='tsfont-small text-xl'>
          {para.split(" ").map((word,i) =>(
            <span className='inline-block' key={i}
            >{word.split("").map((char,j) =>(
              <motion.span 
              variants={defaultAnimations}
              className='inline-block'
              key={j}
              >{char}</motion.span>
            )) }
            <span>&nbsp;</span>
            </span>
          )) }
        </motion.div>
  )
}

export default Text