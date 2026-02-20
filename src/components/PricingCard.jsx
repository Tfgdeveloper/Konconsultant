import { Link } from 'react-router'

export default function PricingCard({
  title,
  price,
  features = [],
  highlight = false,
}) {
  return (
    <div
      className={`relative md:w-1/3 rounded-[16px] 
      bg-gradient-to-br from-white to-[#F0F0F0] 
      md:p-[35px] p-[20px] 
      flex flex-col gap-[20px]
      shadow-[3px_3px_4px_0_rgba(255,255,255,0.30)_inset,-3px_-3px_4px_0_rgba(129,129,129,0.50)_inset,-81px_81px_162px_0_rgba(129,129,129,0.10),81px_-81px_162px_0_rgba(129,129,129,0.10)]
      ${highlight ? "" : ""}
      `}
    >
      <h4 className=" text-black text-[32px] font-medium">
        {title}
      </h4>

      <span className=" text-black text-[26px] font-medium">
        {price}
      </span>

      <div className="w-full flex gap-[15px]">
        <a href="/#contact" className=' px-[20px] py-[10px] bg-[#4A68FE] rounded-full text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
          Get Started
        </a>

        <Link to="tel:8883921615" className=' px-[20px] py-[10px] hover:bg-[#4A68FE] rounded-full text-black hover:text-white shadow-[inset_3px_3px_4px_0_rgba(255,255,255,0.30)] font-medium text-[18px] hover:scale-110 transition tracking-[-0.72px]'>
          Book a call
        </Link>
      </div>

      <div className="w-full flex flex-col gap-[10px] mt-[20px]">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-[10px] items-center">
            <img src="/images/check.png" alt="check" />
            <span className=" text-[20px] text-black">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}