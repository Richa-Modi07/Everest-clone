import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/Stats";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import RecipeSection from "./components/RecipeSection";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ProductsSection />
      <StatsSection />
      <RecipeSection />
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
