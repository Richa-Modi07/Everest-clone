import { ArrowRight } from "lucide-react";
import newsBg from "../assets/newsletterbg.png.webp";
function NewsLetter() {
  return (
    <section className="relative w-full h-80 flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img src={newsBg} alt="bg" className="w-full h-full object-cover" />
      </div>

      <div className="z-10 text-white max-w-3xl w-full px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-12">
          Subscribe To Our Newsletter
        </h2>

        <div className="flex items-center bg-white/30 rounded-md max-w-3xl mx-16">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 bg-transparent outline-none text-white placeholder-white"
          />
          <button className="px-4 py-3 transition-transform hover:translate-x-1 cursor-pointer duration-300">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
