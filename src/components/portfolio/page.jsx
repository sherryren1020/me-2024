import React from 'react';  

const Portfolio = () => {  
  return (  
    <section className='container mx-auto w-4/5 flex flex-col bg-slate-100 mt-5 rounded-2xl p-5'>  
      <h2 className='text-2xl font-bold mb-6'>Previous Completed Projects</h2>  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>  
        {/* Project Item 1 */}  
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>   
          <a href="https://broodl-nextjs.netlify.app/" target="_blank" rel="noopener noreferrer">  
            <img src="/broodl.png" alt="broodl" className='w-full h-48 object-cover border-2 border-white' />  
          </a>  
          <div className='p-4'>  
            <h3 className='font-semibold'>Broodel (mood recorder)</h3>  
            <p className='text-gray-600'>Using nextjs and tailwind for the front end and integrated with firebase authentication.</p>  
          </div>  
        </div>  

        {/* Project Item 2 */}  
        <div className='bg-white shadow-md rounded-lg overflow-hidden'> 
        <a href="http://challengeapp.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">   
          <img src="/challengeApp.png" alt="challengeApp" className='w-full h-48 object-cover border-2 border-white' /> </a> 
          <div className='p-4'>  
            <h3 className='font-semibold'>Challenge App</h3>  
            <p className='text-gray-600'>Full-stack application utilizing Spring Boot for the API and React for the frontend, deployed on AWS using RDS and Elastic Beanstalk. Hosted this by using AWS S3 bucket.</p>  
          </div>  
        </div>  

        {/* Project Item 3 */}  
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>  

          <img src="/mobilia.png" alt="Project 3" className='w-full h-48 object-cover border-2 border-white' />
          <div className='p-4'>  
            <h3 className='font-semibold'>Freelancer website</h3>  
            <p className='text-gray-600'>Utilizing Next.js and Tailwind for the frontend, and integrating Firebase for database and authentication. (Still building)</p>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
}  

export default Portfolio;