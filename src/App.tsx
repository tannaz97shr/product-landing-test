import Description from "./components/Description";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <ProductImage />
      <Description />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
