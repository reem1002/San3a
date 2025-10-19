import LandingPage from "./pages/Landing-page.jsx";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ShopingPage from "./pages/shoping-page.jsx";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./pages/ProductPage.jsx";


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
