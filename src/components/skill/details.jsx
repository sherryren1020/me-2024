import React from 'react';  

const SkillDetails = () => {  
  return (  
    <section className='container mx-auto w-4/5 flex flex-col md:flex-row bg-slate-100 mt-5 rounded-2xl p-5'>  
      {/* Left Side: Skill Groups */}  
      <div className='w-full md:w-1/2 p-4 hidden md:block'>  
        <h2 className='text-xl font-bold mb-4'>Skills</h2>  
        <div className='flex flex-col'>  
          <div className='mb-4'>  
            <h3 className='font-semibold'>Front-End</h3>  
            <div className='flex flex-wrap gap-2'>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>HTML</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>CSS</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>JavaScript</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>React</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Angular</span>  
            </div>  
          </div>  
          <div className='mb-4'>  
            <h3 className='font-semibold'>Back-End</h3>  
            <div className='flex flex-wrap gap-2'>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Node.js</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Express</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Java</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Spring Boot</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>PHP</span>  
            </div>  
          </div>  
          <div className='mb-4'>  
            <h3 className='font-semibold'>Database</h3>  
            <div className='flex flex-wrap gap-2'>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>MongoDB</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>MySQL</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Firebase</span>  
            </div>  
          </div>  
          <div className='mb-4'>  
            <h3 className='font-semibold'>Cloud</h3>  
            <div className='flex flex-wrap gap-2'>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>AWS</span>  
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full'>Azure</span>   
            </div>  
          </div>  
        </div>  
      </div>  

      {/* Right Side: Introduction Paragraph */}  
      <div className='w-full md:w-1/2 p-4'>  
        <h2 className='text-xl font-bold mb-4'>About Me</h2>  
        <p>  
          Hello! I am a passionate developer with experience in both front-end and back-end technologies.   
          I enjoy creating dynamic and responsive web applications that provide a great user experience.   
          My skills include JavaScript, React, Node.js, and various database technologies.   
          I am always eager to learn new technologies and improve my skills.   
          In my free time, I love to explore new programming languages and contribute to open-source projects.  
        </p>  
      </div>  
    </section>  
  );  
}  

export default SkillDetails;