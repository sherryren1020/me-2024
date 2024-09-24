import React from 'react';  

const Experience = () => {  
  return (  
    <section className='container mx-auto w-4/5 flex flex-col bg-slate-100 mt-5 rounded-2xl p-5'>  
      <h2 className='text-2xl font-bold mb-6'>Experience</h2>  

      <div className='flex flex-col bg-white shadow-md rounded-lg p-4 mb-4'>  
        <h3 className='text-xl font-semibold'>Riipen Level Up Program</h3>  
        <span className='text-gray-500 mb-2'>Software Developer (Intership) | May 2021 – Aug 2021</span>  
        <ul className='list-disc list-inside'>  
          <li>Designed and developed client websites utilizing React and Tailwind CSS
</li>  
          <li>Implemented functionalities, including Firebase authentication and user management features
</li>  
          <li>Collaborated with clients to gather requirements, offered support to fellow team members and ensured the final product met their expectations
</li>  
        </ul>  
      </div>  
      {/* Experience Item 1 */}  
      <div className='flex flex-col bg-white shadow-md rounded-lg p-4 mb-4'>  
        <h3 className='text-xl font-semibold'>REDSpace</h3>  
        <span className='text-gray-500 mb-2'>Front-end Developer (CO-OP) | May 2021 – Aug 2021</span>  
        <ul className='list-disc list-inside'>  
          <li>Designed and implemented a scalable single-page web application using JavaScript, React, and AWS Lambda, enhancing automation in hiring processes.</li>  
          <li>Contributed to the development of a mobile app leveraging TypeScript, React Native, and AWS services, focusing on performance and scalability.</li>  
          <li>Conducted unit tests and UI tests using Jest and React Testing Library, including mocking user interactions and validating UI states.</li>  
        </ul>  
      </div>  

      {/* Experience Item 2 */}  
      <div className='flex flex-col bg-white shadow-md rounded-lg p-4 mb-4'>  
        <h3 className='text-xl font-semibold'>Aptitude Digital</h3>  
        <span className='text-gray-500 mb-2'>Front-end Developer (CO-OP) | May 2021 – Aug 2021</span>  
        <ul className='list-disc list-inside'>  
          <li>Engineered a responsive content management system for clients using Drupal, enhancing user experience and accessibility.</li>  
          <li>Conducted comprehensive testing of Drupal applications, including unit tests and integration tests.</li>  
          <li>Implemented responsive web design principles, optimizing websites for various devices and screen sizes.</li>  
          <li>Utilized Git for version control and collaborated with the team, conducting routine maintenance and upgrades for Drupal 7/8.</li>  
        </ul>  
      </div>  

      {/* Experience Item 3 */}  
      <div className='flex flex-col bg-white shadow-md rounded-lg p-4'>  
        <h3 className='text-xl font-semibold'>Several Chinese Companies</h3>  
        <span className='text-gray-500 mb-2'>BA/ ERP Specialist/PM | 2010 – 2018</span>  
        <ul className='list-disc list-inside'>  
          <li>Needs Analyzing</li>  
          <li>Software Testing (Functional, Integration Test)</li>  
          <li>Project Managing</li>  
        </ul>  
      </div>  
    </section>  
  );  
}  

export default Experience;