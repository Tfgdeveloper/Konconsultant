import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);

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
                <div className="relative group">
  <button className="text-black/50 hover:text-[#4A68FE] transition flex items-center gap-1">
    Services
    <span className="text-sm">▾</span>
  </button>

  <div className="
    absolute -left-20 mt-3 w-60
     bg-white rounded-xl shadow-lg
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
    z-50
  ">
    <div className="flex flex-col py-3 text-[16px]">
      <Link to="/managementconsulting" className="px-5 py-2 hover:bg-[#4A68FE] hover:text-white transition">
        Management Consulting
      </Link>
      <Link to="/assurance" className="px-5 py-2 hover:bg-[#4A68FE] hover:text-white transition">
        Assurance
      </Link>
      <Link to="/riskadvisory" className="px-5 py-2 hover:bg-[#4A68FE] hover:text-white transition">
        Risk Advisory
      </Link>
    </div>
  </div>
</div>
                
                <Link to="/packages" className="text-black/50 hover:text-[#4A68FE] transition">
                    Packages
                </Link>
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

        <div>
  <button
    onClick={() => setIsServiceOpen(!isServiceOpen)}
    className="text-[#4A68FE] flex justify-between w-full"
  >
    Services
    <span>{isServiceOpen ? "−" : "+"}</span>
  </button>

  {isServiceOpen && (
    <div className="flex flex-col pl-4 mt-2 space-y-2 text-[16px]">
      <Link
        to="/managementconsulting"
        onClick={() => setIsOpen(false)}
        className="hover:text-black transition"
      >
        Management Consulting
      </Link>
      <Link
        to="/assurance"
        onClick={() => setIsOpen(false)}
        className="hover:text-black transition"
      >
        Assurance
      </Link>
      <Link
        to="/riskadvisory"
        onClick={() => setIsOpen(false)}
        className="hover:text-black transition"
      >
        Risk Advisory
      </Link>
    </div>
  )}
</div>

        <Link
          to="/packages"
          onClick={() => setIsOpen(false)}
          className="text-[#4A68FE] hover:text-black transition "
        >
          Packages
        </Link>
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
