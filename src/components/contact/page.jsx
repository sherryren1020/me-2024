import React from 'react';  
import { FaEnvelope, FaPhone, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';  

const ContactMe = () => {  
  return (  
    <section className='container mx-auto w-4/5 flex flex-col bg-slate-100 mt-5 rounded-2xl p-5 text-center'>  
      <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>  
      <p className='text-gray-600 mb-4'>  
        What’s next? Feel free to reach out if you want to collaborate, or simply want to connect.  
      </p>  
      <div className='mb-4'>  
        <p className='flex justify-center items-center text-lg font-semibold'>  
          <FaEnvelope className='mr-2' /> sherry.vv1020@gmail.com  
        </p>  
      </div>  
      <p className='text-gray-600 mb-4'>You may also find me on these platforms!</p>  
      <div className='flex justify-center space-x-4'>  
        <a href='https://github.com/sherryren1020' target='_blank' rel='noopener noreferrer'>  
          <FaGithub className='text-gray-600 hover:text-blue-600 transition duration-200' size={24} />  
        </a>  
 
        <a href='https://linkedin.com/in/shuwei-ren' target='_blank' rel='noopener noreferrer'>  
          <FaLinkedin className='text-gray-600 hover:text-blue-600 transition duration-200' size={24} />  
        </a>  
      </div>  
    </section>  
  );  
}  

export default ContactMe;