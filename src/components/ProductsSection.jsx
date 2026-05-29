import ProductCard from "./ProductCard";
import BS1 from "../assets/BlendedSpices.png.webp";
import BS2 from "../assets/spicesBg.png.webp";
function ProductsSection() {
  const productData = [
    {
      img1: BS1,
      img2: BS2,
      title: "BLENDED SPICES",
      desc: "Nothing can beat the delicious taste of traditional Indian spice blends! Everest’s range of blended spices are hand-crafted & the ingredients are sourced from India’s renowned spice lands, ensuring the taste, aroma, flavour & color remain uncompromised.",
      titleBg: "bg-red-600",
      buttonContent: "View More",
    },
    {
      img1: BS1,
      img2: BS2,
      title: "PURE SPICES",
      desc: "Pure spices play an integral part in Indian cuisine irrespective of the zone, state, community or the cooking method and hence occupies a very special place of honor. We, at Everest, believe in offering spices that are rich & authentic. And nothing more speaks of this belief than our range of Pure Spices.",
      titleBg: "bg-orange-300",
      buttonContent: "View More",
    },
    {
      img1: BS1,
      img2: BS2,
      title: "ASAFOETIDA",
      desc: "Add some ‘hing ka tadka’ to your dishes! Rich, strong and soothing Everest Hingraj Powder is made using spices of the highest quality sourced only from the best of farms. We maintain the same standards of purity, freshness and authenticity in every pack, getting their aroma and flavour, consistently right.",
      titleBg: "bg-red-600",
      buttonContent: "View More",
    },
    {
      img1: BS1,
      img2: BS2,
      title: "EXOTIC RANGE",
      desc: "Pure, premium, and exotic, Everest’s Kesar Milk Masala and Saffron are must-haves for all the traditional and mouth-watering shahi Indian feasts. Everest Saffron & Kesar Milk Masala have a subtle & earthy flavour & an unmistakable scent that makes it a special spice.",
      titleBg: "bg-orange-300",
      buttonContent: "View More",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto pb-12 px-4 lg:px-16">
      <h2 className="text-3xl sm:text-5xl font-bold text-center">
        Products You Will Love
      </h2>
      <div className="flex flex-col space-y-5">
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            order={index % 2 === 0}
            img1={item.img1}
            img2={item.img2}
            title={item.title}
            desc={item.desc}
            titleBg={item.titleBg}
            buttonContent={item.buttonContent}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
