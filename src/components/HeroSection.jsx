import { useState, useEffect } from "react";
import bgMb1 from "../assets/Eazy-Chef-YT-Cover-banner_600_780_1.jpg.webp";
import bgMb2 from "../assets/Kitchen-King-Brar_600_780-1.jpg.webp";
import bgMb3 from "../assets/spice_brand_mobile.jpg.webp";
import bgMb4 from "../assets/Tasteeto_Banner_Mob.jpg.webp";

import bgDesk1 from "../assets/Eazy-Chef-YT-Cover-banner_1440_768.png.webp";
import bgDesk2 from "../assets/Kitchen-King-Brar_1440_768_4.jpg.webp";
import bgDesk3 from "../assets/spice_brand_desk_2.jpg.webp";
import bgDesk4 from "../assets/Tasteeto_Banner_Dekstop.jpg.webp";

function HeroSection() {
  const mobileImages = [bgMb1, bgMb2, bgMb3, bgMb4];
  const deskImages = [bgDesk1, bgDesk2, bgDesk3, bgDesk4];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const images = isMobile ? mobileImages : deskImages;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mobileImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-[80vh] sm:min-h-[40vh] max-h-screen w-full aspect-5/6 sm:aspect-video">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000  ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Slider */}
      <div className="absolute z-15 right-5 top-1/2 flex flex-col gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
