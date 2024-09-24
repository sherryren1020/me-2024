import React from 'react';  
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";  

const AboutPage = () => {  
    return (  
        <section className='container mx-auto w-4/5 flex flex-col md:flex-row pt-20'>  
            <div className='flex-1 bg-blue-600 p-6 mb-6 md:mb-0 md:mr-3 rounded-2xl shadow-lg text-white'>  
                <h2 className='text-xl md:text-2xl font-bold mb-2'>I'm</h2>  
                <h1 className='text-2xl md:text-4xl font-extrabold mb-4'>Sherry (Shuwei) Ren</h1>  
                <p className='text-sm md:text-base mb-4'>  
                    I'm a passionate software developer currently wrapping up my Bachelor of  
                    Applied Computer Science at Dalhousie University. With experience spanning full-stack development,  
                    mobile app creation, and project management, I love turning complex problems into simple, elegant solutions.  
                </p>  
                <div className='flex flex-row mt-4'>  
                    <FaGithub className='mx-2 hover:text-gray-300 transition duration-300' />  
                    <FaLinkedin className='mx-2 hover:text-gray-300 transition duration-300' />  
                    <a href="/ShuweiRen_Resume_2025.pdf" download className='hover:text-gray-300 transition duration-300'>  
                        <FaFileAlt className='mx-2 hover:text-gray-300 transition duration-300'/>  
                    </a>  
                </div>  
            </div>  
            <div className='flex-1 hidden md:flex bg-yellow-500 p-4 ml-0 md:ml-3 rounded-2xl items-center justify-center'>  
    <img src='/me.JPG' alt='Portrait of Sherry Ren' className='object-cover rounded-xl w-full h-full' style={{ aspectRatio: '800 / 533' }} />  
</div>
        </section>  
    );  
}  

export default AboutPage;