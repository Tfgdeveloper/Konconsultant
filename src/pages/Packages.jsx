import React from 'react'
import { Link } from 'react-router'
import PricingCard from '../components/PricingCard';

const Packages = () => {

  const managementPlans = [
    {
      title: "Basic",
      price: "$25/mo",
      features: [
        "Up to 3 projects",
        "Process improvement",
        "Team support",
        "Monthly insights",
      ],
    },
    {
      title: "Pro",
      price: "$49/mo",
      features: [
        "Up to 5 projects",
        "Scaling strategies",
        "Team support",
        "Bi-weekly reports",
      ],
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      features: [
        "Unlimited projects",
        "Growth strategies",
        "Full team support",
        "Weekly reports",
      ],
      highlight: true,
    },
  ];

  const assurancePlans = [
    {
      title: "Basic",
      price: "$25/mo",
      features: [
        "Small business risk assessment",
        "2 projects",
        "Team support",
        "Monthly reports",
      ],
    },
    {
      title: "Pro",
      price: "$49/mo",
      features: [
        "Mid-size compliance strategies",
        "4 projects",
        "Team support",
        "Bi-weekly reviews",
      ],
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      features: [
        "Large business risk management",
        "Unlimited projects",
        "Full team support",
        "Weekly audits",
      ],
      highlight: true,
    },
  ];

  const riskPlans = [
    {
      title: "Basic",
      price: "$25/mo",
      features: [
        "Risk analysis",
        "2 projects",
        "Team support",
        "monthly monitoring",
      ],
    },
    {
      title: "Pro",
      price: "$49/mo",
      features: [
        "Mid-size risk services",
        "4 projects",
        "Team support",
        "Bi-weekly evaluation",
      ],
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      features: [
        "Full-scale risk management",
        "Unlimited consultation",
        "Full team support",
        "Weekly sessions",
      ],
      highlight: true,
    },
  ];


  

  return (
    <div>
       <section id="home" className="w-full px-[0px] md:px-[100px] pt-[130px] pb-[75px] bg-[url('/images/Hero.png')] bg-cover bg-center mt-[-80px]">
        <div className='w-full h-full mx-auto max-w-[1440px] flex flex-col justify-between items-center '>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-[20px]'>
            <div className='md:w-1/2 flex flex-col gap-[20px] justify-center items-start md:px-0 px-[20px] '>
              <h1 className="
                
                text-[44px] md:text-[64px] 
                text-black
                font-medium
                not-italic
                leading-[48px] md:leading-[70px]
                tracking-[-3.08px] md:tracking-[-4.48px]
              ">
              Our <br/> <span className='text-[#4A68FE]'>Packages</span> 
              </h1>
              <p className='md:w-[462px]  text-[16px] tracking-[-0.48px] md:text-[18px] md:tracking-[-0.54px] text-black/60'>
                Address challenges and uncover opportunities with consultants focused on protecting and enhancing your value.
              </p>
              <button className='order-2  px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                Check our Packages

              </button>
            
            </div>
            
          </div>
          

        </div>

       </section>
      {/* Management Consulting */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-start items-start gap-[50px]'>
            <h2 className='  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Management Consulting
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                {managementPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  highlight={plan.highlight}
                />
              ))}
                
                
              </div>
            </div>
      </section>
      {/* Assurance */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col justify-start items-start gap-[50px]'>
            <h2 className='  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Assurance
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                {assurancePlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  highlight={plan.highlight}
                />
              ))}
                
                
              </div>
            </div>
      </section>
      {/* Risk Advisory */}
      <section className='w-full px-[20px] md:px-[100px] '>
            <div className='w-full mx-auto max-w-[1440px] flex flex-col py-[100px] justify-start items-start gap-[50px]'>
            <h2 className='  text-[28px] md:text-[48px] tracking-[-1.96px] md:tracking-[-3.36px] text-black font-medium md:w-[1050px] leading-[33px] md:leading-[45px]'>
              Risk Advisory
          </h2>
            <div className='w-full flex flex-col md:flex-row gap-[25px]'>
                {riskPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  highlight={plan.highlight}
                />
              ))}
                
                
              </div>
            </div>
      </section>
    </div>
  )
}

export default Packages
