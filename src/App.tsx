import HomeProducts from "./components/FeatureProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <HeroSection />
      <div className="flex flex-col mx-2.5 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px] mb-10">
        <Features />
        <HomeProducts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
