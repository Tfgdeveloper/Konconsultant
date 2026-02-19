const cards = [
  { title: "Construction", img: "/images/img1.png" },
  { title: "Energy", img: "/images/img2.png" },
  { title: "Family Business", img: "/images/img3.png" },
  { title: "Healthcare", img: "/images/img4.png" },
  { title: "Finance", img: "/images/img5.png" },
];

export default function Slider() {
  return (
    <div className="w-full ">

      {/* 🔹 Desktop Slider */}
      <div className="hidden md:block overflow-hidden group">
        <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused]">

          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="
                relative
                h-[384px]
                w-[253px]
                hover:w-[396.667px]
                transition-all
                duration-500
                ease-in-out
                rounded-2xl
                overflow-hidden
                cursor-pointer
                flex-shrink-0
              "
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="intertext text-white text-[26px] tracking-[-1.82px] leading-[33.8px] font-medium">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔹 Mobile Static Layout */}
      <div className="flex flex-col gap-[15px] md:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              relative
              h-[162px]
              w-full
              rounded-2xl
              overflow-hidden
            "
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-[17px]">
              <h3 className="intertext text-white text-[18.2px] tracking-[-1.274px] leading-[23.66px] font-medium">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}