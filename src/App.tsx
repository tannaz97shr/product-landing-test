import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <HeroSection />
      {/* <ProductImage />
      <Description />
      <Features />
      <Footer /> */}
    </div>
  );
}

export default App;
