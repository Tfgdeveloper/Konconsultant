import React from 'react'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router'

const Assurance = () => {
  return (
    <div>
          {/* Hero */}
          <section className="w-full px-[0px] md:px-[100px] pt-[200px] bg-[url('/images/Hero.png')] bg-cover bg-center mt-[-80px]">
            <div className='relative w-full h-full mx-auto max-w-[1440px] flex flex-col justify-between items-center '>
              <div className='relative w-full flex flex-col md:flex-row justify-between items-center gap-[20px]'>
                <div className='relative md:w-1/2 flex flex-col gap-[20px] justify-center items-start md:px-0 px-[20px] pb-0 md:pb-[75px] z-0 '>
                  <h1 className="
                    
                    text-[44px] md:text-[64px] 
                    text-[#4A68FE]
                    font-medium
                    not-italic
                    leading-[48px] md:leading-[70px]
                    tracking-[-3.08px] md:tracking-[-4.48px]
                  ">
                  Assurance
                  </h1>
                  <p className='md:w-[462px]  text-[16px] tracking-[-0.48px] md:text-[18px] md:tracking-[-0.54px] text-black/60 leading-[22px]'>
                    Empowering your business with confidence through comprehensive risk management and operational assurance solutions. 
                  </p>
                  <Link to="/packages" className='order-2  px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Check our Packages
    
                  </Link>
                
                </div>
                <div className='md:w-1/2 '>
                <img src='images/innerservices.png' className='hidden md:flex absolute -top-15 right-0 h-auto w-[620px] z-0'/>
                <img src='images/innerservicesmobile.png' className='md:hidden w-full z-0'/>
                </div>
              </div>
              
    
            </div>
    
          </section>
          {/* Section 2 */}
          <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-start items-start gap-[50px]'>
            <span className='  text-[26px] md:text-[40px] tracking-[-1.82px] md:tracking-[-1.6px] text-black font-medium md:w-[1200px] leading-[33px] md:leading-[48px]'>
          We combine industry insights, deep expertise, and a forward-thinking approach to provide assurance that protects your business while maximizing opportunities for growth and resilience.
          </span>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                <div className='relative md:w-1/4 rounded-[26px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start gap-[14px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <img src='images/Colour Tuneing.png' className='w-[40px]'/>
                  <h4 className=' text-black text-[22px] tracking-[-1.2px] leading-[28.6px] font-medium'>
                     Risk Identification & Mitigation
                  </h4>
    
    
                </div>
                 <div className='relative md:w-1/4 rounded-[26px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start gap-[14px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <img src='images/Three Squares.png' className='w-[40px]'/>
                  <h4 className=' text-black text-[22px] tracking-[-1.2px] leading-[28.6px] font-medium'>
                     Regulatory <br/>Compliance
                  </h4>
    
    
                </div>
                 <div className='relative md:w-1/4 rounded-[26px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start gap-[14px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <img src='images/Round Graph.png' className='w-[40px]'/>
                  <h4 className=' text-black text-[22px] tracking-[-1.2px] leading-[28.6px] font-medium'>
                     Operational <br/>Efficiency
                  </h4>
    
    
                </div>
                 <div className='relative md:w-1/4 rounded-[26px] bg-gradient-to-br from-white to-[#F0F0F0] md:p-[35px] p-[20px] flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start gap-[14px]
                shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]'>
                  <img src='images/Widget Add.png' className='w-[40px]'/>
                  <h4 className=' text-black text-[22px] tracking-[-1.2px] leading-[28.6px] font-medium'>
                     Continuous<br/>Improvement
                  </h4>
    
    
                </div>
                
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className='w-full px-[20px] md:px-[100px] overflow-hidden '>
                  <div className='w-full mx-auto max-w-[1440px] flex flex-col pb-[100px] justify-center items-center gap-[50px]'>
                  <div className='flex flex-col gap-[10px]'>
                  <h2 className=' text-center text-[32px] md:text-[56px] tracking-[-2.24px] md:tracking-[-3.92px] text-black font-medium'>
                  <span className='text-[#4A68FE]'>Contact </span> Us
                  </h2>
                  </div>
                 <ContactForm/>
                
                  
                  </div>
          </section>
          {/* Before Footer CTA */}
          <section className='w-full px-[20px] md:px-[100px] '>
                  <div className='w-full mx-auto max-w-[1440px] flex'>
          
                  
                <div className="w-full relative md:bg-[url('/images/footer.png')] bg-[url('/images/mobilefooter.png')] w-full mx-auto h-[575px] md:h-[341px] bg-cover bg-center rounded-[26px] p-[25px] md:p-[50px] shadow-[0_-109px_31px_0_rgba(166,166,166,0.00),0_-70px_28px_0_rgba(166,166,166,0.01),0_-39px_24px_0_rgba(166,166,166,0.03),0_-17px_17px_0_rgba(166,166,166,0.04),0_-4px_10px_0_rgba(166,166,166,0.05)] mb-[-100px] ">
                  <div className='md:w-[500px] h-full flex flex-col md:justify-between items-start gap-[20px]'>
                   <span className='font-medium text-[28px] md:text-[42px] tracking-[-1.96px] md:tracking-[-2.8px] text-black leading-[48px]'>
            We believe that transformative change happens when innovative minds collaborate.
          </span>
                    <button className='order-2  px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                      Join us now
                    </button>
                  </div>
                </div>
                </div>
          </section>
    </div>
  )
}

export default Assurance
