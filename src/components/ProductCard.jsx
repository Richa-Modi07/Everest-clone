import AnimatedTitle from "./AnimatedTitle";
import AnimationButton from "./AnimationButton";
function ProductCard({
  img1,
  img2,
  title,
  desc,
  titleBg,
  buttonContent,
  order,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center lg:space-x-15 group pb-5 ">
      <div
        className={`relative w-full max-w-lg h-100 aspect-square order-1 ${order ? "sm:order-1" : "sm:order-2"} `}
      >
        <img src={img1} className="absolute w-full h-full z-10 p-5 " />
        <img
          src={img2}
          className="absolute w-full h-full  transition-transform duration-500 group-hover:scale-125 lg:group-hover:scale-150 ease-in-out px-5 py-15"
        />
      </div>
      <div
        className={`flex flex-col gap-y-5 sm:items-center order-2 ${order ? "sm:order-2" : "sm:order-1"}`}
      >
        <AnimatedTitle content={title} bgColor={titleBg} />
        <div className="text-lg max-w-lg sm:font-bold sm:text-center">
          {desc}
        </div>
        <AnimationButton content={buttonContent} />
      </div>
    </div>
  );
}

export default ProductCard;
