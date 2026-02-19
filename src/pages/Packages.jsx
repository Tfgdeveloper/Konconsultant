import React from 'react'
import { Link } from 'react-router'

const Packages = () => {
  return (
    <div>
       <section id="home" className="w-full px-[0px] md:px-[100px] pt-[130px] pb-[75px] bg-[url('/images/Hero.png')] bg-cover bg-center mt-[-80px]">
        <div className='w-full h-full mx-auto max-w-[1440px] flex flex-col justify-between items-center '>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-[20px]'>
            <div className='md:w-1/2 flex flex-col gap-[20px] justify-center items-start md:px-0 px-[20px] '>
              <h1 className="
                intertext
                text-[44px] md:text-[64px] 
                text-black
                font-medium
                not-italic
                leading-[48px] md:leading-[70px]
                tracking-[-3.08px] md:tracking-[-4.48px]
              ">
              Our <br/> <span className='text-[#4A68FE]'>Packages</span> 
              </h1>
              <p className='md:w-[462px] intertext text-[16px] tracking-[-0.48px] md:text-[18px] md:tracking-[-0.54px] text-black/60'>
                Address challenges and uncover opportunities with consultants focused on protecting and enhancing your value.
              </p>
              <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                Talk to an Expert

              </button>
            
            </div>
            
          </div>
          

        </div>

       </section>
      {/* Management Consulting */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-start items-start gap-[50px]'>
            <h2 className='intertext  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Management Consulting
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Basic
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $25/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Up to 3 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Process improvement</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Monthly insights</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Pro
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $49/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Up to 5 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Scaling strategies</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Bi-weekly reviews</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Enterprise
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $99/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Unlimited projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Growth strategies</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Full team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Weekly reports</span>
                    </div>

                  </div>
    
    
                </div>
                
                
              </div>
            </div>
      </section>
      {/* Assurance */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col justify-start items-start gap-[50px]'>
            <h2 className='intertext  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Assurance
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Basic
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $25/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Small business risk assessment</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>2 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Monthly reports</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Pro
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $49/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Mid-size compliance strategies</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>4 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Bi-weekly reviews</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Enterprise
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $99/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='w-[300px] intertext text-[20px] text-black tracking-[-1px]'>Large business risk management</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Unlimited projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Full team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Weekly reports</span>
                    </div>

                  </div>
    
    
                </div>
                
                
              </div>
            </div>
      </section>
      {/* Risk Advisory */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-start items-start gap-[50px]'>
            <h2 className='intertext  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Risk Advisory
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Basic
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $25/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Risk analysis</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>2 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Monthly insights</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Pro
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $49/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Mid-size risk services</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>4 projects</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Bi-weekly evaluation</span>
                    </div>

                  </div>
    
    
                </div>
                <div className='relative md:w-1/3 rounded-[16px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-col justify-start items-start gap-[20px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <h4 className='intertext text-black text-[32px] tracking-[-1.92px] leading-[28.6px] font-medium'>
                     Enterprise
                  </h4>
                  <span className='intertext text-black text-[26px] tracking-[-1.92px] leading-[-1.82px] font-medium'>
                     $99/mo
                  </span>
                  <div className='w-full flex flex-row gap-[15px]'>
                    <a href="/#contact" className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Get Started
                    </a>
                  <Link to="tel:8883921615" className='intertext px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Book a call
                  </Link>
                  </div>
                  <div className='w-full flex flex-col gap-[10px] mt-[20px]'>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Bi-weekly evaluation</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Unlimited consultation</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Full team support</span>
                    </div>
                    <div className='w-full flex flex-row gap-[10px] items-center'>
                      <img src='images/check.png' className='' /> 
                      <span className='intertext text-[20px] text-black tracking-[-1px]'>Weekly sessions</span>
                    </div>

                  </div>
    
    
                </div>
                
                
              </div>
            </div>
      </section>
    </div>
  )
}

export default Packages
