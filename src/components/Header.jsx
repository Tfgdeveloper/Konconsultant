import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full flex bg-white/40 px-[20px] md:px-[100px] py-[15px] backdrop-blur-[12.7px] border-b-[1px] border-[#D7D7D7] z-50'>
        <div className='w-full flex justify-between items-center mx-auto max-w-[1440px]'>
            {/* Logo */}
            <div className="order-1" >
                <Link to="">
                <img src="images/Group.png" className="w-auto h-[42px]"/>
                </Link>
            </div>
            {/* menu */}
            <div className="order-3 md:order-2 z-50">
                <div className="">
                
                <div className="intertext hidden md:flex space-x-8 text-[18px] tracking-[-0.72px]">
                <a href="#about" className="text-black/50 hover:text-[#4A68FE] transition ">
                    About
                </a>
                <a href="#services" className="text-black/50 hover:text-[#4A68FE]  transition">
                    Services
                </a>
                <a href="#packages" className="text-black/50 hover:text-[#4A68FE] transition">
                    Packages
                </a>
                </div>

                {/* Mobile Button */}
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-black focus:outline-none text-[28px]"
                >
                {isOpen ? "✕" : "☰"}
                </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
    <div className="md:hidden w-full bg-white absolute left-0 top-18 z-50">
      <div className="intertext flex flex-col px-6 py-4 space-y-3 text-[18px] font-normal tracking-[-0.72px]">
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-[#4A68FE] hover:text-black transition "
        >
          About
        </a>

        <a
          href="#services"
          onClick={() => setIsOpen(false)}
          className="text-[#4A68FE] hover:text-black transition "
        >
          Services
        </a>

        <a
          href="#packages"
          onClick={() => setIsOpen(false)}
          className="text-[#4A68FE] hover:text-black transition "
        >
          Packages
        </a>
        <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Contact Us

                </button>
      </div>
    </div>
  )}
            </div>
            {/* Button */}
            <div className="hidden md:flex order-2 md:order-3">
                <button className='order-2 intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
                    Contact Us

                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Header
