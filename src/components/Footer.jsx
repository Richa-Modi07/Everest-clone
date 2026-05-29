import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPhone,
  BsMap,
} from "react-icons/bs";

function Footer() {
  const FooterData = [
    { title: "Overview", to: "/overview" },
    { title: "Products", to: "/products" },
    { title: "Eazy Chef", to: "/eazy-chef" },
    { title: "Tasteeto", to: "/tasteeto" },
    { title: "Recipes", to: "/recipes" },
    { title: "CSR", to: "/csr" },
    { title: "Careers", to: "/careers" },
    { title: "Contact", to: "/contact" },
  ];
  return (
    <footer className="w-full pt-8 lg:pt-20 pb-6 px-4 lg:px-16 bg-black text-white ">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {/* div 1 */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-y-5 mb-5">
          <Link
            to={"/"}
            className="font-semibold w-fit h-fit text-2xl lg:text-3xl p-1 text-white bg-red-600 rounded"
          >
            EVEREST
          </Link>

          <div
            className="grid grid-cols-3 gap-4 sm:gap-x-8 font-semibold sm:text-lg
         xl:flex xl:flex-row xl:justify-between"
          >
            {FooterData.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="cursor-pointer hover:text-red-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* div 2 */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-y-4">
          <div className="flex flex-col gap-y-2 max-w-sm">
            <p className="font-bold">EVEREST Food Products Pvt. Ltd.</p>

            <div className="flex items-center gap-2">
              <BsMap size={16} />
              <p>
                5th Floor, Krushal Commercial Complex, G. M. Road, Amar Mahal,
                Chembur (West), Mumbai - 400 089.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <BsPhone size={16} />
              <p>+91 22 40997700</p>
            </div>
          </div>
          <div className="flex md:justify-end items-start gap-x-6 text-2xl">
            <BsFacebook className="cursor-pointer hover:text-red-500" />
            <BsInstagram className="cursor-pointer hover:text-red-500" />
            <BsTwitter className="cursor-pointer hover:text-red-500" />
            <BsYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
        {/* div3 */}
        <div className="flex flex-row justify-between text-gray-500 my-4 ">
          <p className="">CIN: U15100MH2020PTC339738</p>
          <Link to="privacy-policy" className="hover:text-red-600">
            Privacy Policy
          </Link>
        </div>

        {/* div 4 */}
        <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500">
          <p>Copyright © 2026 Everest Spices. All rights reserved.</p>
          <p>Crafted by Togglehead</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
