import React from 'react'
import { Link } from 'react-router'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='w-full flex bg-[#4A68FE] px-[20px] md:px-[100px] pt-[150px] pb-[20px] z-0'>
        <div className='w-full flex flex-col gap-[50px] items-center mx-auto max-w-[1440px] z-0'>
            <div className='w-full flex flex-col md:flex-row gap-[30px] md:gap-[50px] justify-between'>
                <div className='w-full md:1/3 flex flex-col gap-[40px] leading-normal'>
                    <Link to="/">
                    <img src="images/logofooter.png" className="w-auto h-[66px]"/>
                    </Link>
                    <span className=' font-medium text-[24px] md:text-[32px] tracking-[-1px]  text-white leading-[39px]'>
                        Our mission is to help businesses<br/> thrive through innovative<br/> consulting solutions.
                    </span>
                    <div className="flex gap-[18px] text-[32px] ">
                        <Link
                        to="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:scale-110 transition"
                        >
                        <FaInstagram className='' />
                        </Link>

                        <Link
                            to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:scale-110 transition"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
                <div className='w-full md:2/3 flex flex-col md:flex-row gap-[50px] leading-normal justify-end'>
                    <div className='w-auto flex flex-col gap-[15px]'>
                    <Link className=' text-white text-[20px] md:text-[22px] font-normal tracking-[-1.4px] md:tracking-[-1.54px]'>Home</Link>
                    <div className='flex flex-col gap-[10px]'>
                        <Link to="#about" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>About</Link>
                        <Link to="#services" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Services</Link>
                        <Link to="/packages" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Packages</Link>
                    </div>
                    </div>
                    <div className='w-auto flex flex-col gap-[15px]'>
                    <Link className=' text-white text-[20px] md:text-[22px] font-normal tracking-[-1.4px] md:tracking-[-1.54px]'>Services</Link>
                    <div className='flex flex-col gap-[10px]'>
                        <Link to="/managementconsulting" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Management Consulting</Link>
                        <Link to="/assurance" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Assurance</Link>
                        <Link to="/riskadvisory" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Risk Advisory</Link>
                    </div>
                    </div>
                    <div className='w-auto flex flex-col gap-[15px]'>
                    <Link className=' text-white text-[20px] md:text-[22px] font-normal tracking-[-1.4px] md:tracking-[-1.54px]'>Contact</Link>
                    <div className='flex flex-col gap-[10px]'>
                        <Link to="tel:8883921615" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>(888) 392-1615</Link>
                        <Link to="mailto:info@konconsultants.com" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>info@konconsultants.com</Link>
                        <span className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>192 Pamela Drbolingbrook, IL 60440</span>
                    </div>
                    </div>
                </div>
                
            </div>
             <div className='w-full flex flex-col md:flex-row gap-[30px] md:gap-[50px] justify-between'>
                <div className='flex flex-row gap-[50px]'>
                        <Link to="/privacypolicy" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Privacy policy</Link>
                        <Link to="/termsandconditions" className=' text-white text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px]'>Terms</Link>
                        
                </div>
                <span className=' text-[16px] md:text-[18px] font-normal tracking-[-0.48px] md:tracking-[-0.54px] text-white font-normal leading-none'>
                        © 2024 Kon Consultants. All Rights Reserved.
                </span>
            </div>
            

        </div>
    </div>   
  )
}

export default Footer
