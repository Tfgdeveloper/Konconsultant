import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";


export default function ServiceDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    "Management Consulting",
    "Assurance",
    "Risk Advisory",
    
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 flex items-center justify-between
        "
      >
        <span className={value ? "text-black" : "text-black/30"}>
          {value || "What service are you interested in?"}
        </span>

        <BiChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="
          absolute mt-2 w-full
          rounded-[16px]
          bg-white
          shadow-lg
          border border-gray-200
          z-50
          overflow-hidden
        ">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(service);
                setOpen(false);
              }}
              className="
                px-5 py-3
                text-[18px]
                hover:bg-[#4A68FE] hover:text-white
                cursor-pointer
                transition
              "
            >
              {service}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}