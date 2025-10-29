import { useState, useEffect } from "react";
import LandingPage from "./pages/Landing-page";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CircleNav from "./components/CircleNav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShopingPage from "./pages/shoping-page";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AppLoader from "./pages/AppLoader";
import "./App.css";
import SupportAssistant from './components/SupportAssistant'
import NotFound from "./pages/NotFound";
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq'

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <AppLoader />;

  return (
    <div className="App fade-in">
      <CircleNav />
      <Nav />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      <SupportAssistant />
    </div>
  );
}

export default App;
