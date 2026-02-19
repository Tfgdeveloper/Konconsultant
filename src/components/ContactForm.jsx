import { useState} from "react";
import ServiceDropdown from "./ServiceDropdown";

export default function ContactForm() {
    const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      service,
    };

    console.log(formData);
  };
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <form className="space-y-5 flex flex-col justify-center items-center">

        {/* First + Last Name */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
  type="text"
  placeholder="First Name"
  className="w-full px-5 py-4 rounded-[16px] bg-[linear-gradient(135deg,#FFF_0%,#F0F0F0_100%)] border border-transparent
    focus:border-[#464646] text-black/50 focus:text-black font-['Inter'] text-[20px] font-medium leading-[130%] tracking-[-1.4px]
    outline-none transition-all duration-300 "/>
          <input
            type="text"
            placeholder="Last Name"
           className="w-full px-5 py-4 rounded-[16px] bg-[linear-gradient(135deg,#FFF_0%,#F0F0F0_100%)] border border-transparent
    focus:border-[#464646] text-black/50 focus:text-black font-['Inter'] text-[20px] font-medium leading-[130%] tracking-[-1.4px]
    outline-none transition-all duration-300 "/>
      
        </div>

        {/* Email + Phone */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 rounded-[16px] bg-[linear-gradient(135deg,#FFF_0%,#F0F0F0_100%)] border border-transparent
    focus:border-[#464646] text-black/50 focus:text-black font-['Inter'] text-[20px] font-medium leading-[130%] tracking-[-1.4px]
    outline-none transition-all duration-300 "/>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-5 py-4 rounded-[16px] bg-[linear-gradient(135deg,#FFF_0%,#F0F0F0_100%)] border border-transparent
    focus:border-[#464646] text-black/50 focus:text-black font-['Inter'] text-[20px] font-medium leading-[130%] tracking-[-1.4px]
    outline-none transition-all duration-300 "/>
        </div>

        {/* Services Dropdown */}
        <div className="w-full relative">
          <ServiceDropdown
        value={service}
        onChange={setService}
      />

      {/* Hidden input (optional if backend needs it) */}
      <input type="hidden" name="service" value={service} />

          {/* Custom Arrow */}
          
        </div>

        {/* Message */}
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full px-5 py-4 rounded-[16px] bg-[linear-gradient(135deg,#FFF_0%,#F0F0F0_100%)] border border-transparent
    focus:border-[#464646] text-black/50 focus:text-black font-['Inter'] text-[20px] font-medium leading-[130%] tracking-[-1.4px]
    outline-none transition-all duration-300 "
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className='intertext px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
          Submit
        </button>

      </form>
    </div>
  );
}