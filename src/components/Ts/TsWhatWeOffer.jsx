import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Text from "./AnimatedText";
import { FaArrowRightLong } from "react-icons/fa6";

const TsWhatWeOffer = ({ view }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const maincontrols = useAnimation();
  const circlecontrols = useAnimation();
  const textcontrols = useAnimation();
  const iconcontrols = useAnimation();
  const para =
    "Experience the future of mental health support with our AI Therapist Bot. Available 24/7, it provides instant insights, coping strategies, and a compassionate virtual ear. Empower yourself with cutting-edge technology tailored to your unique well-being journey.";
  const para2 =
    "Connect with our diverse team of therapists from around the world. Proficient in various specialties, they bring a wealth of cultural perspectives to your sessions. Whether you seek guidance or ongoing support, our global network is here to guide you toward lasting mental wellness.";
  useEffect(() => {
    if (isInView) {
      maincontrols.start({
        opacity: 1,
        rotate: 0,
        scale: 1,
      });
      circlecontrols.start({
        opacity: 1,
        scale: 1,
      });
      textcontrols.start({
        opacity: 1,
        y: 0,
      });
      iconcontrols.start({
        opacity: 1,
        x: 0,
      });
    }
    if (!isInView) {
      maincontrols.start({
        opacity: 0,
        rotate: 180,
        scale: 0,
      });
      circlecontrols.start({
        opacity: 0,
        scale: 0,
      });
      textcontrols.start({
        opacity: 0,
        y: 20,
      });
      iconcontrols.start({
        opacity: 0,
        x: -20,
      });
    }
  }, [isInView,circlecontrols,iconcontrols,maincontrols,textcontrols]); 
  if (view === "desktop") {
    return (
      <div className="child w-full h-[100svh] flex flex-row " id="cardSection">
        <div className="w-full h-full">
          <div className="w-full h-[60%] justify-center items-center flex">
            {/* <div className='w-[450px] h-[430px] bg-[#9589BF] rounded-xl shadow-2xl shadow-[#9589BF] box items-center justify-center flex p-2 text-[#ededed] ring-1 ring-[#b1a6d6] relative group '>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
                <p className='relative text-6xl text-center tracking-wider leading-[80px] font-medium z-20'>TALK TO OUR AI CHAT BOT</p>
            </div> */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={maincontrols}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 15,
                delay: 0.5,
                duration: 10,
              }}
              className="relative group w-[450px] h-[430px]"
            >
              <motion.div className="background-animate absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></motion.div>
              <motion.div className="w-[450px] h-[430px] relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-3xl leading-none flex flex-col justify-center items-center space-y-8 cursor-pointer">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={textcontrols}
                  transition={{
                    delay: 1,
                    type: "spring",
                    stiffness: 160,
                    damping: 10,
                  }}
                  className="text-6xl text-center tracking-wider leading-[80px] text-[#8493CD]  font-medium "
                >
                  TALK TO OUR AI BOT
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={iconcontrols}
                  transition={{
                    delay: 1.5,
                    type: "spring",
                    stiffness: 160,
                    damping: 7,
                  }}
                >
                  <FaArrowRightLong size={30} color="#8493CD" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-[40%]  items-center flex pl-24">
            <Text para={para} textcontrols={textcontrols} />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[40%] items-center flex">
            <Text para={para} textcontrols={textcontrols} />
            <div className="w-full h-[40%]  items-center flex pr-24" ref={ref}>
              <div>
                <Text>{para2}</Text>
              </div>
            </div>
          </div>
          <div className="w-full h-[60%] justify-center items-center flex">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={circlecontrols}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 17,
                delay: 0.5,
                duration: 10,
              }}
              className="w-[450px] h-[430px] bg-[#ffff]  rounded-full shadow-2xl shadow-[#8493CD] items-center flex p-2 text-[#8493CD] flex-col justify-center space-y-8 cursor-pointer"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={textcontrols}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 160,
                  damping: 10,
                }}
                className="text-6xl text-center tracking-wider leading-[80px]   font-medium "
              >
                CONSULT OUR THERAPISTS
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={iconcontrols}
                transition={{
                  delay: 1.5,
                  type: "spring",
                  stiffness: 160,
                  damping: 10,
                }}
              >
                <FaArrowRightLong size={30} color="#8493CD" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  if (view === "mobile") {
    return (
      <>
        <div className=" w-full h-[100svh] flex flex-col ">
          <div className="w-full flex justify-center items-center h-[49.5%]">
          <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={maincontrols}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 15,
                delay: 0.5,
                duration: 10,
              }}
              className="relative group w-[290px] h-[270px]" 
            >
              <motion.div className="background-animate absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></motion.div>
              <motion.div className="w-[290px] h-[270px] relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-3xl leading-none flex flex-col justify-center items-center space-y-8 cursor-pointer">
                <motion.p 
                initial={{opacity:0,y:20}}
                animate={textcontrols}
                transition={{
                  delay:1,
                  type: "spring",
                stiffness: 160,
                damping: 10,
                }}
                className="text-3xl text-center tracking-wider leading-[40px] text-[#8493CD]  font-medium ">
                  TALK TO OUR AI BOT
                </motion.p>
                <motion.div
                initial={{opacity:0,x:-20}}
                animate={iconcontrols}
                transition={{
                  delay:1.5,
                  type: "spring",
                stiffness: 160,
                damping: 7,
                }}
                >
                <FaArrowRightLong size={18} color="#8493CD"/>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="h-[1%] " ref={ref}></div>
          <div className="w-full flex justify-center items-center h-[49.5%]">
          <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={circlecontrols}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 17,
                delay: 0.5,
                duration: 10,
              }}
              className="w-[290px] h-[290px] bg-[#ffff]  rounded-full shadow-2xl shadow-[#8493CD] items-center flex p-2 text-[#8493CD] flex-col justify-center space-y-8 cursor-pointer"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={textcontrols}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 160,
                  damping: 10,
                }}
                className="text-3xl text-center tracking-wider leading-[40px]   font-medium "
              >
                CONSULT OUR THERAPISTS
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={iconcontrols}
                transition={{
                  delay: 1.5,
                  type: "spring",
                  stiffness: 160,
                  damping: 10,
                }}
              >
                <FaArrowRightLong size={18} color="#8493CD" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
};

export default TsWhatWeOffer;
