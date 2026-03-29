import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const navLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/products" },
  { label: "Eazy Chef", to: "/eazy-chef" },
  { label: "Tasteeto", to: "/tasteeto" },
  { label: "Recipes", to: "/recipes" },
  { label: "CSR", to: "/csr" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-20 fixed top-0 flex justify-center transition-all duration-700 ${scrolled ? "bg-black items-center" : " items-end bg-linear-to-b from-[rgb(50,50,50,1)] to-transparent"} z-30 px-10`}
    >
      {/* pt-5 lg:pt-10 */}
      <div
        className={`w-full max-w-6xl flex justify-between ${scrolled ? "items-center" : "items-end"}`}
      >
        {/* logo */}
        <Link
          to={"/"}
          className="font-semibold text-2xl lg:text-3xl p-1 text-white bg-red-600 rounded"
        >
          EVEREST
        </Link>

        {/* larger menu list */}
        <div className=" hidden lg:flex w-full max-w-3xl justify-between font-semibold text-lg text-white">
          {navLinks.map((menu) => (
            <li
              key={menu.to}
              className="relative group cursor-pointer list-none "
            >
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  `px-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-red-600 ${
                    isActive
                      ? "text-red-600  after:w-full"
                      : "hover:text-red-600 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"
                  }`
                }
              >
                {menu.label}
              </NavLink>
            </li>
          ))}
        </div>

        {/* hamMenu */}
        <div
          className="lg:hidden text-white text-5xl cursor-pointer"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="" />
        </div>
        {/* ham-menu list  */}
        <div
          className={`lg:hidden absolute top-0 right-0 w-full max-w-md bg-black text-white flex flex-col items-center gap-y-10 py-5 px-5 transform transition-transform min-h-screen duration-700 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} `}
        >
          <div className="flex justify-between items-center w-full">
            <Link
              to={"/"}
              className="font-semibold text-xl p-1 text-white bg-red-600 rounded"
            >
              EVEREST
            </Link>
            <div
              className="text-4xl text-red-600 cursor-pointer"
              onClick={toggleMenu}
            >
              <ImCross />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5 px-5 ">
            {navLinks.map((menu) => (
              <NavLink
                key={menu.to}
                onClick={() => setIsOpen(false)}
                to={menu.to}
                className="py-2 font-bold text-lg"
              >
                {menu.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
