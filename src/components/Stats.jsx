import { useState, useEffect } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    count: 25,
    value: "Million",
    text: "Households use Everest products every day",
  },
  {
    count: 4,
    value: "Billion",
    text: "Packs of Everest products are sold each year",
  },
  {
    count: 1,
    value: "Million",
    text: "Outlets sell Everest products across 1000 small towns and cities in India",
  },
  { count: 80, value: "+", text: "Countries world wide products available" },
  {
    count: 10,
    value: "times",
    text: "The brand has achieved ‘Superbrand’ status eight times (2003, 2006, 2009, 2012, 2015, 2017, 2019, 2021, 2023 & 2025)",
  },
  {
    count: 75,
    value: "+",
    text: "Pure and blended spices are part of Everest's 200+ product range & sizes",
  },
];

function StatsSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto pb-12 lg:pb-20 px-4 lg:px-16">
      <h2 className="mb-12 text-3xl md:text-5xl font-bold">
        A Taste Of Our Legacy!
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {statsData.map((item, index) => {
          const isLastCol = isMobile
            ? (index + 1) % 2 === 0
            : (index + 1) % 3 === 0;
          const isLastRow = isMobile ? index > 3 : index > 2;
          return (
            <div
              key={index}
              className={`py-10 px-5 text-center ${!isLastCol ? "border-r" : ""}
               ${!isLastRow ? "border-b" : ""}  border-gray-300`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-600 mb-4">
                <CountUp end={item.count} duration={2} /> {item.value}
              </h3>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;
