import AnimationButton from "./AnimationButton";
import img1 from "../assets/about_1.jpg.webp";
import img2 from "../assets/about_2.jpg.webp";
import img3 from "../assets/about_3.jpg.webp";
import img4 from "../assets/about_4.jpg.webp";

function AboutUs() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 lg:py-20 px-4 lg:px-16">
      <div className="flex flex-col md:flex-row gap-5 items-center ">

        <div className="flex-1 grid grid-cols-6 grid-rows-2 gap-2 ">
          <img
            src={img1}
            className="col-span-3 row-span-2 w-full h-full transition-transform duration-300 hover:scale-110 ease-out "
          />
          <img
            src={img2}
            className="col-span-3 col-start-4 w-full h-full transition-transform duration-300 hover:scale-110 ease-out"
          />
          <img
            src={img3}
            className="col-span-2 col-start-4 w-full h-full transition-transform duration-300 hover:scale-110 ease-out"
          />
          <img
            src={img4}
            className="w-full h-full transition-transform duration-300 hover:scale-110 ease-out"
          />
        </div>

        <div className="flex-1 space-y-6 flex flex-col items-start md:items-center selection:text-white selection:bg-red-600">
          <h2 className="text-3xl md:text-5xl font-bold">About Us</h2>
          <p className="text-black md:text-center text-lg">
            <span className="bg-red-600 text-white px-1 font-bold">
              At Everest, spice isn’t just an ingredient — it’s an emotion.
            </span>{" "}
            It evokes the joy of festive feasts, the warmth of family recipes,
            and the magic of perfectly seasoned plates shared with loved ones.
            As India’s No.1 spice brand, Everest has been bringing authentic
            flavours to kitchens for generations. From our trusted classics to
            exciting innovations like the
            <span className="bg-red-600 text-white px-1 font-bold">
              Everest Tasteeto
            </span>{" "}
            range — inspired by global flavours, and the new
            <span className="bg-red-600 text-white px-1 font-bold">
              Everest Eazy Chef{" "}
            </span>{" "}
            , range — crafted for quick, delicious everyday cooking; we’re here
            to make every dish effortlessly flavourful. Everest is not just
            about spices, it’s about seasoning life’s precious moments, one meal
            at a time.
          </p>

          <AnimationButton content="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
