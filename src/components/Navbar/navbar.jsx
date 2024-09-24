import React, { useState } from 'react';  
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling  

const Navbar = () => {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleMenu = () => {  
        setIsOpen(!isOpen);  
    };  

    return (  
        <nav className='bg-white h-16 w-full fixed right-0 top-0 shadow-md flex justify-between items-center px-4'>  
            <div className='text-lg font-semibold'>Hi, I am Shuwei </div>  
            <button className='md:hidden p-2' onClick={toggleMenu}>  
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>  
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />  
                </svg>  
            </button>  
            <ul className={`flex ${isOpen ? 'flex-col absolute right-0 top-16 bg-white shadow-md w-48 z-10' : 'hidden'} md:flex md:flex-row md:space-x-4`}>  
                <li className='p-4 hover:bg-gray-200'>  
                    <Link to="home" smooth={true} duration={500}>Home</Link>  
                </li>  

                <li className='p-4 hover:bg-gray-200'>  
                <a href="/ShuweiRen_Resume_2025.pdf" download>Resume
                    <Link to="services" smooth={true} duration={500}></Link> </a> 
                </li>  
                <li className='p-4 hover:bg-gray-200'>  
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>  
                </li>  
            </ul>  
        </nav>  
    );  
};  

export default Navbar;