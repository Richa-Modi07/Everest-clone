import React from "react";
import AnimationButton from "./AnimationButton";
import RasamRice from "../assets/Rasam-Rice-1920x1281-1.jpg.webp";

function RecipeSection() {
  const recipes = [
    {
      img: RasamRice,
      title: "Rasam Rice",
    },
    {
      img: RasamRice,
      title: "Rasam Rice",
      highlight: true,
    },
    {
      img: RasamRice,
      title: "Rasam Rice",
    },
    {
      img: RasamRice,
      title: "Rasam Rice",
    },
  ];

  return (
    <>
      <div className="w-full pb-12 lg:pb-20 px-4 lg:px-16 flex flex-col gap-y-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Recipes For Your Soul
          </h2>
          <AnimationButton content="Visit Everest's Kitchen" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {recipes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-5 group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-80 object-cover transition-all duration-700 group-hover:shadow-2xl rounded-lg"
              />
              <div className="w-fit relative py-2 px-5 text-2xl sm:text-3xl  lg:text-4xl overflow-hidden">
                <span className="absolute inset-0 w-0 bg-red-600  transition-all duration-700 group-hover:w-full"></span>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700 ">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipeSection;
