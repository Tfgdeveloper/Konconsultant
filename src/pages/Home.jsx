import React from 'react'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div >
      {/* Hero */}
      <section id="home" className="w-full px-[0px] md:px-[100px] pt-[130px] pb-0 md:pb-[30px] bg-[url('/images/Hero.png')] bg-cover bg-center mt-[-80px]">
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
              Moving beyond<br/> the <span className='text-[#4A68FE]'>traditional</span> <br/>risk assessment
              </h1>
              <p className='md:w-[462px] intertext text-[16px] tracking-[-0.48px] md:text-[18px] md:tracking-[-0.54px] text-black/60'>
                Join us for the second webinar in our enterprise risk management (ERM) series where we will explore how to enhance a risk assessment at your organization.
              </p>
              <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                Talk to an Expert

              </button>
            
            </div>
            <div className='md:w-1/2 '>
            <img src='images/herocontent.png' className='h-auto w-[600px]'/>
            </div>
          </div>
          

        </div>

      </section>
      <section className="w-full px-[20px] md:px-[100px] -mt-[50px]">
        <div className='w-full h-full mx-auto max-w-[1440px] flex flex-col justify-between items-center '>
          <div className='w-full bg-[#4A68FE] rounded-[17px] flex flex-col md:flex-row justify-between items-center p-[30px] gap-[30px]'>
            <div className='md:w-1/3 flex flex-col items-center gap-[20px]'>
              <img src="images/Group 1.png" className=''/>
              <span className='intertext text-[26px] tracking-[-1.82px] md:text-[36px] text-white md:tracking-[-2.52px] font-normal'>STRATEGY</span>
            </div>
            <div className='md:w-1/3 flex flex-col items-center gap-[20px]'>
              <img src="images/Group 2.png" className=''/>
              <span className='intertext text-[26px] tracking-[-1.82px] md:text-[36px] text-white md:tracking-[-2.52px]font-normal'>VALIDATION</span>
            </div>
            <div className='md:w-1/3 flex flex-col items-center gap-[20px]'>
              <img src="images/Group 3.png" className=''/>
              <span className='intertext text-[26px] tracking-[-1.82px] md:text-[36px] text-white md:tracking-[-2.52px] font-normal'>EXECUTION</span>
            </div>

          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className='w-full px-[20px] md:px-[100px] '>
        <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-center items-center gap-[50px]'>
        <h2 className='intertext  text-[32px] md:text-[56px] tracking-[-2.24px] md:tracking-[-3.92px] text-black font-medium'>
          <span className='text-[#4A68FE]'>About</span> Kon Consultants
        </h2>
        <div className="w-full relative md:bg-[url('/images/about.png')] bg-[url('/images/aboutmobile.png')] h-[516.238px] bg-cover bg-center rounded-[20px] p-[25px] md:p-[35px]">
        <div className='h-full flex flex-col md:flex-row justify-end md:justify-between items-end gap-[10px] md:gap-[20px]'>
          <p className='order-2 md:order-1 textinter text-[16px] md:text-[24px] tracking-[-1.12px] md:tracking-[-1.68px] text-white md:leading-[31.2px] w-full md:w-[800px]'>
            At Kon Consultants, we believe in rolling up our sleeves and working alongside you, offering pragmatic, data-driven insights that drive your business forward. With over 9 years of expertise, we guide our clients towards sustainable success.
          </p>
          <div className='w-full md:w-auto flex flex-col gap-0 order-1 md:order-2'>
            <span className='textinter font-medium text-[34px] md:text-[44px] tracking-[-2.38px] md:tracking-[-2.8px] text-white leading-[42px] md:text-right'>
            09
            </span>
            <span className='textinter text-[20px] md:text-[24px] tracking-[-1.4px] md:tracking-[-1.68px] text-white'>
            years of expertise
            </span>
          </div>
          
        </div>
        </div>
        <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
            Get started with us
        </button>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="w-full px-[20px] md:px-[100px] py-[75px] w-full relative bg-[url('/images/servicesbg.png')] bg-cover bg-center">
        <div className='w-full mx-auto max-w-[1440px] flex flex-col justify-center items-center gap-[50px]'>
           <h2 className='intertext  text-[32px] md:text-[56px] tracking-[-2.24px] md:tracking-[-3.92px] text-white font-medium'>
            Services we offer
          </h2>
          <div className='w-full flex flex-col md:flex-row gap-[25px]'>
            <div className='relative md:w-1/3 rounded-[26px] bg-[linear-gradient(135deg,#F0F0F0_100%,#FFF_0%)] md:p-[35px] p-[20px] md:h-[384px] h-[280px] flex flex-col justify-end items-end
            shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.20),81px_-81px_162px_0_rgba(129,129,129,0.20)]'>
              <img src='images/Online consulting-rafiki 1.png' className='md:w-[323px] md:h-[323px] w-[224px] h-[250px] absolute md:right-[-0.333px] md:top-[-88.708px] left-[0px] top-[-65.708px]'/>
              <div className='w-full flex flex-col gap-[10px]'>
                <h4 className='intertext text-black text-[26px] tracking-[-1.82px] leading-[33.8px] font-medium'>
                  Management Consulting
                </h4>
                <p className='w-[303px] intertext text-black/60 text-[18px] tracking-[-0.54px]'>
                  Our experts help you tackle complex challenges and seize opportunities.
                </p>

              </div>


            </div>
            <div className='relative md:w-1/3 rounded-[26px] bg-[linear-gradient(135deg,#F0F0F0_100%,#FFF_0%)] md:p-[35px] p-[20px] md:h-[384px] h-[280px] flex justify-end items-end
            shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.20),81px_-81px_162px_0_rgba(129,129,129,0.20)]'>
              <img src='images/Investment data-rafiki 1.png' className='md:w-[323px] md:h-[323px] w-[224px] h-[250px] absolute md:right-[-0.333px] md:top-[-88.708px] left-[0px] top-[-85.708px]'/>
              <div className='w-full flex flex-col gap-[10px]'>
                <h4 className='intertext text-black text-[26px] tracking-[-1.82px] leading-[33.8px] font-medium'>
                  Assurance
                </h4>
                <p className='w-[310px] intertext text-black/60 text-[18px] tracking-[-0.54px]'>
                  We combine in-depth industry expertise with precision-driven service offerings.
                </p>

              </div>


            </div>
            <div className='relative md:w-1/3 rounded-[26px] bg-[linear-gradient(135deg,#F0F0F0_100%,#FFF_0%)] md:p-[35px] p-[20px] md:h-[384px] h-[280px] flex justify-end items-end
            shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.20),81px_-81px_162px_0_rgba(129,129,129,0.20)]'>
              <img src='images/Finance-rafiki 1.png' className='md:w-[323px] md:h-[323px] w-[224px] h-[250px] absolute md:right-[-0.333px] md:top-[-88.708px] left-[0px] top-[-65.708px]'/>
              <div className='w-full flex flex-col gap-[10px]'>
                <h4 className='intertext text-black text-[26px] tracking-[-1.82px] leading-[33.8px] font-medium'>
                  Risk Advisory
                </h4>
                <p className='intertext text-black/60 text-[18px] tracking-[-0.54px]'>
                  Our comprehensive risk advisory services encompass governance.
                </p>

              </div>


            </div>
          </div>
          <button className='order-2 intertext px-[20px] py-[10px]  
          bg-[linear-gradient(135deg,#F2F2F2_100%,#FFF_0%)] rounded-full text-black shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(122,122,122,0.50)_inset,-79px_79px_158px_0_rgba(122,122,122,0.20),79px_-79px_158px_0_rgba(122,122,122,0.20),-79px_-79px_158px_0_rgba(255,255,255,0.90),79px_79px_198px_0_rgba(122,122,122,0.90)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    View all services

          </button>
        </div>

      </section>
      {/* Packages */}
      <section id="packages" className='w-full px-[20px] md:px-[100px] overflow-hidden '>
        <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-center items-center gap-[50px]'>
        <div className='flex flex-col gap-[10px]'>
        <h2 className='hidden md:block  intertext text-center text-[32px] md:text-[56px] tracking-[-2.24px] md:tracking-[-3.92px] text-black font-medium'>
         Our <span className='text-[#4A68FE]'>Industry</span> Specialization
        </h2>
        <h2 className='md:hidden intertext text-center text-[32px] md:text-[56px] tracking-[-2.24px] md:tracking-[-3.92px] text-black font-medium leading-[45px]'>
         Our <span className='text-[#4A68FE]'>Industry</span> <br/>Specialization
        </h2>
        <p className='md:w-[646px] intertext md:text-[18px] md:tracking-[-0.54px] text-[16px] tracking-[-0.48px] text-black/60 text-center'>
          We partner with leading businesses across a range of industries, offering specialized consulting expertise that drives growth and efficiency:
        </p>
        
        </div>
        <Slider/>
      
        
        </div>
      </section>
      {/* Before Footer CTA */}
      <section id="contact" className='w-full px-[20px] md:px-[100px] '>
        <div className='w-full mx-auto max-w-[1440px] flex'>

        
      <div className="w-full relative md:bg-[url('/images/footer.png')] bg-[url('/images/mobilefooter.png')] w-full mx-auto h-[575px] md:h-[341px] bg-cover bg-center rounded-[26px] p-[25px] md:p-[50px] shadow-[0_-109px_31px_0_rgba(166,166,166,0.00),0_-70px_28px_0_rgba(166,166,166,0.01),0_-39px_24px_0_rgba(166,166,166,0.03),0_-17px_17px_0_rgba(166,166,166,0.04),0_-4px_10px_0_rgba(166,166,166,0.05)] mb-[-100px] ">
        <div className='md:w-[500px] h-full flex flex-col md:justify-between items-start gap-[20px]'>
          <span className='textinter font-medium text-[28px] md:text-[40px] tracking-[-1.96px] md:tracking-[-2.8px] text-black leading-[42px]'>
            We believe that transformative change happens when innovative minds collaborate.
          </span>
          <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
            Join us now
          </button>
        </div>
      </div>
      </div>
      </section>
      
    </div>
  )
}

export default Home
