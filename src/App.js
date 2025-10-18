import LandingPage from "./pages/Landing-page.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ShopingPage from "./pages/shoping-page.jsx";
function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopingPage />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}
export default App;
