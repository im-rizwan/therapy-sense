import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from 'flowbite-react';

const TsWhoWeAre = ({ view }) => {
  const img1 = "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2 = "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img3 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img4 = "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  if (view === "desktop") {
    const next = () => {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };
    const prev = () => {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    return (
      <div className="child w-full h-[100svh] py-16">
        <div className="container h-full ">
          <div className="slide rounded-xl">
            <div
              className="item "
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
              onClick={() => {
                next();
              }}
            >
              <div className="content">
                <div className="name">
                  Global Connection, Personalized Support
                </div>
                <div className="des">
                  Embark on a journey towards mental wellness with real-time
                  consultancy from therapists worldwide. Our app seamlessly
                  connects students with experienced professionals, creating a
                  global support network.
                </div>
              </div>
            </div>
            <div
              className="item rounded-xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
              onClick={() => {
                next();
              }}
            >
              <div className="content">
                <div className="name">
                  {" "}
                  Dynamic Conversations, Meaningful Insights
                </div>
                <div className="des">
                  Our innovative approach involves AI-driven conversations that
                  provide therapists with essential data. These insights empower
                  therapists to better understand and assist each user,
                  fostering a more personalized and effective therapeutic
                  experience.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
              onClick={() => {
                next();
              }}
            >
              <div className="content">
                <div className="name">Holistic Mental Wellness</div>
                <div className="des">
                  We prioritize your mental well-being by offering a
                  comprehensive platform. From self-guided resources to direct
                  consultations, our app is designed to cater to your unique
                  needs, ensuring a holistic and empowering approach to mental
                  health.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
              onClick={() => {
                next();
              }}
            >
              <div className="content">
                <div className="name">A Bridge to Better Mental Health</div>
                <div className="des">
                  Break down barriers and access the support you deserve. Our
                  app acts as a bridge, connecting users and therapists,
                  fostering a community that values mental health and encourages
                  open conversations. Join us on this transformative journey to
                  mental wellness. Your well-being matters, and we're here to
                  support you every step of the way.
                </div>
              </div>
            </div>
          </div>

          <div className="button">
            <button
              className="prev bg-[#9589BF] "
              onClick={() => {
                prev();
              }}
            >
              <div className="flex justify-center items-center">
                <FaArrowLeft color="#ffff" />
              </div>
            </button>
            <button className="next bg-[#ffff]" onClick={() => next()}>
              <div className="flex justify-center items-center">
                <FaArrowRight color="#9589BF" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (view === "mobile") {
    const customTheme = {
      "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
      },
      "indicators": {
        "active": {
          "off": "bg-[#9589BF] hover:bg-[#9589BF]",
          "on": "bg-[#8493CD]"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
      },
      "item": {
        "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": {
          "off": "w-full flex-shrink-0 transform cursor-default snap-center",
          "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
        }
      },
      "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#9589BF] group-hover:bg-[#9589BF] group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
      },
      "scrollContainer": {
        "base": "flex h-full  overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
        "snap": "snap-x snap-mandatory"
      }
    };
    return <>
     <div className="h-[100vh] w-full">
      <Carousel theme={customTheme} leftControl=" " rightControl=" ">
        <div className=" w-full h-full flex flex-col justify-center items-center space-y-14">
          <div className="text-4xl px-5 text-center">
            1. Dynamic Conversations, Meaningful Insights
            
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
          <div className="px-5">
            <img src={`${img1}`} className="rounded-2xl" alt="" />
          </div>
          <div className=" px-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae nihil quae corrupti voluptatem ullam, doloremque nobis sint tempora voluptatum, nemo atque eligendi sequi. Atque deserunt pariatur vel saepe odio!
          </div>
          </div>          
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center space-y-14">
        <div className="text-4xl px-5 text-center">
            2. Dynamic Conversations, Meaningful Insights
            
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="h-56 w-full px-5">
              <div className="w-full h-full bg-cover bg-center rounded-2xl" style={{backgroundImage:`url(${img2})`}}>

              </div>
            {/* <div className=" h-56 w-full" style={{backgroundImage:`url(${img2})`}}>
           
           </div> */}

            </div>
          
          <div className=" px-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae nihil quae corrupti voluptatem ullam, doloremque nobis sint tempora voluptatum, nemo atque eligendi sequi. Atque deserunt pariatur vel saepe odio!
          </div>
          </div>  
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center space-y-14">
        <div className="text-4xl px-5 text-center">
            3. Dynamic Conversations, Meaningful Insights
            
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
          <div className="px-5">
            <img src={`${img3}`} className="rounded-2xl" alt="" />
          </div>
          <div className=" px-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae nihil quae corrupti voluptatem ullam, doloremque nobis sint tempora voluptatum, nemo atque eligendi sequi. Atque deserunt pariatur vel saepe odio!
          </div>
          </div>  
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center space-y-14">
        <div className="text-4xl px-5 text-center">
            4. Dynamic Conversations, Meaningful Insights
            
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
          <div className="px-5">
            <img src={`${img4}`} className="rounded-2xl" alt="" />
          </div>
          <div className=" px-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae nihil quae corrupti voluptatem ullam, doloremque nobis sint tempora voluptatum, nemo atque eligendi sequi. Atque deserunt pariatur vel saepe odio!
          </div>
          </div>  
        </div>
       
      </Carousel>
    </div>
    </>;
  }
};

export default TsWhoWeAre;
