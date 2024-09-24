import React from 'react';  
import './SkillPage.css'; // Import the CSS file  
import { SiJavascript, SiTypescript, SiPhp, SiReact, SiAngular, SiSpring, SiWordpress, SiLaravel, SiTailwindcss, SiSass, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMicrosoftazure } from "react-icons/si";  
import { FaJava, FaAws } from "react-icons/fa";  
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";  

const SkillBanner = () => {  
  return (  
    <section className='container mx-auto w-4/5 flex flex-col bg-slate-100 mt-5 rounded-2xl md:block hidden'> {/* Hide on small screens */}   
      <div className="marquee-container"> {/* Container for marquee */}  
        <div className="marquee flex"> {/* Show marquee on medium and larger screens */}  
          {/* Icons Set 1 */}  
          <div className="flex items-center gap-8"> {/* Adjusted the gap for smaller spacing */}  
            <div className="flex flex-col items-center w-20 ">  
              <SiJavascript className='text-[#F7DF1E] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <FaJava className='text-[#007396] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiTypescript className='text-[#007ACC] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiPhp className='text-[#8993BE] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiReact className='text-[#61DAFB] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiAngular className='text-[#DD0031] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiSpring className='text-[#6DB33F] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiWordpress className='text-[#21759B] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiLaravel className='text-[#FF2D20] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>   
            <div className="flex flex-col items-center w-20 ">  
              <SiTailwindcss className='text-[#38B2AC] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <IoLogoAndroid className='text-[#A4C639] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <IoLogoApple className='text-[#A2AAAD] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiSass className='text-[#CC6699] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiNextdotjs className='text-[#000000] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiNodedotjs className='text-[#8CC84B] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiExpress className='text-[#000000] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiMongodb className='text-[#47A248] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <FaAws className='text-[#FF9900] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiMicrosoftazure className='text-[#008AD7] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
          </div>  

          {/* Duplicated Icons Set 2 for continuous effect */}  
          <div className="flex items-center gap-8"> {/* Adjusted the gap for smaller spacing */}   
            <div className="flex flex-col items-center w-20 ">  
              <SiJavascript className='text-[#F7DF1E] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <FaJava className='text-[#007396] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiTypescript className='text-[#007ACC] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiPhp className='text-[#8993BE] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiReact className='text-[#61DAFB] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiAngular className='text-[#DD0031] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiSpring className='text-[#6DB33F] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiWordpress className='text-[#21759B] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiLaravel className='text-[#FF2D20] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>   
            <div className="flex flex-col items-center w-20 ">  
              <SiTailwindcss className='text-[#38B2AC] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <IoLogoAndroid className='text-[#A4C639] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <IoLogoApple className='text-[#A2AAAD] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiSass className='text-[#CC6699] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiNextdotjs className='text-[#000000] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiNodedotjs className='text-[#8CC84B] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiExpress className='text-[#000000] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiMongodb className='text-[#47A248] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <FaAws className='text-[#FF9900] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
            <div className="flex flex-col items-center w-20 ">  
              <SiMicrosoftazure className='text-[#008AD7] text-5xl transition-transform transform hover:scale-110 duration-300' />  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
}  

export default SkillBanner;