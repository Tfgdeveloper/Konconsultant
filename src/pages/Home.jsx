import React from 'react'


const Home = () => {
  return (
    <div className='w-full flex flex-col px-[20px] md:px-[100px]'>
      <div className='w-full mx-auto max-w-[1440px] z-0'>

      </div>
      
      <section className="w-full mx-auto max-w-[1440px] relative md:bg-[url('/images/footer.png')] bg-[url('/images/mobilefooter.png')] mt-100 h-[575px] md:h-[341px] bg-cover bg-center rounded-[26px] p-[25px] md:p-[50px] shadow-[0_-109px_31px_0_rgba(166,166,166,0.00),0_-70px_28px_0_rgba(166,166,166,0.01),0_-39px_24px_0_rgba(166,166,166,0.03),0_-17px_17px_0_rgba(166,166,166,0.04),0_-4px_10px_0_rgba(166,166,166,0.05)] mb-[-100px] ">
        <div className='md:w-[500px] h-full flex flex-col md:justify-between items-start gap-[20px]'>
          <span className='textinter font-medium text-[28px] md:text-[40px] tracking-[-1.96px] md:tracking-[-2.8px] text-black leading-[42px]'>
            We believe that transformative change happens when innovative minds collaborate.
          </span>
          <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
            Join us now
          </button>
        </div>
      </section>
      
    </div>
  )
}

export default Home
